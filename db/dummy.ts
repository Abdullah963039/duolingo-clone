import type { Challenge, ChallengeOption, Course, Lesson, Unit } from "@/types";

// Courses
const COURSES: Course[] = [
  {
    id: 1,
    title: "Spanish",
    imageSrc: "/es.svg",
  },
  {
    id: 2,
    title: "French",
    imageSrc: "/fr.svg",
  },
  {
    id: 3,
    title: "Italian",
    imageSrc: "/it.svg",
  },
  {
    id: 4,
    title: "Croatian",
    imageSrc: "/hr.svg",
  },
];

// Units
const UNITS: Unit[] = [
  {
    id: 1,
    courseId: 1, // Spanish
    title: "Unit 1",
    description: "Learn the basic of Spanish",
    order: 1,
  },
];

// Lessons
const LESSONS: Lesson[] = [
  { id: 1, unitId: 1, title: "Nouns", order: 1 },
  { id: 2, unitId: 1, title: "Verbs", order: 2 },
  { id: 3, unitId: 1, title: "Verbs", order: 3 },
  { id: 4, unitId: 1, title: "Verbs", order: 4 },
  { id: 5, unitId: 1, title: "Verbs", order: 5 },
];

// Challenges
const CHALLENGES: Challenge[] = [
  {
    id: 1,
    lessonId: 1, // Nouns
    type: "SELECT",
    order: 1,
    question: `Which one of these is the "the man"?`,
  },
];

const CHALLENGE_OPTIONS: ChallengeOption[] = [
  {
    id: 1,
    challengeId: 1,
    imageSrc: "/man.svg",
    correct: true,
    text: "el hombre",
    audioSrc: "/es_man.mp3",
  },
  {
    id: 2,
    challengeId: 1,
    imageSrc: "/woman.svg",
    correct: false,
    text: "la mujer",
    audioSrc: "/es_woman.mp3",
  },
  {
    id: 3,
    challengeId: 1,
    imageSrc: "/robot.svg",
    correct: false,
    text: "el robot",
    audioSrc: "/es_robot.mp3",
  },
];

export { COURSES, LESSONS, UNITS, CHALLENGES, CHALLENGE_OPTIONS };
