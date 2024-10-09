export async function up(sql) {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
      CREATE TABLE IF NOT EXISTS game_details (
          id SERIAL PRIMARY KEY,
          game_id NUMERIC UNIQUE NOT NULL,
          release_date DATE,
          required_age INTEGER,
          dlc_count INTEGER,
          detailed_description TEXT,
          about_the_game TEXT,
          reviews TEXT,
          support_url VARCHAR(255),
          support_email VARCHAR(255),
          windows BOOLEAN,
          mac BOOLEAN,
          linux BOOLEAN,
          metacritic_score NUMERIC,
          metacritic_url VARCHAR(255),
          achievements INTEGER,
          recommendations INTEGER,
          notes TEXT,
          supported_languages TEXT[],
          full_audio_languages TEXT[],
          developers TEXT[],
          publishers TEXT[],
          categories TEXT[],
          screenshots TEXT[],
          movies TEXT[],
          user_score NUMERIC,
          score_rank VARCHAR(50),
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
