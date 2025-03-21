import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col items-center gap-7"> 
    <Image
    className="rounded-[100%]"
      src="/avatar.jpeg"
      width={100}
      height={100}
      alt="Picture of the author"
    />
    <div className="flex flex-col items-center">
        <h1 className="text-(--white) text-[28px] leading-[180%] tracking-wide font-[700]">Jessica Randall</h1>
        <h2 className="text-(--green) text-[18px] leading-[150%] font-[600]">London, United Kingdom</h2>
    </div>
    <p className="text-(--white)">"Front-end developer and avid reader."</p>
    </div>
  );
}
