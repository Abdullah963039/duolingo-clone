import Image from "next/image";

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface Props {
  points: number;
  title: string;
  value: number;
  className?: string;
  progressCn?: string;
  titleCn?: string;
  imageSize?: number;
}

export const QuestItem = ({
  points,
  title,
  value,
  className,
  progressCn,
  titleCn,
  imageSize = 60,
}: Props) => {
  const progress = (points / value) * 100;

  return (
    <div className={cn("flex items-center w-full p-4 gap-x-4", className)}>
      <Image
        src="/points.svg"
        alt="Points"
        width={imageSize}
        height={imageSize}
      />
      <div className="flex flex-col gap-y-2 w-full">
        <p className={cn("text-neutral-700 text-xl font-bold", titleCn)}>
          {title}
        </p>
        <Progress value={progress} className={cn("h-3", progressCn)} />
      </div>
    </div>
  );
};
