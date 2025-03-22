import Image, { StaticImageData } from "next/image";

interface HeroProps {
  avatar: StaticImageData;
  name: string;
  location: string;
  description: string;
}

export default function Hero({
  avatar,
  name,
  location,
  description,
}: HeroProps) {
  return (
    <div className="flex flex-col items-center gap-7">
      <Image
        className="rounded-full"
        src={avatar}
        width={100}
        height={100}
        alt="Picture of the author"
      />
      <section className="flex flex-col items-center">
        <h1 className="text-[28px] leading-[180%] tracking-wide font-[700]">
          {name}
        </h1>
        <address className="text-(--green) text-[18px] leading-[150%] font-[600]">
          {location}
        </address>
      </section>
      <p className="text-center">&quot;{description}&quot;</p>
    </div>
  );
}
