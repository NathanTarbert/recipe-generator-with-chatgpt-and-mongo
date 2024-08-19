"use client";
import Image from "next/image";
import { useCopilotAction, useCopilotReadable } from "@copilotkit/react-core";
import { useRecipes } from "@/context/RecipesProvider";
// import { RecipeCard } from "../components/Recipe-card";

export default function Home() {
  const { recipes, addRecipe, setRecipeStatus, deleteRecipe } = useRecipes();

  useCopilotReadable({
    description: "Read the recipes that have been created",
    value: recipes,
  });

  // useCopilotAction({
  //   name: "updateRecipes",
  //   description: "Create or modify to the recipe list",
  //   parameters: [
  //     {
  //       name: "recipes",
  //       type: "string",
  //       description: "The name of the recipe that is created or modified",
  //       required: true,
  //     },
  //   ],
  //   render: ({ status, args }) => {
  //     const { recipe } = args;
  //     if ( recipe === undefined )
  //       return "";
  //     if (
  //       typeof recipe !== "string" ||

  //     )
  //       return "";

  //     const updateRecipe = () => {
  //       setRecipe((prev) => {
  //         return prev.map((recipe) => {
  //           if (recipe.title) {
  //             return { recipe };
  //           }
  //           return recipe;
  //         });
  //       });
  //     };
  //     return (
  //       <div className="w-full p-2">
  //         <p className="text-sm text-blue-400 mb-2">Status: {status}</p>
  //         <ChartComponent chartData={[{ recipe }]} />
  //         <button
  //           className="px-4 py-2 bg-blue-400 text-white shadow rounded-md"
  //           onClick={updateChart}>
  //           Update
  //         </button>
  //       </div>
  //     );
  //   },
  // });

  return (
    <main className="flex min-h-screen flex-col p-24 md:px-24 lg:px-48 font-serif">
      <h1 className="text-5xl mt-10 mb-2">Let's Make Something Yummy!</h1>

      <p className="text-2xl mb-10">
        &ldquo;Cook with Confidence, Create recipe's with CopilotKit.&ldquo;
      </p>

      <div className="w-full h-auto">
        <Image
          sizes="100vw"
          width={1024}
          height={1024}
          style={{ width: "100%", height: "auto" }}
          alt="recipe photo"
          src="/recipe_gen_hero_image.webp"
        />
      </div>

      {/* <section id="hero_section" className="p-10 my-10">
        <p className="text-5xl pb-5">
          Discover Delicious Recipes with AI Magic Transform your ingredients
          into gourmet meals with just a few clicks! Our app uses cutting-edge
          AI technology to generate personalized recipes based on what you have
          at home. Plus, enjoy stunning AI-generated images to inspire your
          culinary creations.
        </p>

        <Link href="/create" className="text-lg">
          Get started
        </Link>
        <hr />
      </section>

      <section id="how_it_works" className="text-2xl p-10 leading-loose">
        <ul>
          <h2>How it works</h2>
          <li>
            Input Your Ingredients: Simply enter the ingredients you have on
            hand, and let our AI do the rest.
          </li>
          <li>
            Generate a Recipe: Watch as our AI crafts a detailed, step-by-step
            recipe tailored to your ingredients.
          </li>
          <li>
            Visualize Your Dish: Get a mouth-watering, AI-generated image of
            your dish to see what&apos;s cooking.
          </li>
          <li>
            Cook & Enjoy: Follow the recipe and enjoy a delicious meal,
            customized just for you!
          </li>
        </ul>
      </section>

      <section id="why_choose_us" className="text-2xl p-10 leading-loose">
        <ul>
          <h2>Why choose Us?</h2>
          <li>
            AI-Powered Creativity: Harness the power of AI to unlock endless
            culinary possibilities.
          </li>
          <li>
            Beautiful Imagery: Our app not only generates recipes but also
            provides stunning visuals to accompany them.
          </li>
          <li>
            User-Friendly Experience: Simple and intuitive design, making it
            easy for anyone to cook like a pro.
          </li>
        </ul>
      </section>

      <section id="testimonials" className="text-2xl p-10 leading-loose">
        <h2>Testimonials:</h2>
        <p>
          &quot;This app has revolutionized my cooking! I never knew what to do
          with my leftover ingredients until now.&quot; - Jamie, Home Chef
        </p>
        <p>
          &quot;The AI-generated images are amazing! It&quot;s like having a
          personal chef and food photographer in one.&quot; - Sarah, Food
          Enthusiast
        </p>
      </section> */}
    </main>
  );
}
