import dotnev from 'dotenv';

dotnev.config({});

export const { APP_PORT, DATABASE, DATABASE_PASSWORD } = process.env;
