import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

import db from "@/db/drizzle";
import { challenges } from "@/db/schema";
import { isAdmin } from "@/lib/admin";

export async function GET(
  _req: Request,
  { params }: { params: { id: number } }
) {
  if (!isAdmin()) return new NextResponse("Forbidden", { status: 403 });

  const data = await db.query.challenges.findFirst({
    where: eq(challenges.id, params.id),
  });

  return NextResponse.json(data, { status: 200 });
}

export async function PUT(
  req: Request,
  { params }: { params: { id: number } }
) {
  if (!isAdmin()) return new NextResponse("Forbidden", { status: 403 });

  const body = await req.json();

  const data = await db
    .update(challenges)
    .set({ ...body })
    .where(eq(challenges.id, params.id))
    .returning();

  return NextResponse.json(data[0], { status: 200 });
}

export async function DELETE(
  _req: Request,
  { params }: { params: { id: number } }
) {
  if (!isAdmin()) return new NextResponse("Forbidden", { status: 403 });

  const data = await db
    .delete(challenges)
    .where(eq(challenges.id, params.id))
    .returning();

  return NextResponse.json(data[0], { status: 204 });
}
