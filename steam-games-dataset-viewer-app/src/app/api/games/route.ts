import pool from '@/lib/pg-db';
import { appendFilter, appendNotNullName, appendOrderBy, appendPagination, getSearchParams } from '@/lib/utils';

export const dynamic = 'force-dynamic';

// http://localhost:3000/api/games?page=1&pageSize=1&filter=need%20for%20speed&orderBy=negative&orderDir=desc
export async function GET(request: Request) {
  try {
    const { page, pageSize, filter, orderBy, orderDir } = getSearchParams(request.url);
    const whereQuery = `WHERE ${appendNotNullName()} ${appendFilter('name', filter)}`;

    const selectQuery = `
      SELECT game_id::integer, name, price::numeric::float, genres, positive, negative, header_image, release_date
      FROM games
      ${whereQuery}
      ${appendOrderBy(orderBy, orderDir)}
      ${appendPagination(page, pageSize)}
    `;
    const selectResponse = await pool.query(selectQuery);

    const totalCountQuery = `SELECT Count(*) FROM games ${whereQuery}`;
    const totalCountResponse = await pool.query(totalCountQuery);

    const responseBody = {
      succes: true,
      total_count: totalCountResponse.rows[0].count,
      data: selectResponse.rows,
    };

    return Response.json(responseBody);
  } catch (error: unknown) {
    console.error('Hi its error ' + error);
    if (error instanceof Error) {
      return Response.json({ succes: false, error: error });
    }
  }
}
