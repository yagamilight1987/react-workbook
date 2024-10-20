import { Client } from 'pg';
import { db, VercelPoolClient } from '@/app/lib/db';
import client from '@/app/lib/pg-db';
import { appendFilter, appendNotNullName, appendOrderBy, appendPagination, getSearchParams } from '@/app/utils';

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

// http://localhost:3000/api/games?page=1&pageSize=1&filter=need%20for%20speed&orderBy=negative&orderDir=desc
export async function GET(request: Request) {
  try {
    const { page, pageSize, filter, orderBy, orderDir } = getSearchParams(request.url);
    const whereQuery = `WHERE ${appendNotNullName()} ${appendFilter('name', filter)}`;

    const selectQuery = `
      SELECT *
      FROM source_steam_games
      ${whereQuery}
      ${appendOrderBy(orderBy, orderDir)}
      ${appendPagination(page, pageSize)}
    `;
    const selectResponse = await client.query(selectQuery);

    const totalCountQuery = `SELECT Count(*) FROM source_steam_games ${whereQuery}`;
    const totalCountResponse = await client.query(totalCountQuery);

    const responseBody = {
      succes: true,
      total_count: totalCountResponse.rows[0].count,
      data: selectResponse.rows,
    };

    return Response.json(responseBody);
  } catch (error: any) {
    console.error('Hi its error ' + error);
    return Response.json({ succes: false, error: error });
  }
}
