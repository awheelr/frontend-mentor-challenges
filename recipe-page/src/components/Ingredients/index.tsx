interface IngredientsProps {
    ingredients: string[];
  }
  
  function IngredientsList({ ingredients }: IngredientsProps) {
    return (
      <ul className="list-disc list-outside ml-8">
        {ingredients.map((ingredient, index) => (
          <li
            key={index}
            className="text-[16px] marker:text-(--brown-800) p-1 pl-4"
          >
            {ingredient}
          </li>
        ))}
      </ul>
    );
  }
  
  export default function Ingredients({ ingredients }: IngredientsProps) {
    return (
      <section>
        <h2 className="">Ingredients</h2>
        <IngredientsList ingredients={ingredients} />
      </section>
    );
  }
  