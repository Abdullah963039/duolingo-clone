import { courses, userProgress } from "@/db/schema";

export type Course = typeof courses.$inferSelect;

export type UserProgress = typeof userProgress.$inferSelect;
