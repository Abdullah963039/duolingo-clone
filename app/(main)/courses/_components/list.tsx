"use client";

import { Course } from "@/types";

import { Card } from "./card";

interface Props {
  courses: Course[];
  activeCourseId: number;
}

export const List = ({ courses, activeCourseId }: Props) => {
  return (
    <div className="pt-6 grid grid-cols-[repeat(auto-fill,_minmax(210px,_1fr))] gap-4">
      {courses.map((course) => (
        <Card
          key={course.id}
          onClick={() => {}}
          disabled={false}
          active={course.id === activeCourseId}
          {...course}
        />
      ))}
    </div>
  );
};
