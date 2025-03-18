import Image from "next/image";

export interface CardProps {
  imageUrl: string;
  publishedDate: string;
  tags: string[];
  title: string;
  description: string;
  author: string;
}

export default function Card({
  imageUrl,
  publishedDate,
  tags,
  title,
  description,
  author,
}: CardProps) {
  const hueShift =
    publishedDate === "Published 21 Dec 2023" ? 0 : Math.random() * 270;

  return (
    <div className="card rounded-[20px] p-[24px] w-[327px] md:w-[384px] h-[501px] md:h-[528px] animate-(--fade-animation) transition-transform duration-200 ease-in-out hover:scale-105">
      <Image
        className="mb-[24px] rounded-[10px]"
        style={{ filter: `hue-rotate(${hueShift}deg)` }}
        src={imageUrl}
        alt="placeholder-thumbnail"
        width={500}
        height={200}
      />
      <div className="flex flex-col gap-[12px] my-[24px] h-[200px]">
        <div className="flex flex-row gap-[6px]">
          {tags.map((name) => (
            <span className="bg-[var(--yellow)] px-[12px] py-[4px] rounded-[4px] font-small-extra-bold">
              {name}
            </span>
          ))}
        </div>
        <span className="font-small-medium">{publishedDate}</span>
        <h1 className="font-base-extra-bold transition delay-25 duration-250 ease-in-out hover:!text-[var(--yellow)] cursor-pointer">
          {title}
        </h1>
        <p className="font-base-medium">{description}</p>
      </div>

      <div className="flex flex-row gap-[12px] items-center">
        <Image
          src="/image-avatar.webp"
          alt="author-avatar"
          width={32}
          height={32}
        />
        <h3 className="font-small-extra-bold">{author}</h3>
      </div>
    </div>
  );
}
