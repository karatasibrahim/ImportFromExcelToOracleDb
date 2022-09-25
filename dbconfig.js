import dotenv from 'dotenv';
dotenv.config();

export const user =process.env.USER || 'Username';
export const password =process.env.PASSWORD || 'Password';
export const connectionString=process.env.CONNECTION_STRING   || 'SID';

