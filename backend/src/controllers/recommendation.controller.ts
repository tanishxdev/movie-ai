import { Request, Response } from 'express';
import { getRecommendations } from '../services/recommendation.service.js';
import { recommendationRequestSchema } from '../schemas/request.schema.js';

export async function recommendMovie(req: Request, res: Response) {
  const input = recommendationRequestSchema.parse(req.body);

  const result = await getRecommendations(input);

  res.json({
    success: true,

    data: result,
  });
}
