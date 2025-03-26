import { Recipe } from "@/types/recipe";
import omeletteImage from "@/assets/image-omelette.jpeg";
import quinoaImage from "@/assets/quinoa-breakfast-bowl.jpeg";
import avacadoToastImage from "@/assets/avacado-toast.jpg";
import spaghettiAglioOlioImage from "@/assets/spaghetti-aglio-e-olio.jpg";
import oatmealPancakesImage from "@/assets/oatmeal-pancakes.jpeg";

const defaultRecipe: Recipe = {
  id: "omelette",
  image: omeletteImage,
  title: "Simple Omelette",
  description:
    "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.",
  recipeTime: {
    preparation: 5,
    cooking: 5,
  },
  ingredients: [
    "2-3 large eggs",
    "Salt, to taste",
    "Pepper, to taste",
    "1 tablespoon of butter or oil",
    "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
  ],
  instructions: [
    {
      instruction: "Beat the eggs",
      explanation:
        "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
    },
    {
      instruction: "Heat the pan",
      explanation:
        "Place a non-stick frying pan over medium heat and add butter or oil.",
    },
    {
      instruction: "Cook the omelette:",
      explanation:
        "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
    },
    {
      instruction: "Add fillings (optional)",
      explanation:
        "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
    },
    {
      instruction: "Fold and serve",
      explanation:
        "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
    },
    {
      instruction: "Enjoy",
      explanation: "Serve hot, with additional salt and pepper if needed.",
    },
  ],
  nutritionValues: {
    calories: "277kcal",
    carbs: "0g",
    protein: "20g",
    fat: "22g",
  },
};

const avocadoToastWithPoachedEgg: Recipe = {
  id: "avocado-toast-poached-egg",
  image: avacadoToastImage, // Replace with actual image import
  title: "Avocado Toast",
  description:
    "A delicious and nutritious avocado toast topped with a perfectly poached egg.",
  recipeTime: {
    preparation: 5,
    cooking: 10,
  },
  ingredients: [
    "2 ripe avocados",
    "4 slices whole-grain bread",
    "2 large eggs",
    "1 tablespoon apple cider vinegar",
    "1 tablespoon olive oil",
    "Salt, to taste",
    "Black pepper, to taste",
    "Red pepper flakes (optional)",
    "Fresh parsley or cilantro, for garnish",
  ],
  instructions: [
    {
      instruction: "Toast the bread",
      explanation:
        "Toast the whole-grain bread slices until they’re golden and crispy",
    },
    {
      instruction: "Prepare the poaching water",
      explanation:
        "In a small saucepan, bring water to a gentle simmer and add apple cider vinegar",
    },
    {
      instruction: "Crack and add the eggs",
      explanation:
        "Crack each egg into a small bowl, then carefully slide them into the simmering water",
    },
    {
      instruction: "Poach the eggs",
      explanation:
        "Poach the eggs for about 3-4 minutes for a runny yolk; adjust the time for firmer yolks",
    },
    {
      instruction: "Mash the avocado",
      explanation:
        "While the eggs are poaching, scoop the ripe avocados into a bowl and mash with a fork, adding olive oil, salt, and pepper to taste",
    },
    {
      instruction: "Spread the avocado",
      explanation:
        "Spread the mashed avocado evenly on the toasted bread slices",
    },
    {
      instruction: "Drain the eggs",
      explanation:
        "Once the eggs are ready, use a slotted spoon to remove them and let the excess water drain",
    },
    {
      instruction: "Assemble the toast",
      explanation:
        "Place a poached egg on each avocado toast, sprinkle with red pepper flakes, and garnish with fresh herbs",
    },
    {
      instruction: "Serve and enjoy",
      explanation: "Serve immediately and enjoy your healthy breakfast",
    },
  ],
  nutritionValues: {
    calories: "320 kcal",
    carbs: "28g",
    protein: "12g",
    fat: "18g",
  },
};

