import { NextResponse } from "next/server";
import getPool from "../../../lib/db"; 

export const runtime = "nodejs";

export async function GET() {
  const { rows } = await getPool().query("select 1 as ok");
  return NextResponse.json({ ok: rows[0]?.ok === 1 });
}
