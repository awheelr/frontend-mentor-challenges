import { StaticImageData } from "next/image";

export interface RecipeTime {
  preparation: number;
  cooking: number;
}

export interface Instruction {
  instruction: string;
  explanation: string;
}

export interface NutritionValues {
  calories: string;
  carbs: string;
  protein: string;
  fat: string;
}

export interface Recipe {
  id: string;
  image: StaticImageData;
  title: string;
  description: string;
  recipeTime: RecipeTime;
  ingredients: string[];
  instructions: Instruction[];
  nutritionValues: NutritionValues;
}
