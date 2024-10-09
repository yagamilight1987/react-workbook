/* Insert into games table where name exists and short_description exists */
INSERT INTO
    games (
        game_id,
        name,
        price,
        short_description,
        header_image,
        website,
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
    website,
    genres,
    positive,
    negative
FROM
    source_steam_games
WHERE
    name != ''
    and short_description != '' on conflict do nothing;