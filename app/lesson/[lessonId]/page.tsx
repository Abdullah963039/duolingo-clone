import { redirect } from "next/navigation";

import { getLesson, getUserProgress } from "@/db/queries";

import { Quiz } from "../_components/quiz";

export default async function LessonIdPage({
  params,
}: {
  params: { lessonId: number };
}) {
  const lessonPromise = getLesson(params.lessonId);
  const userProgressPromise = getUserProgress();

  const [lesson, userProgress] = await Promise.all([
    lessonPromise,
    userProgressPromise,
  ]);

  if (!lesson || !userProgress) {
    redirect("/learn");
  }

  const initialPercentage =
    (lesson.challenges.filter((challenge) => challenge.completed).length /
      lesson.challenges.length) *
    100;

  return (
    <Quiz
      initialLessonId={lesson.id}
      initialLessonChallenges={lesson.challenges}
      initialHearts={userProgress.hearts}
      initialPercentage={initialPercentage}
      userSubscription={undefined}
    />
  );
}
