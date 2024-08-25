// eslint-disable-next-line import/no-extraneous-dependencies
import sqlite3 from 'sqlite3';
// eslint-disable-next-line import/no-extraneous-dependencies
import { open } from 'sqlite';

const databaseObj = () => open({
  filename: './database.db',
  driver: sqlite3.Database,
});

export default databaseObj;