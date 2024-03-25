import "dotenv/config";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/postgres-js";

import * as schema from "@/db/schema";
import {
  COURSES,
  LESSONS,
  UNITS,
  CHALLENGES,
  CHALLENGE_OPTIONS,
} from "@/db/dummy";

const sql = neon(process.env.DATABASE_URL!);

// @ts-ignore
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database ... ");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);
    await db.delete(schema.userSubscription);

    await db.insert(schema.courses).values(COURSES);
    await db.insert(schema.units).values(UNITS);
    await db.insert(schema.lessons).values(LESSONS);
    await db.insert(schema.challenges).values(CHALLENGES);
    await db.insert(schema.challengeOptions).values(CHALLENGE_OPTIONS);

    console.log("Seeding finish");
  } catch (error) {
    console.error(error);
    throw new Error("Faild to seed the database!");
  }
};

main();
