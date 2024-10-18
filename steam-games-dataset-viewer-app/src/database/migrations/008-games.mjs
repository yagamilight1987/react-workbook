export async function up(sql) {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
      CREATE TABLE IF NOT EXISTS games (
          game_id NUMERIC PRIMARY KEY NOT NULL,
          name VARCHAR(255) NOT NULL,
          price NUMERIC(10, 2),
          short_description TEXT,
          header_image VARCHAR(255),
          release_date DATE,
          genres TEXT[],
          positive INTEGER,
          negative INTEGER
      )
    `;
}

export async function down(sql) {
  await sql`
      DROP TABLE IF EXISTS games
    `;
}
