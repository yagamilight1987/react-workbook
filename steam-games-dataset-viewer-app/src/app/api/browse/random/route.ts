import { NextResponse } from 'next/server';
import pool from '@/app/lib/pg-db';

export const dynamic = 'force-dynamic';

// http://localhost:3000/api/browse/random
export async function GET() {
  try {
    const query = `
      SELECT
        g.game_id,
        g.header_image,
        g.name,
        UNNEST (gd.screenshots) as screenshot
      FROM
        games AS g
        INNER JOIN (
          SELECT
            game_id,
            screenshots
          FROM
            (
              SELECT
                game_id,
                screenshots
              FROM
                game_details TABLESAMPLE SYSTEM (2)
            )
          WHERE
            screenshots != '{}'
          LIMIT
            1
        ) AS gd ON g.game_id = gd.game_id
      ORDER BY
        RANDOM ()
      LIMIT
        1;
      `;

    const queryResponse = await pool.query(query);

    const responseBody = {
      status: true,
      data: queryResponse.rows[0],
    };

    return NextResponse.json(responseBody);
  } catch (error: unknown) {
    console.error('Hi its error ' + error);
    if (error instanceof Error) {
      return Response.json({ succes: false, error: error });
    }
  }
}
