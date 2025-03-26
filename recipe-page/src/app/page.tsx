import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { recipes } from "@/data/recipes";

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Recipe page</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>
      <main className="flex flex-col  align-middle justify-center bg-(--tan) px-8 md:my-20 max-w-[724px] m-auto">
        <section>
          <h1>Recipes</h1>
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,2fr))] gap-6">
            {recipes.map((recipe) => (
              <Link
                key={recipe.id}
                href={`/recipe/${recipe.id}`}
                className="card gap-1 shadow-[0px_8px_8px_rgba(0,0,0,0.035)] min-h-[250px] bg-(--white) p-6 rounded-xl cursor-pointer"
              >
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  className="rounded-xl h-[160px]"
                  quality={100}
                  width={500}
                  height={500}
                />
                <h1 className="!text-[22px]">{recipe.title}</h1>
                <p className="line-clamp-2">{recipe.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
