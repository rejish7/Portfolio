import nodemailer from "nodemailer";
import config from "../config/config.js";
import logger from "./logger.js";

// Check if email is properly configured
const isEmailConfigured = () => {
  return (
    (config.email.host &&
      config.email.user &&
      config.email.pass &&
      config.email.host !== "smtp.gmail.com") || // Not default placeholder
    (config.email.user !== "your-email@gmail.com" &&
      config.email.pass !== "your-app-password")
  );
};

let transporter = null;

if (isEmailConfigured()) {
  transporter = nodemailer.createTransport({
    host: config.email.host,
    port: config.email.port,
    secure: false,
    auth: {
      user: config.email.user,
      pass: config.email.pass,
    },
  });
}

const sendEmail = async ({ to, subject, text }) => {
  // Skip if email is not configured
  if (!transporter) {
    logger.warn("Email not configured. Skipping email notification.");
    return { success: false, message: "Email service not configured" };
  }

  try {
    await transporter.sendMail({
      from: config.email.user,
      to,
      subject,
      text,
    });
    logger.info(`Email sent successfully to ${to}`);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    logger.error("Email sending failed:", error.message);
    return { success: false, message: error.message };
  }
};

export default sendEmail;
