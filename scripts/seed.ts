//! DEVELOPMENT

import "dotenv/config";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

import * as schema from "@/db/schema";

const sql = postgres(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

// Courses
const COURSES = [
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
    title: "Japanese",
    imageSrc: "/jp.svg",
  },
  {
    id: 5,
    title: "Croatian",
    imageSrc: "/hr.svg",
  },
];

const main = async () => {
  try {
    console.log("Seeding database ... ");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);

    await db.insert(schema.courses).values(COURSES);

    console.log("Seeding finish");
  } catch (error) {
    console.error(error);
    throw new Error("Faild to seed the database!");
  }
};

main();
