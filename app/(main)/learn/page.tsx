import { redirect } from "next/navigation";

import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import {
  getCouresProgress,
  getLessonPercentage,
  getUnits,
  getUserProgress,
} from "@/db/queries";

import { Header } from "./_components/header";
import { Unit } from "./_components/unit";

export default async function LearnPage() {
  const unitsPromise = getUnits();
  const courseProgressPromise = getCouresProgress();
  const lessonPercentagePromise = getLessonPercentage();
  const userProgressPromise = getUserProgress();

  const [userProgress, units, courseProgress, lessonPercentage] =
    await Promise.all([
      userProgressPromise,
      unitsPromise,
      courseProgressPromise,
      lessonPercentagePromise,
    ]);

  if (!userProgress || !userProgress.activeCourse || !courseProgress) {
    redirect("/courses");
  }

  return (
    <div className="flex flex-row-reverse gap-12 px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
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
