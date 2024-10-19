import { NextResponse } from 'next/server';
import { Client } from 'pg';
import { db, VercelPoolClient } from '@/app/lib/db';
import client from '@/app/lib/pg-db';

export const dynamic = 'force-dynamic';

let myclient: Client | VercelPoolClient = client;

if (process.env.PG_CLIENT === 'true') {
  try {
    await myclient.connect();
    console.log('connected from pg client');
  } catch (error: any) {
    console.error('Hi its error from pg client ' + error.message);
  }
} else {
  try {
    myclient = await db.connect();
    console.log('connected from vercel client');
  } catch (error: any) {
    console.error('Hi its error from vercel client ' + error.message);
  }
}

// http://localhost:3000/api/browse/inthespotlight
export async function GET(request: Request) {
  try {
    const selectQuery = `
      SELECT
        game_id,
        name,
        release_date,
        price,
        positive,
        negative,
        header_image,
        SUM(owners_clean (estimated_owners)) AS sumowners
      FROM
        source_steam_games
      WHERE
        EXTRACT(
            YEAR
            FROM
                release_date
        ) = 2024
      GROUP BY
        game_id
      ORDER BY
        sumowners DESC
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
