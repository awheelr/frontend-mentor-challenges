import { SocialLink } from "@/types/socialLink";
import Link from "next/link";

interface LinksProps {
  socials: SocialLink[];
}

export default function Links({ socials }: LinksProps) {
  return (
    <div className="flex flex-1 flex-col items-center gap-4">
      {socials.map((link, index) => (
        <Link
          key={index}
          className="interactive flex flex-col justify-center items-center text-center bg-(--grey-700) w-full h-13 rounded-[8px] cursor-pointer text-[18px] md:text-[20x] leading-[150%] font-[600] p-4"
          href={link.url}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
