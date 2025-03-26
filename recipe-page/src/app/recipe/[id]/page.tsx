// app/recipe/[id]/page.tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import { recipes } from "@/data/recipes";
import Prep from "@/components/Prep";
import Ingredients from "@/components/Ingredients";
import Instructions from "@/components/Instructions";
import Nutrition from "@/components/Nutrition";

export async function generateStaticParams() {
  return recipes.map((recipe) => ({ id: recipe.id.toString() }));
}

export default async function RecipePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) return notFound();

  return (
    <main className="flex flex-col align-middle justify-center md:my-20 max-w-[724px] m-auto">
      <section className="flex flex-col gap-8 bg-(--white) md:p-9 rounded-xl">
        <Image
          className="md:rounded-xl"
          src={recipe.image}
          alt={recipe.title}
          width={652}
          height={300}
          unoptimized={true}
        />
        <section className="flex flex-col gap-8 px-9 pb-9 md:p-0 ">
          <header>
            <h1>{recipe.title} Recipe</h1>
            <p>{recipe.description}</p>
          </header>
          <Prep recipeTime={recipe.recipeTime} />
          <Ingredients ingredients={recipe.ingredients} />
          <Instructions instructions={recipe.instructions} />
          <Nutrition nutritionValues={recipe.nutritionValues} />
        </section>
      </section>
    </main>
  );
}
