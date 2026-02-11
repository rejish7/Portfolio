import { createContact } from '../services/contact.service.js';

const submitContact = async (req, res, next) => {
  try {
    const contact = await createContact(req.body);
    res.status(201).json({ message: 'Contact submitted successfully', data: contact });
  } catch (err) {
    next(err);
  }
};

export { submitContact };