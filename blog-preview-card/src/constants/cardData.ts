import { CardProps } from "@/components/Card";
import { generateRandomFormattedDate } from "@/utils/generateRandomDate";

export const defaultCard: CardProps = {
  imageUrl: "/illustration-article.svg",
  publishedDate: "Published 21 Dec 2023",
  tags: ["Learning", "Testing"],
  title: "HTML & CSS foundations",
  description:
    "These languages are the backbone of every website, defining structure, content, and presentation.",
  author: "Greg Hooper",
};

export const extraCards: CardProps[] = [
  {
    imageUrl: "illustration-article.svg",
    publishedDate: `Published ${generateRandomFormattedDate()}`,
    title: "TypeScript Basics",
    description:
      "These languages power dynamic web applications, enabling interactivity, logic, and seamless functionality.",
    tags: ["TypeScript"],
    author: "Greg Hooper",
  },
  {
    imageUrl: "illustration-article.svg",
    publishedDate: `Published ${generateRandomFormattedDate()}`,
    title: "React & Next.js Essentials",
    description:
      "These frameworks streamline modern web development, enhancing performance, scalability, and user experience.",
    tags: ["React", "Next.js"],
    author: "Greg Hooper",
  },
  {
    imageUrl: "illustration-article.svg",
    publishedDate: `Published ${generateRandomFormattedDate()}`,
    title: "Web Design Principles",
    description:
      "These core concepts shape every webpage, influencing layout, styling, and overall visual appeal.",
    tags: ["HTML", "CSS"],
    author: "Greg Hooper",
  },
  {
    imageUrl: "illustration-article.svg",
    publishedDate: `Published ${generateRandomFormattedDate()}`,
    title: "Frontend Fundamentals",
    description:
      "These foundational skills drive user interfaces, combining structure, design, and interactive elements.",
    tags: ["UI/UX", "Design"],
    author: "Greg Hooper",
  },
  {
    imageUrl: "illustration-article.svg",
    publishedDate: `Published ${generateRandomFormattedDate()}`,
    title: "Modern UI/UX Tricks",
    description:
      "These tools refine web styling, offering efficiency, flexibility, and responsive design capabilities.",
    tags: ["UI/UX", "Tailwind"],
    author: "Greg Hooper",
  },
];
