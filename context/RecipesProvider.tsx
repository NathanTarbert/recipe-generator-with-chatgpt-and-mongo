import { useCopilotAction, useCopilotReadable } from "@copilotkit/react-core";
import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { RecipeModel } from "../models/recipe.model";
import { RecipeStatus } from "../types";

type Recipe = {
  _id: string;
  recipe_title: string;
  recipe_content: string;
  recipe_image: string;
};

type RecipesContextType = {
  recipes: Recipe[];
  addRecipe: (title: string, content: string, image: string) => void;
  setRecipeStatus: (id: string, status: RecipeStatus) => void;
  deleteRecipe: (id: string) => void;
};

const RecipesContext = createContext<RecipesContextType | undefined>(undefined);

export const RecipesProvider = ({ children }: { children: ReactNode }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const fetchedRecipes = await RecipeModel.find(); // Fetch from MongoDB
      setRecipes(fetchedRecipes);
    };

    fetchRecipes();
  }, []);

  useCopilotReadable({
    description: "The state of the recipe list",
    value: JSON.stringify(recipes),
  });

  useCopilotAction({
    name: "addRecipe",
    description: "Adds a recipe to the list",
    parameters: [
      {
        name: "title",
        type: "string",
        description: "The title of the recipe",
        required: true,
      },
      {
        name: "content",
        type: "string",
        description: "The content of the recipe",
        required: true,
      },
      {
        name: "image",
        type: "string",
        description: "The image of the recipe",
        required: true,
      },
    ],
    handler: async ({ title, content, image }) => {
      addRecipe(title, content, image);
    },
  });

  useCopilotAction({
    name: "deleteRecipe",
    description: "Deletes a recipe from the list",
    parameters: [
      {
        name: "id",
        type: "string",
        description: "The id of the recipe",
        required: true,
      },
    ],
    handler: ({ id }) => {
      deleteRecipe(id);
    },
  });

  useCopilotAction({
    name: "setRecipeStatus",
    description: "Sets the status of a recipe",
    parameters: [
      {
        name: "id",
        type: "string",
        description: "The id of the recipe",
        required: true,
      },
      {
        name: "status",
        type: "string",
        description: "The status of the recipe",
        enum: Object.values(RecipeStatus),
        required: true,
      },
    ],
    handler: ({ id, status }) => {
      setRecipeStatus(id, status);
    },
  });

  const addRecipe = async (title: string, content: string, image: string) => {
    const newRecipe = new RecipeModel({
      recipe_title: title,
      recipe_content: content,
      recipe_image: image,
      status: RecipeStatus.Draft,
    });
    await newRecipe.save();
    setRecipes([...recipes, newRecipe]);
    console.log({ recipes });
  };

  const setRecipeStatus = async (id: string, status: RecipeStatus) => {
    await RecipeModel.findByIdAndUpdate(id, { status });
    setRecipes(
      recipes.map((recipe) =>
        recipe._id === id ? { ...recipe, status } : recipe
      )
    );
  };

  const deleteRecipe = async (id: string) => {
    await RecipeModel.findByIdAndDelete(id);
    setRecipes(recipes.filter((recipe) => recipe._id !== id));
  };

  return (
    <RecipesContext.Provider
      value={{ recipes, addRecipe, setRecipeStatus, deleteRecipe }}>
      {children}
    </RecipesContext.Provider>
  );
};

export const useRecipes = () => {
  const context = useContext(RecipesContext);
  if (context === undefined) {
    throw new Error("useRecipes must be used within a RecipesProvider");
  }
  return context;
};
