import { StaticImageData } from "next/image";
import { SocialLink } from "./socialLink";

export interface User {
  avatar: StaticImageData;
  name: string;
  location: string;
  description: string;
  socials: SocialLink[];
}
