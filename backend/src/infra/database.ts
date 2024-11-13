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
  const insertActiveCustomer = `INSERT INTO customers (name, email, cpf, phone, status)
    VALUES ('John Doe', 'john_doe@test.com', '123.456.789-00', '(11) 99998-8745', 'Ativo');`;
  await db.run(insertActiveCustomer);
  const insertInactiveCustomer = `INSERT INTO customers (name, email, cpf, phone, status)
    VALUES ('Jane Doe', 'jane_doe@test.com', '987.654.321-00', '(11) 99998-8745', 'Inativo');`;
  await db.run(insertInactiveCustomer);
  const insertWaitingCustomer = `INSERT INTO customers (name, email, cpf, phone, status)
    VALUES ('Jack Doe', 'jack_doe@test.com', '456.789.123-00', '(11) 99998-8745', 'Aguardando ativação');`;
  await db.run(insertWaitingCustomer);
  const insertDisabledCustomer = `INSERT INTO customers (name, email, cpf, phone, status)
    VALUES ('Jill Doe', 'jill_doe@test.com', '789.123.456-00', '(11) 99998-8745', 'Desativado');`;
  await db.run(insertDisabledCustomer);
}

export default initDb;
