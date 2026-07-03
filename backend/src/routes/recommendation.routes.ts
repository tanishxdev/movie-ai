import { Router } from "express";

import { recommendMovie } from "../controllers/recommendation.controller.js";

import { asyncHandler } from "../middlewares/asyncHandler.js";
import { recommendationLimiter } from "../middlewares/rateLimiter.js";
import { validate } from "../middlewares/validate.middleware.js";

import { recommendationRequestSchema } from "../schemas/request.schema.js";

const router = Router();

// POST /api/recommend
router.post(
  "/recommend",

  // Protect API from abuse
  recommendationLimiter,

  // Validate request body
  validate(recommendationRequestSchema),

  // Controller
  asyncHandler(recommendMovie)
);

export default router;