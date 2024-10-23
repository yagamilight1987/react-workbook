import { NextResponse } from 'next/server';
import pool from '@/app/lib/pg-db';
import { AllowedTypeValues } from '@/app/types/type-values';

export const dynamic = 'force-dynamic';

type Params = {
  type: AllowedTypeValues;
};

// http://localhost:3000/api/metadata/genres
export async function GET(request: Request, context: { params: Params }) {
  try {
    const { type } = context.params;

    if (!Object.values(AllowedTypeValues).includes(type as AllowedTypeValues)) {
      return NextResponse.json({ message: 'Type value not found.' }, { status: 404, statusText: 'Type value not found.' });
    }

    const selectQuery = `SELECT * FROM ${type}`;
    const selectResponse = await pool.query(selectQuery);

    const responseBody = {
      succes: true,
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
