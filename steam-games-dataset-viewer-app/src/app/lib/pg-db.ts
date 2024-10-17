import { Client } from 'pg';

let client: Client = new Client();
if (process.env.PG_CLIENT === 'true') {
  client = new Client({
    connectionString: process.env.POSTGRES_URL,
  });
}

export default client;
