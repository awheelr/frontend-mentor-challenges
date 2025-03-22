import { User } from "@/types/user";
import Hero from "./Hero";
import Links from "./Links";

export default function Profile({ user }: { user: User }) {
  return (
    <div className="flex flex-col h-sm-screen gap-6 bg-(--grey-800) m-6 p-10 max-w-md w-full h-auto rounded-[12px]">
      <Hero {...user} />
      <Links {...user} />
    </div>
  );
}
