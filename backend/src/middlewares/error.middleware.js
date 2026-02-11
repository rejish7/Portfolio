import logger from '../utils/logger.js';

const errorMiddleware = (err, req, res, next) => {
  logger.error(err.stack);
  const status = err.status || 500;
  res.status(status).json({ message: err.message || 'Internal Server Error' });
};

export default errorMiddleware;