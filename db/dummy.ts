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
  {
    id: 2,
    lessonId: 1, // Nouns
    type: "ASSIST",
    order: 2,
    question: `"the man"`,
  },
  {
    id: 3,
    lessonId: 1, // Nouns
    type: "SELECT",
    order: 3,
    question: `Which one of these is "the robot"?`,
  },
  {
    id: 4,
    lessonId: 2, // Verbs
    type: "SELECT",
    order: 3,
    question: `Which one of these is "the robot"?`,
  },
  {
    id: 5,
    lessonId: 2, // Verbs
    type: "SELECT",
    order: 3,
    question: `Which one of these is "the robot"?`,
  },
  {
    id: 6,
    lessonId: 2, // Verbs
    type: "SELECT",
    order: 3,
    question: `Which one of these is "the robot"?`,
  },
];

const CHALLENGE_OPTIONS: ChallengeOption[] = [
  // ! First challenge - 1st lesson
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

  // ! Second challenge - 1st lesson
  {
    id: 4,
    challengeId: 2,
    imageSrc: null,
    correct: true,
    text: "el hombre",
    audioSrc: "/es_man.mp3",
  },
  {
    id: 5,
    challengeId: 2,
    imageSrc: null,
    correct: false,
    text: "la mujer",
    audioSrc: "/es_woman.mp3",
  },
  {
    id: 6,
    challengeId: 2,
    imageSrc: null,
    correct: false,
    text: "el robot",
    audioSrc: "/es_robot.mp3",
  },

  // ! Third challenge - 1st lesson
  {
    id: 7,
    challengeId: 3,
    imageSrc: "/man.svg",
    correct: false,
    text: "el hombre",
    audioSrc: "/es_man.mp3",
  },
  {
    id: 8,
    challengeId: 3,
    imageSrc: "/woman.svg",
    correct: false,
    text: "la mujer",
    audioSrc: "/es_woman.mp3",
  },
  {
    id: 9,
    challengeId: 3,
    imageSrc: "/robot.svg",
    correct: true,
    text: "el robot",
    audioSrc: "/es_robot.mp3",
  },
];

export { COURSES, LESSONS, UNITS, CHALLENGES, CHALLENGE_OPTIONS };
