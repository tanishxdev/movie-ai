import { Request, Response } from 'express';

import { getRecommendations } from '../services/recommendation.service.js';
import { ApiResponse } from '../utils/ApiResponse.js';

// Generate movie recommendations
export async function recommendMovie(req: Request, res: Response) {
  
  const result = await getRecommendations(req.body);

  return res
    .status(200)
    .json(
      new ApiResponse(
        true,
        'Movie recommendations fetched successfully.',
        result
      )
    );
}
