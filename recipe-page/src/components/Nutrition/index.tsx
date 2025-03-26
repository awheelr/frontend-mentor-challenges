import { NutritionValues } from "@/types/recipe";

interface NutritionProps {
  nutritionValues: NutritionValues;
}

export default function Nutrition({ nutritionValues }: NutritionProps) {
  return (
    <section>
      <h2>Nutrition</h2>
      <p>
        The table below shows nutritional values per serving without additional
        fillings.
      </p>

      <table className="nutrition-table">
        <tbody>
          <tr>
            <td>Calories</td>
            <td className="nutrient-value">{nutritionValues.calories}</td>
          </tr>
          <tr>
            <td>Carbs</td>
            <td className="nutrient-value">{nutritionValues.carbs}</td>
          </tr>
          <tr>
            <td>Protein</td>
            <td className="nutrient-value">{nutritionValues.protein}</td>
          </tr>
          <tr>
            <td>Fat</td>
            <td className="nutrient-value">{nutritionValues.fat}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
