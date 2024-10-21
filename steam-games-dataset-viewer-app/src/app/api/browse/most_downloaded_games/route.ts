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

// http://localhost:3000/api/browse/most_downloaded_games
export async function GET(request: Request) {
  try {
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
