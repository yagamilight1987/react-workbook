import { NextResponse } from 'next/server';
import client from '@/app/lib/pg-db';

export const dynamic = 'force-dynamic';

// http://localhost:3000/api/browse/in_the_spotlight
export async function GET(request: Request) {
  try {
    const selectQuery = `
      SELECT
        g.game_id,
        g.name,
        g.price,
        g.header_image,
        gd.sumowners
      FROM
        games AS g
        INNER JOIN (
          SELECT
            game_id,
            SUM(owners_clean (estimated_owners)) AS sumowners
          FROM
            game_details
          GROUP BY
            game_id
          ORDER BY
            sumowners DESC
        ) AS gd ON g.game_id = gd.game_id
      WHERE
        EXTRACT(
          YEAR
          FROM
            release_date
        ) = 2024
      ORDER BY
        sumowners desc,
        name ASC
      LIMIT
        10;
      `;
    const selectQueryResponse = await client.query(selectQuery);

    const responseBody = {
      succes: true,
      data: selectQueryResponse.rows,
    };

    return NextResponse.json(responseBody);
  } catch (error: any) {
    console.error('Hi its error ' + error);
    return Response.json({ succes: false, error: error });
  }
}