const quinoaBreakfastBowl: Recipe = {
  id: "quinoa-breakfast-bowl",
  image: quinoaImage,
  title: "Quinoa Bowl",
  description:
    "A nutritious and delicious quinoa breakfast bowl packed with fresh ingredients.",
  recipeTime: {
    preparation: 5,
    cooking: 15,
  },
  ingredients: [
    "1 cup quinoa, rinsed",
    "2 cups water or vegetable broth",
    "1 cup cherry tomatoes, halved",
    "1 cup spinach, chopped",
    "1 avocado, diced",
    "1/4 cup almonds, chopped",
    "1 tablespoon olive oil",
    "1 teaspoon lemon juice",
    "Salt and pepper, to taste",
  ],
  instructions: [
    {
      instruction: "Cook the quinoa",
      explanation:
        "In a medium saucepan, combine quinoa and water or vegetable broth. Bring to a boil, then reduce the heat, cover, and simmer for 15 minutes, or until quinoa is fluffy and water is absorbed.",
    },
    {
      instruction: "Sauté the vegetables",
      explanation:
        "While the quinoa is cooking, heat olive oil in a skillet over medium heat. Add cherry tomatoes and chopped spinach, sautéing until the spinach wilts (about 3-5 minutes).",
    },
    {
      instruction: "Mix ingredients",
      explanation:
        "In a large bowl, combine the cooked quinoa, sautéed veggies, and diced avocado. Drizzle with lemon juice and season with salt and pepper to taste.",
    },
    {
      instruction: "Assemble the bowls",
      explanation:
        "Divide the mixture into two bowls, and top each with chopped almonds for a crunchy finish.",
    },
    {
      instruction: "Serve and enjoy",
      explanation:
        "Serve warm or at room temperature, and enjoy your healthy breakfast!",
    },
  ],
  nutritionValues: {
    calories: "350 kcal",
    carbs: "38g",
    protein: "10g",
    fat: "18g",
  },
};

const spaghettiAglioOlio: Recipe = {
  id: "spaghetti-aglio-e-olio",
  image: spaghettiAglioOlioImage,
  title: "Spaghetti Aglio e Olio",
  description:
    "A classic Italian pasta dish made with garlic, olive oil, red pepper flakes, and parsley for a simple yet flavorful meal",
  recipeTime: {
    preparation: 5,
    cooking: 15,
  },
  ingredients: [
    "400g Spaghetti",
    "4 cloves Garlic",
    "60ml Olive oil",
    "1 teaspoon Red pepper flakes",
    "A handful Parsley",
    "To taste Salt",
    "To taste Black pepper",
  ],
  instructions: [
    {
      instruction: "Cook the spaghetti",
      explanation:
        "Cook the spaghetti in a large pot of salted boiling water until al dente, according to package instructions",
    },
    {
      instruction: "Heat the olive oil",
      explanation:
        "While the pasta is cooking, heat the olive oil in a large pan over medium heat",
    },
    {
      instruction: "Sauté the garlic",
      explanation:
        "Add the sliced garlic to the pan and sauté until golden brown, being careful not to burn it",
    },
    {
      instruction: "Add red pepper flakes",
      explanation:
        "Add the red pepper flakes to the garlic and continue to sauté for another minute",
    },
    {
      instruction: "Combine spaghetti with garlic oil",
      explanation:
        "Drain the cooked spaghetti and add it to the pan with the garlic and oil, tossing to coat",
    },
    {
      instruction: "Season the pasta",
      explanation: "Season the pasta with salt and black pepper to taste",
    },
    {
      instruction: "Add parsley",
      explanation: "Add chopped parsley and toss the pasta again to mix well",
    },
    {
      instruction: "Serve and garnish",
      explanation: "Serve immediately, garnished with extra parsley if desired",
    },
  ],
  nutritionValues: {
    calories: "480 kcal",
    carbs: "60g",
    protein: "12g",
    fat: "18g",
  },
};

const oatmealPancakes: Recipe = {
  id: "oatmeal-pancakes",
  image: oatmealPancakesImage,
  title: "Oatmeal Pancakes",
  description:
    "Fluffy oatmeal pancakes perfect for breakfast, topped with maple syrup for a delicious treat",
  recipeTime: {
    preparation: 10,
    cooking: 15,
  },
  ingredients: [
    "1 cup Oats",
    "1 cup Milk",
    "2 Eggs",
    "1/2 cup All-purpose flour",
    "1 1/2 teaspoons Baking powder",
    "1/4 teaspoon Salt",
    "2 tablespoons, melted Butter",
    "for serving Maple syrup",
  ],
  instructions: [
    {
      instruction: "Soak the oats",
      explanation:
        "In a blender, combine oats and milk. Let them soak for about 5 minutes for the oats to soften",
    },
    {
      instruction: "Blend the ingredients",
      explanation:
        "Add eggs, all-purpose flour, baking powder, salt, and melted butter to the blender. Blend until the mixture is smooth",
    },
    {
      instruction: "Heat the griddle or pan",
      explanation:
        "Heat a lightly oiled griddle or frying pan over medium-high heat",
    },
    {
      instruction: "Cook the pancakes",
      explanation:
        "Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot",
    },
    {
      instruction: "Serve the pancakes",
      explanation: "Serve the pancakes with maple syrup",
    },
  ],
  nutritionValues: {
    calories: "220 kcal",
    carbs: "30g",
    protein: "7g",
    fat: "8g",
  },
};

export const recipes = [
  defaultRecipe,
  quinoaBreakfastBowl,
  avocadoToastWithPoachedEgg,
  spaghettiAglioOlio,
  oatmealPancakes,
];
