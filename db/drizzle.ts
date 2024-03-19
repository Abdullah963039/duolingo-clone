//$ Convert to local database for development

//! import { neon } from "@neondatabase/serverless";
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

import * as schema from "./schema";

//! const sql = neon<false, false>(process.env.DATABASE_URL!);
const sql = postgres(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

export default db;
