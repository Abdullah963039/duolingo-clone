"use client";

import { useState } from "react";

import type { LessonChallenge } from "@/types";

import { Header } from "./header";

interface Props {
  initialLessonId: number;
  initialLessonChallenges: LessonChallenge[];
  initialHearts: number;
  initialPercentage: number;
  userSubscription: any; //!
}

export const Quiz = ({
  initialHearts,
  initialLessonChallenges,
  initialLessonId,
  initialPercentage,
  userSubscription,
}: Props) => {
  const [hearts, setHearts] = useState<number>(initialHearts);
  const [percentage, setPercentage] = useState<number>(50 ?? initialPercentage);

  return (
    <>
      <Header
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubscription?.isActive}
      />
    </>
  );
};
