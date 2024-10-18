export async function up(sql) {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS developers (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL
    )
  `;
}

export async function down(sql) {
  await sql`
    DROP TABLE IF EXISTS developers
  `;
}
