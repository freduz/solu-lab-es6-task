import dotnev from 'dotenv';

dotnev.config({});

export const { APP_PORT, DATABASE, DATABASE_PASSWORD, NODE_ENV } = process.env;
