import Contact from '../models/Contact.js';
import sendEmail from '../utils/sendEmail.js';

const createContact = async (data) => {
  const contact = await Contact.create(data);
  await sendEmail({
    to: 'contact@rejishkhanal.com.np', 
    subject: 'New Contact Submission',
    text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
  });
  return contact;
};

export { createContact };