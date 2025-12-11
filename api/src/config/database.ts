import dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import { User, Category, Member, Book, BorrowRecord, Comment, Setting } from '../models';
dotenv.config();

const {
  SQL_SERVER,
  SQL_DB,
  SQL_USER,
  SQL_PWD,
  SQL_PORT
} = process.env;

if (!SQL_SERVER) throw new Error('SQL_SERVER environment variable is required');
if (!SQL_DB) throw new Error('SQL_DB environment variable is required');
if (!SQL_USER) throw new Error('SQL_USER environment variable is required');
if (!SQL_PWD) throw new Error('SQL_PWD environment variable is required');

const port = SQL_PORT ? Number(SQL_PORT) : 1433;

const sequelize = new Sequelize({
  dialect: 'mssql',
  host: SQL_SERVER,
  port,
  database: SQL_DB,
  username: SQL_USER,
  password: SQL_PWD,
  models: [User, Category, Member, Book, BorrowRecord, Comment, Setting],
  dialectOptions: {
    options: {
      encrypt: false,
      trustServerCertificate: true,
    },
  },
  logging: console.log,
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected via Sequelize');
    await sequelize.sync({ alter: true });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    throw error;
  }
};

export { sequelize };
