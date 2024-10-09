import { sql } from '@/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  const data = await sql.query(
    ` SELECT *
    FROM games
    ORDER BY name
    LIMIT 10`
  );

  return Response.json({ succes: true, data: data.rows });
}
