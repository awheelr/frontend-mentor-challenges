import Profile from "@/components/Profile";
import { jessicaRandall } from "@/data/userData";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen px-6">
      <Profile user={jessicaRandall} />
    </main>
  );
}
