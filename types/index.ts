import {
  challenges,
  courses,
  units,
  userProgress,
  lessons,
  challengeOptions,
  challengeProgress,
  userSubscription,
} from "@/db/schema";

//! Main_Types
export type Course = typeof courses.$inferSelect;
export type Unit = typeof units.$inferSelect;
export type Lesson = typeof lessons.$inferSelect;
export type Challenge = typeof challenges.$inferSelect;
export type ChallengeOption = typeof challengeOptions.$inferSelect;
export type ChallengeProgress = typeof challengeProgress.$inferSelect;
export type UserProgress = typeof userProgress.$inferSelect;
export type UserSubscription = typeof userSubscription.$inferSelect;

//! Used_Types
export type LessonChallenge = Challenge & {
  completed: boolean;
  challengeOptions: ChallengeOption[];
};
