import { NextResponse } from 'next/server';
import pool from '@/lib/pg-db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const selectQuery = `
      SELECT 
        game_id,
        name
      FROM
        source_steam_games
      LIMIT
        10;
      `;

    const selectQueryResponse = await pool.query(selectQuery);

    const responseBody = {
      succes: true,
      data: selectQueryResponse.rows,
    };

    return NextResponse.json(responseBody);
  } catch (error: unknown) {
    console.error('Hi its error ' + error);
    if (error instanceof Error) {
      return Response.json({ succes: false, error: error });
    }
  }
}
