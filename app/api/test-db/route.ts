import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  try {
    const result = await pool.query("SELECT NOW()");
    return NextResponse.json({ time: result.rows[0] });
  } catch (err) {
    console.error("Error conectando a la base de datos:", err);
    return NextResponse.json({ error: "Error conectando a la base de datos" }, { status: 500 });
  }
}
