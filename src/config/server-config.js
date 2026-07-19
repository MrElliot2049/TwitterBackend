import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT;
export const AWS_REGION = process.env.AWS_REGION;
export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
export const BUCKET_NAME = process.env.BUCKET_NAME;