import Joi from 'joi';

const contactSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  message: Joi.string().min(10).required(),
});

const contactValidator = (req, res, next) => {
  const { error } = contactSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
};

export { contactValidator };