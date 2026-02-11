import Contact from "../models/Contact.js";
import sendEmail from "../utils/sendEmail.js";
import logger from "../utils/logger.js";

const createContact = async (data) => {
  // Save contact to database first
  const contact = await Contact.create(data);

  // Send email notification (non-blocking, don't fail if email fails)
  sendEmail({
    to: "contact@rejishkhanal.com.np",
    subject: "New Contact Submission",
    text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
  }).catch((error) => {
    logger.error("Failed to send email notification:", error);
  });

  return contact;
};

export { createContact };
