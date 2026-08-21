import Contact from "../models/Contact.js";
import sendEmail from "../utils/sendEmail.js";
import config from "../config/config.js";
import logger from "../utils/logger.js";

const createContact = async (data) => {
  const contact = await Contact.create(data);

  // 1. Notify yourself — from the person who filled the form
  const notifyResult = await sendEmail({
    to: config.businessEmail,
    from: config.email.user,
    replyTo: `${data.name} <${data.email}>`,
    subject: `New Contact from ${data.name}`,
    text: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Contact Submission</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Name</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Email</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${data.email}</td>
          </tr>
        </table>
        <div style="margin-top: 16px; padding: 12px; background: #f5f5f5; border-radius: 6px;">
          <strong>Message:</strong>
          <p style="margin-top: 8px; white-space: pre-wrap;">${data.message}</p>
        </div>
      </div>
    `,
  });
  logger.info("Notification email result:", notifyResult);

  // 2. Confirmation to client — from your business email
  const confirmResult = await sendEmail({
    to: data.email,
    from: config.email.user,
    replyTo: config.businessEmail,
    subject: "Thank you for contacting Rejish Khanal",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Thank You, ${data.name}!</h2>
        <p style="color: #555; line-height: 1.6;">
          I have received your message and will get back to you within 24 hours.
        </p>
        <div style="margin: 20px 0; padding: 12px; background: #f5f5f5; border-radius: 6px;">
          <strong>Your message:</strong>
          <p style="margin-top: 8px; white-space: pre-wrap; color: #555;">${data.message}</p>
        </div>
        <p style="color: #555; line-height: 1.6;">
          Best regards,<br>
          <strong>Rejish Khanal</strong><br>
          Technical SEO Specialist & Full Stack Developer
        </p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="color: #999; font-size: 12px;">
          <a href="https://rejishkhanal.com.np" style="color: #999;">rejishkhanal.com.np</a>
        </p>
      </div>
    `,
  });
  logger.info("Confirmation email result:", confirmResult);

  return contact;
};

export { createContact };
