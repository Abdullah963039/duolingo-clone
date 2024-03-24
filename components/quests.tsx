import Link from "next/link";

import { Button } from "@/components/ui/button";
import { QuestItem } from "@/components/quest-item";
import { QUESTS } from "@/constants";

interface Props {
  points: number;
}

export const Quests = ({ points }: Props) => {
  return (
    <div className="border-2 rounded-xl p-4 space-y-2">
      <div className="flex items-center justify-between w-full">
        <h3 className="font-bold text-lg">Quests</h3>
        <Link href="/quests">
          <Button size="sm" variant="primary-outline">
            view all
          </Button>
        </Link>
      </div>
      <ul className="w-full space-y-2">
        {QUESTS.slice(0, 3).map((quest) => (
          <QuestItem
            key={quest.title}
            titleCn="text-base"
            progressCn="h-1.5"
            points={points}
            className="p-0 pb-4"
            imageSize={32}
            {...quest}
          />
        ))}
      </ul>
    </div>
  );
};
