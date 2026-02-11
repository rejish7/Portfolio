import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT || 4000,
  mongoUri: process.env.MONGO_URI,
  email: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
  },
};