"use client";

import { toast } from "sonner";
import Image from "next/image";
import { useMemo, useTransition } from "react";

import { Button } from "@/components/ui/button";
import { POINTS_TO_REFILL } from "@/constants";
import { refillHearts } from "@/actions/user-progress";

interface Props {
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
}

export const Items = ({ hasActiveSubscription, hearts, points }: Props) => {
  const [pending, startTransition] = useTransition();

  const disabled = useMemo(
    () => pending || hearts === 5 || points < POINTS_TO_REFILL,
    [points, hearts, pending]
  );

  const onRefillHearts = () => {
    if (disabled) return;

    startTransition(() => {
      refillHearts().catch(() => toast.error("Something went wrong!"));
    });
  };

  return (
    <ul className="w-full">
      <div className="w-full flex items-center p-4 gap-x-4 border-t-2">
        <Image src="/heart.svg" alt="Heart" height={60} width={60} />
        <div className="flex-1">
          <p className="text-neutral-700 text-base lg:text-xl font-bold">
            Refill hearts
          </p>
        </div>
        <Button onClick={onRefillHearts} disabled={disabled}>
          {hearts === 5 ? (
            "full"
          ) : (
            <div className="flex items-center">
              <Image src="/points.svg" alt="Points" height={20} width={20} />
              <p>{POINTS_TO_REFILL}</p>
            </div>
          )}
        </Button>
      </div>
    </ul>
  );
};
