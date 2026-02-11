import express from 'express';
import { submitContact } from '../controllers/contact.controller.js';
// Import validator if using
// import { contactValidator } from '../validators/contact.validator.js';

const router = express.Router();

router.post('/', /* contactValidator, */ submitContact);

export default router;