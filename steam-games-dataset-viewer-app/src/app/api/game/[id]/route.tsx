import { NextResponse } from 'next/server';
import client from '@/app/lib/pg-db';

export const dynamic = 'force-dynamic';

type Params = {
  id: number;
};

// http://localhost:3000/api/game/{id}
export async function GET(request: Request, context: { params: Params }) {
  try {
    const { id } = context.params;

    const selectQuery = `
    SELECT
      g.game_id,
      g.header_image,
      g.name,
      g.positive,
      g.negative,
      g.genres,
      g.price,
      g.release_date,
      g.short_description,
      gd.detailed_description,
      gd.windows,
      gd.mac,
      gd.linux,
      gd.screenshots,
      gd.supported_languages,
      gd.full_audio_languages,
      gd.developers,
      gd.publishers,
      gd.categories
      FROM
      games AS g
      INNER JOIN game_details gd ON g.game_id = gd.game_id
      WHERE
      g.game_id = ${id};
    `;
    const selectResponse = await client.query(selectQuery);

    if (selectResponse.rows?.length) {
      const responseBody = {
        succes: true,
        data: selectResponse.rows[0],
      };

      return NextResponse.json(responseBody);
    }

    return Response.json({ success: false, error: `Not found with id: ${id}` }, { status: 404, statusText: 'Not found.' });
  } catch (error: any) {
    console.error('Hi its error ' + error);
    return Response.json({ succes: false, error: error });
  }
}
