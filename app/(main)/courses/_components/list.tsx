"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useTransition } from "react";

import { Course, UserProgress } from "@/types";
import { upsertUserProgress } from "@/actions/user-progress";

import { Card } from "./card";

interface Props {
  courses: Course[];
  activeCourseId?: UserProgress["activeCourseId"];
}

export const List = ({ courses, activeCourseId }: Props) => {
  const [pending, startTransition] = useTransition();

  const router = useRouter();

  const onClick = (id: number) => {
    if (pending) return;

    if (id === activeCourseId) return router.push("/learn");

    startTransition(() => {
      upsertUserProgress(id).catch(() => toast.error("Something went wrong!"));
    });
  };

  return (
    <div className="pt-6 grid grid-cols-[repeat(auto-fill,_minmax(210px,_1fr))] gap-4">
      {courses.map((course) => (
        <Card
          key={course.id}
          onClick={onClick}
          disabled={pending}
          active={course.id === activeCourseId}
          {...course}
        />
      ))}
    </div>
  );
};
