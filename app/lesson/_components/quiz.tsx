"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";

import type { LessonChallenge } from "@/types";
import { upsertChallengeProgress } from "@/actions/challenge-progress";

import { Header } from "./header";
import { QuestionBubble } from "./question-bubble";
import { Challenge } from "./challenge";
import { Footer } from "./footer";
import { reduceHearts } from "@/actions/user-progress";

interface Props {
  initialLessonId: number;
  initialLessonChallenges: LessonChallenge[];
  initialHearts: number;
  initialPercentage: number;
  userSubscription: any; //!
}

export type Status = "correct" | "wrong" | "none";

export const Quiz = ({
  initialHearts,
  initialLessonChallenges,
  initialLessonId,
  initialPercentage,
  userSubscription,
}: Props) => {
  const [pending, startTransition] = useTransition();

  const [hearts, setHearts] = useState(initialHearts);
  const [percentage, setPercentage] = useState(initialPercentage);
  const [challenges, setChallenges] = useState(initialLessonChallenges);
  const [activeIndex, setActiveIndex] = useState(() => {
    const uncompletedIndex = challenges.findIndex(
      (challenge) => !challenge.completed
    );

    return uncompletedIndex === -1 ? 0 : uncompletedIndex;
  });
  const [selectedOption, setSelectedOption] = useState<number | undefined>();
  const [status, setStatus] = useState<Status>("none");

  const currentChallenge = challenges[activeIndex];
  const options = currentChallenge.challengeOptions ?? [];

  const onNext = () => {
    setActiveIndex((curr) => curr + 1);
  };

  const onSelect = (id: number) => {
    if (status !== "none") return;

    setSelectedOption(id);
  };

  const onContinue = () => {
    if (!selectedOption) return;

    if (status === "wrong") {
      setStatus("none");
      setSelectedOption(undefined);
      return;
    }

    if (status === "correct") {
      onNext();
      setStatus("none");
      setSelectedOption(undefined);
      return;
    }

    const correctOption = options.find((option) => option.correct);

    if (!correctOption) return;

    if (correctOption && correctOption.id === selectedOption) {
      startTransition(() => {
        upsertChallengeProgress(currentChallenge.id)
          .then((res) => {
            if (res?.error === "hearts") {
              //! Mising hearts
              return;
            }

            setStatus("correct");
            setPercentage((prev) => prev + 100 / challenges.length);

            // This is a practice
            if (initialPercentage === 100) {
              setHearts((prev) => Math.min(prev + 1, 5));
            }
          })
          .catch(() => toast.error("Something went wrong!"));
      });
    } else {
      startTransition(() => {
        reduceHearts(currentChallenge.id)
          .then((res) => {
            if (res?.error === "hearts") {
              console.log("hearts");
              return;
            }

            setStatus("wrong");

            if (!res?.error) {
              setHearts((prev) => Math.max(prev - 1, 0));
            }
          })
          .catch(() => toast.error("Something went wrong! Please try again."));
      });
    }
  };

  const title =
    currentChallenge.type === "ASSIST"
      ? "Select the correct meaning"
      : currentChallenge.question;

  return (
    <>
      <Header
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubscription?.isActive}
      />
      <div className="flex-1">
        <div className="h-full flex items-center justify-center">
          <div className="lg:min-h-[350px] lg:w-[600px] w-full px-6 lg:px-0 flex flex-col gap-y-12">
            <h1 className="text-lg lg:text-3xl text-center lg:text-start font-bold text-neutral-700">
              {title}
            </h1>
            <div>
              {currentChallenge.type === "ASSIST" && (
                <QuestionBubble question={currentChallenge.question} />
              )}
              <Challenge
                options={options}
                onSelect={onSelect}
                status={status}
                selectedOption={selectedOption}
                disabled={pending}
                type={currentChallenge.type}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer
        disabled={pending || !selectedOption}
        status={status}
        onCheck={onContinue}
      />
    </>
  );
};
