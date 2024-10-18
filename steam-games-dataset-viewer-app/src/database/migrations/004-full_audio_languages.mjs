export async function up(sql) {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS full_audio_languages (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL
    )
  `;
}

export async function down(sql) {
  await sql`
    DROP TABLE IF EXISTS full_audio_languages
  `;
}
