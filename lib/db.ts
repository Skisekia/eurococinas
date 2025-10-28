
import { Pool } from 'pg';

let _pool: Pool | null = null;

export default function getPool(): Pool {
  if (!_pool) {
    const url = process.env.DATABASE_URL;
    if (!url) throw new Error('DATABASE_URL is missing');
    _pool = new Pool({
      connectionString: url,
      ssl: { rejectUnauthorized: false }, // Supabase
    });
  }
  return _pool;
}
