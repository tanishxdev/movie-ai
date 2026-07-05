import { Router } from 'express';
import { recommendMovie } from '../controllers/recommendation.controller.js';
import { asyncHandler } from '../utils/async-handler.js';
import { recommendationLimiter } from '../middlewares/rate-limit.middleware.js';
const router = Router();

router.post(
  '/recommend',
  recommendationLimiter,
  asyncHandler(recommendMovie)
);

export default router;
