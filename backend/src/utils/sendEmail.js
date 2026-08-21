import nodemailer from "nodemailer";
import config from "../config/config.js";
import logger from "./logger.js";

const transporter = nodemailer.createTransport({
  host: config.email.host,
  port: config.email.port,
  secure: false,
  auth: {
    user: config.email.user,
    pass: config.email.pass,
  },
});

const sendEmail = async ({ to, subject, text, html, from, replyTo }) => {
  try {
    await transporter.sendMail({
      from: from || config.email.user,
      to,
      subject,
      text,
      html,
      replyTo,
    });
    logger.info(`Email sent successfully to ${to}`);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    logger.error("Email sending failed:", error.message);
    return { success: false, message: error.message };
  }
};

export default sendEmail;
