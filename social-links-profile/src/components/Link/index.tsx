import Image from "next/image";

export interface LinkProps {
    title: string;
    url: string;
  }

export default function Link({title, url}: LinkProps) {
  return (
    <div className="flex flex-col justify-center items-center text-center bg-(--grey-700) w-full h-13 rounded-[8px] cursor-pointer hover:bg-(--green) hover:!text-(--grey-800) text-(--white)">
        <a className="text-[18px] md:text-[20x] leading-[150%] font-[600] p-4" href={url}>{title}</a>
    </div>
  );
}
