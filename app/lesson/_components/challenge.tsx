import { cn } from "@/lib/utils";
import type { Challenge as TChallenge, ChallengeOption } from "@/types";
import { Card } from "./card";

interface Props {
  options: ChallengeOption[];
  onSelect: (id: number) => void;
  disabled?: boolean;
  selectedOption?: number;
  status: "correct" | "wrong" | "none";
  type: TChallenge["type"];
}

export const Challenge = ({
  disabled,
  onSelect,
  options,
  status,
  type,
  selectedOption,
}: Props) => {
  return (
    <div
      className={cn(
        "grid gap-2",
        type === "ASSIST" && "grid-cols-1",
        type === "SELECT" &&
          "grid-cols-2 lg:grid-cols-[repeat(auto-fit,_minmax(0,_1fr))]"
      )}
    >
      {options.map((option, idx) => (
        <Card
          key={option.id}
          shortcut={`${idx + 1}`}
          selected={selectedOption === option.id}
          onClick={() => onSelect(option.id)}
          status={status}
          disabled={disabled}
          type={type}
          {...option}
        />
      ))}
    </div>
  );
};
