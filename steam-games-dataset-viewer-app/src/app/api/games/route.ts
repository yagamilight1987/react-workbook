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

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page: number = Number(searchParams.get('page')) || 1;
    const pageSize: number = Number(searchParams.get('pageSize')) || 10;
    const filter = searchParams.get('filter') || '';
    const orderBy = searchParams.get('orderBy') || 'name';
    const orderDir = searchParams.get('orderDir') || 'asc';

    const selectQuery = `
      SELECT *
      FROM source_steam_games
      WHERE name != '' and name ILIKE $1
      ORDER BY ${orderBy} ${orderDir}
      LIMIT $2 OFFSET $3;
    `;

    const offset = (page - 1) * pageSize;
    const values = [`${filter}%`, pageSize, offset];
    const data = await client.query(selectQuery, values);

    const totalCountQuery = `SELECT COUNT(*) FROM source_steam_games WHERE name != '' and name ILIKE $1`;
    const totalCountResponse = await client.query(totalCountQuery, [`${filter}%`]);

    return Response.json({ succes: true, total_count: totalCountResponse.rows[0].count, data: data.rows });
  } catch (error: any) {
    console.error('Hi its error ' + error);
    return Response.json({ succes: false, error: error });
  }
}
