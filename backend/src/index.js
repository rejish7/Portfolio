import express from 'express';
import connectDB from './config/db.js';
import { corsMiddleware, rateLimitMiddleware, errorMiddleware } from './middlewares/index.js';
import { contactRoutes, projectRoutes, blogRoutes } from './routes/index.js';
import config from './config/config.js';
import logger from './utils/logger.js';

const app = express();

// Middlewares
app.use(corsMiddleware);
app.use(rateLimitMiddleware);
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/blogs', blogRoutes);

// Error handler
app.use(errorMiddleware);

// Start server
const startServer = async () => {
  await connectDB();
  app.listen(config.port, () => {
    logger.info(`Server running on port ${config.port}`);
  });
};

startServer();