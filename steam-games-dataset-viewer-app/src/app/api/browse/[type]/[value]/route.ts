import { NextResponse } from 'next/server';
import pool from '@/lib/pg-db';
import { AllowedTypeValues } from '@/types/type-values';
import { appendFilter, appendNotNullName, appendOrderBy, appendPagination, getSearchParams } from '@/lib/utils';

export const dynamic = 'force-dynamic';

type Params = {
  type: AllowedTypeValues;
  value: string;
};

// http://localhost:3000/api/browse/genres/Strategy?page=1&pageSize=1&filter=need%20for%20speed&orderBy=negative&orderDir=desc
export async function GET(request: Request, context: { params: Params }) {
  try {
    const { type, value } = context.params;

    if (!Object.values(AllowedTypeValues).includes(type as AllowedTypeValues)) {
      return NextResponse.json({ message: 'Type value not found.' }, { status: 404, statusText: 'Type value not found.' });
    }

    const { page, pageSize, filter, orderBy, orderDir } = getSearchParams(request.url);

    const whereQuery = `WHERE ${appendNotNullName()} ${appendFilter('name', filter)} and '${value}' ILIKE ANY(${type})`;

    const selectQuery = `SELECT * FROM source_steam_games ${whereQuery} ${appendOrderBy(orderBy, orderDir)} ${appendPagination(page, pageSize)}`;
    const selectResponse = await pool.query(selectQuery);

    const totalCountQuery = `SELECT Count(*) FROM source_steam_games ${whereQuery}`;
    const totalCountResponse = await pool.query(totalCountQuery);

    const responseBody = {
      succes: true,
      total_count: totalCountResponse.rows[0].count,
      data: selectResponse.rows,
    };

    return NextResponse.json(responseBody);
  } catch (error: unknown) {
    console.error('Hi its error ' + error);
    if (error instanceof Error) {
      return Response.json({ succes: false, error: error });
    }
  }
}
