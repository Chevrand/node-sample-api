import postgres from 'postgres'
import dotenv from 'dotenv';

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL_NODE_TESTE;
export const sql = postgres(DATABASE_URL);