export async function up(sql) {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS game_details (
      id SERIAL PRIMARY KEY,
      game_id NUMERIC UNIQUE NOT NULL,
      required_age INTEGER,
      dlc_count INTEGER,
      detailed_description TEXT,
      about_the_game TEXT,
      support_email VARCHAR(255),
      windows BOOLEAN,
      mac BOOLEAN,
      linux BOOLEAN,
      metacritic_score NUMERIC,
      achievements INTEGER,
      recommendations INTEGER,
      supported_languages TEXT[],
      full_audio_languages TEXT[],
      developers TEXT[],
      publishers TEXT[],
      categories TEXT[],
      screenshots TEXT[],
      movies TEXT[],
      user_score NUMERIC,
      estimated_owners VARCHAR(50),
      average_playtime_forever NUMERIC,
      average_playtime_2weeks NUMERIC,
      median_playtime_forever NUMERIC,
      median_playtime_2weeks NUMERIC,
      peak_ccu INTEGER,
      tags JSONB,
      FOREIGN KEY (game_id) REFERENCES games (game_id) ON DELETE CASCADE 
    )
  `;
}

export async function down(sql) {
  await sql`
    DROP TABLE IF EXISTS game_details
  `;
}

/* Dropped columns:
website VARCHAR(255), -> Drop this column
reviews TEXT, -> Drop this column
support_url VARCHAR(255), -> Drop this column
metacritic_url VARCHAR(255), -> Drop this column
notes TEXT, -> Drop this column
score_rank VARCHAR(50), -> Drop this column
*/