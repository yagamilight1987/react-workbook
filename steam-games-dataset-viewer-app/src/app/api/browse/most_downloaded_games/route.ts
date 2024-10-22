import { NextResponse } from 'next/server';
import client from '@/app/lib/pg-db';

export const dynamic = 'force-dynamic';

// http://localhost:3000/api/browse/most_downloaded_games
export async function GET(request: Request) {
  try {
    await client.connect();

    const query = `
      SELECT
        g.game_id,
        g.name,
        g.price,
        g.header_image,
        gd.median
      FROM
        games AS g
        INNER JOIN (
          SELECT
            game_id,
            owners_clean (estimated_owners) as median
          FROM
            game_details
          ORDER BY
            median DESC
          LIMIT
            10
        ) AS gd ON g.game_id = gd.game_id
      ORDER BY
        median desc,
        name ASC;
    `;

    const queryResponse = await client.query(query);

    const responseBody = {
      succes: true,
      data: queryResponse.rows,
    };

    return NextResponse.json(responseBody);
  } catch (error) {
    console.error('Hi its error ' + error);
    return Response.json({ succes: false, error: error });
  }
}
