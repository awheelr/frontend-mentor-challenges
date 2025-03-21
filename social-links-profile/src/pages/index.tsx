import Hero from "@/components/Hero";
import Links from "@/components/Links";

export default function Home() {

  return (
    <main className="flex flex-col items-center justify-center h-screen px-6">
      <div className="flex flex-col h-sm-screen gap-6 bg-(--grey-800) m-6 p-10 max-w-md w-full h-auto rounded-[12px]">
          <Hero />
          <Links />
      </div>
    </main>
  );
}
