import { NextResponse } from "next/server";

import db from "@/db/drizzle";
import { isAdmin } from "@/lib/admin";
import { units } from "@/db/schema";

export async function GET(_req: Request) {
  if (!isAdmin()) return new NextResponse("Forbidden", { status: 403 });

  const data = await db.query.units.findMany();

  return NextResponse.json(data, { status: 200 });
}

export async function POST(req: Request) {
  if (!isAdmin()) return new NextResponse("Forbidden", { status: 403 });

  const body = await req.json();

  const data = await db
    .insert(units)
    .values({
      ...body,
    })
    .returning();

  return NextResponse.json(data[0], { status: 201 });
}
