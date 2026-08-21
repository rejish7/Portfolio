import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT || 4000,
  mongoUri: process.env.MONGO_URI,
  email: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
    host: "smtp.gmail.com",
    port: 587,
  },
  businessEmail: process.env.BUSINESS_EMAIL || "contact@rejishkhanal.com.np",
};