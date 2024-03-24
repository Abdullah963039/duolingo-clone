import { redirect } from "next/navigation";

import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";
import {
  getCouresProgress,
  getLessonPercentage,
  getUnits,
  getUserProgress,
  getUserSubscription,
} from "@/db/queries";

import { Header } from "./_components/header";
import { Unit } from "./_components/unit";

export default async function LearnPage() {
  const unitsPromise = getUnits();
  const courseProgressPromise = getCouresProgress();
  const lessonPercentagePromise = getLessonPercentage();
  const userProgressPromise = getUserProgress();
  const userSubscriptionPromise = getUserSubscription();

  const [
    userProgress,
    units,
    courseProgress,
    lessonPercentage,
    userSubscription,
  ] = await Promise.all([
    userProgressPromise,
    unitsPromise,
    courseProgressPromise,
    lessonPercentagePromise,
    userSubscriptionPromise,
  ]);

  if (!userProgress || !userProgress.activeCourse || !courseProgress) {
    redirect("/courses");
  }

  const isPro = !!userSubscription?.isActive;

  return (
    <div className="flex flex-row-reverse gap-12 px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={!!userSubscription?.isActive}
        />
        {!isPro && <Promo />}
        <Quests points={userProgress.points} />
      </StickyWrapper>
      <FeedWrapper>
        <Header title={userProgress.activeCourse.title} />
        {units.map((unit) => (
          <div key={unit.id} className="mb-10">
            <Unit
              activeLessonPercentage={lessonPercentage}
              activeLesson={courseProgress.activeLesson}
              {...unit}
            />
          </div>
        ))}
      </FeedWrapper>
    </div>
  );
}
