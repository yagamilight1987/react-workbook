/* Insert into genre distinct values */
INSERT INTO
  genres (title)
SELECT DISTINCT
  unnest (genres) AS distinct_item
FROM
  source_steam_games
ORDER BY
  distinct_item ASC;

/* Insert into supported_languages distinct values */
INSERT INTO
  supported_languages (title)
SELECT
  TRIM(temp.distinct_item)
FROM
  (
    SELECT DISTINCT
      unnest (supported_languages) AS distinct_item
    FROM
      source_steam_games
    ORDER BY
      distinct_item ASC
  ) AS temp
WHERE
  temp.distinct_item NOT ILIKE '%&amp%'
  AND temp.distinct_item NOT ILIKE '%[b]%'
  AND temp.distinct_item NOT ILIKE '%,%'
  AND temp.distinct_item NOT ILIKE '%;%';

/* Insert into full_audio_languages distinct values */
INSERT INTO
  full_audio_languages (title)
SELECT
  TRIM(temp.distinct_item)
FROM
  (
    SELECT DISTINCT
      unnest (full_audio_languages) AS distinct_item
    FROM
      source_steam_games
    ORDER BY
      distinct_item ASC
  ) AS temp
WHERE
  temp.distinct_item NOT ILIKE '%&amp%'
  AND temp.distinct_item NOT ILIKE '%[b]%'
  AND temp.distinct_item NOT ILIKE '%,%'
  AND temp.distinct_item NOT ILIKE '%;%';

/* Insert into developers distinct values */
INSERT INTO
  developers (title)
SELECT
  TRIM(temp.distinct_item)
from
  (
    SELECT DISTINCT
      unnest (developers) AS distinct_item
    FROM
      source_steam_games
    ORDER BY
      distinct_item ASC
  ) AS temp
WHERE
  temp.distinct_item NOT ILIKE '%&amp%'
  AND temp.distinct_item NOT ILIKE '%[b]%'
  AND temp.distinct_item NOT ILIKE '%,%'
  AND temp.distinct_item NOT ILIKE '%;%';

/* Insert into publishers distinct values */
INSERT INTO
  publishers (title)
SELECT
  TRIM(temp.distinct_item)
FROM
  (
    SELECT DISTINCT
      unnest (publishers) AS distinct_item
    FROM
      source_steam_games
    ORDER BY
      distinct_item ASC
  ) AS temp
WHERE
  temp.distinct_item NOT ILIKE '%&amp%'
  AND temp.distinct_item NOT ILIKE '%[b]%'
  AND temp.distinct_item NOT ILIKE '%,%'
  AND temp.distinct_item NOT ILIKE '%;%';

/* Insert into categories distinct values */
INSERT INTO
  categories (title)
SELECT DISTINCT
  unnest (categories) AS distinct_item
FROM
  source_steam_games
ORDER BY
  distinct_item ASC;

/* Insert into games table where name exists and short_description exists */
INSERT INTO
  games (
    game_id,
    name,
    price,
    short_description,
    header_image,
    release_date,
    genres,
    positive,
    negative
  )
SELECT
  game_id,
  name,
  price,
  short_description,
  header_image,
  release_date,
  genres,
  positive,
  negative
FROM
  source_steam_games
WHERE
  name != ''
  and short_description != '' on conflict do nothing;

/* Insert into game_details table where name exists and short_description exists */
INSERT INTO
  game_details (
    game_id,
    required_age,
    dlc_count,
    website,
    detailed_description,
    about_the_game,
    reviews,
    support_url,
    support_email,
    windows,
    mac,
    linux,
    metacritic_score,
    metacritic_url,
    achievements,
    recommendations,
    notes,
    supported_languages,
    full_audio_languages,
    developers,
    publishers,
    categories,
    screenshots,
    movies,
    user_score,
    score_rank,
    estimated_owners,
    average_playtime_forever,
    average_playtime_2weeks,
    median_playtime_forever,
    median_playtime_2weeks,
    peak_ccu,
    tags
  )
SELECT
  game_id,
  required_age,
  dlc_count,
  website,
  detailed_description,
  about_the_game,
  reviews,
  support_url,
  support_email,
  windows,
  mac,
  linux,
  metacritic_score,
  metacritic_url,
  achievements,
  recommendations,
  notes,
  supported_languages,
  full_audio_languages,
  developers,
  publishers,
  categories,
  screenshots,
  movies,
  user_score,
  score_rank,
  estimated_owners,
  average_playtime_forever,
  average_playtime_2weeks,
  median_playtime_forever,
  median_playtime_2weeks,
  peak_ccu,
  tags
FROM
  source_steam_games
WHERE
  name != ''
  and short_description != '' on conflict do nothing;