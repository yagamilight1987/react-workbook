/* IN THE SPOTLIGHT 2024 */
SELECT
  g.game_id,
  g.name,
  g.price,
  g.header_image,
  gd.sumowners
FROM
  games AS g
  INNER JOIN (
    SELECT
      game_id,
      SUM(owners_clean (estimated_owners)) AS sumowners
    FROM
      game_details
    GROUP BY
      game_id
    ORDER BY
      sumowners DESC
  ) AS gd ON g.game_id = gd.game_id
WHERE
  EXTRACT(
    YEAR
    FROM
      release_date
  ) = 2024
ORDER BY
  sumowners desc,
  name ASC
LIMIT
  10;

/* top 10 most downloaded games */
SELECT
  g.game_id,
  g.name,
  g.price,
  g.header_image,
  gd.median
FROM
  games AS g
  INNER JOIN (
    SELECT
      game_id,
      owners_clean (estimated_owners) as median
    FROM
      game_details
    ORDER BY
      median DESC
    LIMIT
      10
  ) AS gd ON g.game_id = gd.game_id
ORDER BY
  median desc,
  name ASC;

/* top 10 most expensive games */
SELECT
  game_id,
  name,
  header_image,
  price
FROM
  games
ORDER BY
  price DESC
LIMIT
  10;

/* top 10 most downloaded free games */
SELECT
  game_id,
  name,
  price,
  owners_clean (estimated_owners) as median
FROM
  source_steam_games
WHERE
  price < 1
ORDER BY
  median DESC,
  name ASC
LIMIT
  10;

/* top 10 most downloaded paid games */
SELECT
  game_id,
  name,
  price,
  owners_clean (estimated_owners) as median
FROM
  source_steam_games
WHERE
  price > 0
ORDER BY
  median DESC,
  price DESC
LIMIT
  10;

/* top 10 most downloaded games for that supports only mac os */
SELECT
  game_id,
  name,
  price,
  owners_clean (estimated_owners) as median
FROM
  source_steam_games
WHERE
  mac = true
  and windows = false
  and linux = false
ORDER BY
  median DESC,
  name ASC
LIMIT
  10;

/* top 10 most downloaded games for that supports only linux os */
SELECT
  game_id,
  name,
  price,
  owners_clean (estimated_owners) as median
FROM
  source_steam_games
WHERE
  mac = false
  and windows = false
  and linux = true
ORDER BY
  median DESC,
  name ASC
LIMIT
  10;

/* top 10 most downloaded games for that supports only windows os */
SELECT
  game_id,
  name,
  price,
  owners_clean (estimated_owners) as median
FROM
  source_steam_games
WHERE
  mac = false
  and windows = true
  and linux = false
ORDER BY
  median DESC,
  name ASC
LIMIT
  10;

/* top 10 games that are most liked */
SELECT
  game_id,
  name,
  price,
  sum(positive) as sumpositive
FROM
  source_steam_games
GROUP BY
  game_id
ORDER BY
  sumpositive DESC,
  name ASC
LIMIT
  10;

/* top 10 games that are most disliked */
SELECT
  game_id,
  name,
  price,
  positive,
  negative,
  TRUNC (negative_ratio * 100) as negative_percentage
FROM
  (
    SELECT
      game_id,
      name,
      price,
      (
        CAST(negative AS FLOAT) / NULLIF((positive + negative), 0)
      ) AS negative_ratio,
      positive,
      negative
    FROM
      source_steam_games
    WHERE
      positive + negative > 0
    GROUP BY
      game_id
  )
WHERE
  negative_ratio < 1
ORDER BY
  negative_ratio DESC,
  name ASC
LIMIT
  10;