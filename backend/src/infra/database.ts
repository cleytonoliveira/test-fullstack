import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function initDb() {
  const db = await open({
    filename: './src/infra/database.db',
    driver: sqlite3.Database,
  });

  return db;
}

export async function setupDbForDev() {
  const db = await initDb();
  const dropCustomersTable = 'DROP TABLE IF EXISTS customers;';
  await db.run(dropCustomersTable);
  const createCustomersTable = `CREATE TABLE IF NOT EXISTS customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    cpf TEXT NOT NULL,
    phone TEXT NOT NULL,
    status TEXT NOT NULL
    );`;
  await db.run(createCustomersTable);
}

export default initDb;
