import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  recipe_title: { type: String, required: true },
  recipe_content: { type: String, required: true },
  recipe_image: { type: String, required: true },
});

export const RecipeModel = mongoose.model("Recipe", recipeSchema);
