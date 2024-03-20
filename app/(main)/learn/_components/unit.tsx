import { Lesson, Unit as TUnit } from "@/types";

import { UnitBanner } from "./unit-banner";
import { LessonButton } from "./lesson-button";

interface Props {
  id: number;
  order: number;
  description: string;
  title: string;
  lessons: (Lesson & { completed: boolean })[];
  activeLesson?: Lesson & { unit: TUnit };
  activeLessonPercentage: number;
}

export const Unit = ({
  activeLessonPercentage,
  description,
  id,
  lessons,
  order,
  title,
  activeLesson,
}: Props) => {
  return (
    <>
      <UnitBanner title={title} description={description} />
      <div className="flex items-center flex-col relative">
        {lessons.map((lesson, idx) => {
          const isCurrent = lesson.id === activeLesson?.id;
          const isLocked = !lesson.completed && !isCurrent;

          return (
            <LessonButton
              key={lesson.id}
              id={lesson.id}
              index={idx}
              totalCount={lessons.length - 1}
              current={isCurrent}
              locked={isLocked}
              percentage={activeLessonPercentage}
            />
          );
        })}
      </div>
    </>
  );
};
