import { useState } from "react";
import Card, { CardProps } from "@/components/Card/index";
import { defaultCard, extraCards } from "@/constants/cardData";

export default function Home() {
  const [cards, setCards] = useState<CardProps[]>([]);
  const [index, setIndex] = useState(0);

  const addCard = () => {
    if (extraCards.length === 0) return;

    // Get the next card
    const nextCard = extraCards[index];

    // Add to list
    setCards([...cards, nextCard]);

    // Update index (cycle back to 0 when reaching the end)
    setIndex((index + 1) % extraCards.length);
  };

  return (
    <div className="flex justify-center h-[100vh]">
      <div className="grid place-content-center">
        <Card {...defaultCard} />
        {cards.map((card, idx) => (
          <Card key={idx} {...card} />
        ))}
      </div>
      <button
        onClick={addCard}
        className="fixed bottom-4 right-4 bg-(--white) border-black outline-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] w-12 h-12 p-0 rounded-full flex items-center justify-center hover:transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer"
      >
        <svg
          className="w-8 h-8" 
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 12H20M12 4V20"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
