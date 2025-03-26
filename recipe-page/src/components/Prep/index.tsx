import { PreparationTime } from "@/models/PreparationTime";
import { RecipeTime } from "@/types/recipe";

export interface PrepProps {
  recipeTime: RecipeTime;
}

export default function Prep({ recipeTime }: PrepProps) {
  const prepTime = new PreparationTime(
    recipeTime.cooking,
    recipeTime.preparation
  );

  return (
    <section className="bg-(--rose-50) p-6 rounded-xl">
      <h3>Preparation time</h3>
      <ul className="list-disc list-outside ml-8">
        <li className="text-[16px] marker:text-(--rose-800) p-1 pl-4">
          <b>Total</b>: Approximately {prepTime.total} minutes
        </li>
        <li className="text-[16px] marker:text-(--rose-800) p-1 pl-4">
          <b>Preparation</b>: {prepTime.cooking} minutes
        </li>
        <li className="text-[16px] marker:text-(--rose-800) p-1 pl-4">
          <b>Cooking</b>: {prepTime.preparation} minutes
        </li>
      </ul>
    </section>
  );
}
