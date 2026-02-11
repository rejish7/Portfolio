import cors from 'cors';

// Allow all origins for simplicity; restrict in production
export default cors({ origin: '*' });