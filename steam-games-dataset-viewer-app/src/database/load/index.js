const fs = require('fs');
const { Client } = require('pg');

const { chain } = require('stream-chain');
const { parser } = require('stream-json');
const { streamObject } = require('stream-json/streamers/StreamObject');

const dotenv = require('dotenv');
const { parse } = require('pg-connection-string');

dotenv.config({ path: '.env.local' });

const options = parse(process.env.POSTGRES_URL || '');

// PostgreSQL client configuration
const client = new Client({
  user: options.user,
  host: options.host,
  database: options.database,
  password: options.password,
  port: options.port,
});

// Function to read JSON and insert into PostgreSQL
async function readJsonAndInsert() {
  try {
    // Connect to PostgreSQL
    await client.connect();

    const pipeline = chain([
      fs.createReadStream('./__data__/games.json'),
      parser(),
      streamObject(),
    ]);

    let successCount = 0,
      failureCount = 0,
      totalCount = 0;

    const query = `INSERT INTO source_steam_games(
        game_id, name, price, short_description, header_image, website, genres, positive, negative, release_date, required_age, dlc_count, detailed_description, about_the_game, reviews, support_url, support_email, windows, mac, linux, metacritic_score, metacritic_url, achievements, recommendations, notes, supported_languages, full_audio_languages, developers, publishers, categories, screenshots, movies, user_score, score_rank, estimated_owners, average_playtime_forever, average_playtime_2weeks, median_playtime_forever, median_playtime_2weeks, peak_ccu, tags)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41);`;

    pipeline.on('data', async ({ key, value }) => {
      try {
        await client.query(query, [
          key,
          value.name,
          value.price,
          value.short_description,
          value.header_image,
          value.website,
          value.genres,
          value.positive,
          value.negative,
          new Date(value.release_date).toLocaleString(),
          value.required_age,
          value.dlc_count,
          value.detailed_description,
          value.about_the_game,
          value.reviews,
          value.support_url,
          value.support_email,
          value.windows,
          value.mac,
          value.linux,
          value.metacritic_score,
          value.metacritic_url,
          value.achievements,
          value.recommendations,
          value.notes,
          value.supported_languages,
          value.full_audio_languages,
          value.developers,
          value.publishers,
          value.categories,
          value.screenshots,
          value.movies,
          value.user_score,
          value.score_rank,
          value.estimated_owners,
          value.average_playtime_forever,
          value.average_playtime_2weeks,
          value.median_playtime_forever,
          value.median_playtime_2weeks,
          value.peak_ccu,
          JSON.stringify(value.tags),
        ]);

        ++successCount;
      } catch (err) {
        console.error(`GameId: ${key}, Error Message: ${err.message}`);
        ++failureCount;
      } finally {
        console.log('process record: ' + key + '\n');
        ++totalCount;
      }
    });

    pipeline.on('end', () =>
      console.log(
        `Processed: ${totalCount}, Success: ${successCount}, Failure: ${failureCount}`
      )
    );
  } catch (err) {
    console.error('Error:', err);
    await client.end();
  } finally {
  }
}

// Run the function
readJsonAndInsert();
