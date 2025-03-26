import { Instruction } from "@/types/recipe";

function InstructionsList({ instructions }: InstructionsProps) {
  return (
    <ol className="list-decimal list-outside ml-8">
      {instructions.map((value: Instruction, index) => (
        <li
          key={index}
          className="marker:text-(--brown-800) marker:font-bold px-4 p-1 "
        >
          <b>{value.instruction}</b>: {value.explanation}
        </li>
      ))}
    </ol>
  );
}

interface InstructionsProps {
  instructions: Instruction[];
}

export default function Instructions({ instructions }: InstructionsProps) {
  return (
    <section>
      <h2>Instructions</h2>
      <InstructionsList instructions={instructions} />
    </section>
  );
}
