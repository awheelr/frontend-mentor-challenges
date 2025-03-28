import { PreparationTime } from "@/models/PreparationTime";
import { RecipeTime } from "@/types/recipe";

export interface PreparationProps {
  recipeTime: RecipeTime;
}

export default function Preparation({ recipeTime }: PreparationProps) {
  const prepTime = new PreparationTime(
    recipeTime.cooking,
    recipeTime.preparation
  );

  return (
    <section className="prep bg-(--rose-50) p-6 rounded-xl">
      <h2>Preparation time</h2>
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
