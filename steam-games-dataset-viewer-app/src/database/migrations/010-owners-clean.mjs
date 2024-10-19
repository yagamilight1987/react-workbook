export async function up(sql) {
  await sql`
    CREATE OR REPLACE FUNCTION owners_clean(input_text TEXT)
    RETURNS FLOAT AS $$
    DECLARE
      num1 INT;
      num2 INT;
      midpoint FLOAT;
    BEGIN
      -- Remove leading and trailing spaces and split the input string by '-'
      input_text := TRIM(input_text);
      num1 := TRIM(SPLIT_PART(input_text, '-', 1))::INT;
      num2 := TRIM(SPLIT_PART(input_text, '-', 2))::INT;

      -- Calculate the midpoint
      midpoint := (num2 - num1) / 2.0;

      RETURN midpoint;
    END;
    $$ LANGUAGE plpgsql;
  `;
}

export async function down(sql) {
  await sql`
    DROP FUNCTION owners_clean(TEXT);
  `;
}
