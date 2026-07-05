import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import recommendationRouter from './routes/recommendation.routes.js';
import { errorMiddleware } from './middlewares/error.middleware.js';
import { notFoundMiddleware } from './middlewares/not-found.middleware.js';

const app = express();

// Security
app.use(helmet());

// Enable CORS
app.use(cors());

// Parse JSON body
app.use(express.json());

// Logger
app.use(morgan('dev'));

app.use(
  cors({
    origin: ['http://localhost:5173', 'https://movie-ai-alpha.vercel.app'],
  })
);

app.get('/health', (_, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is healthy',
  });
});

app.use('/api', recommendationRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
