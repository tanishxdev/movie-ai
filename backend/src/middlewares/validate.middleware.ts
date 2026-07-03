import {
  NextFunction,
  Request,
  Response,
} from "express";

import { z } from "zod";

// Validate request body using Zod
export const validate =
  (schema: z.ZodTypeAny) =>
  (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Validation Failed",
        errors: result.error.flatten(),
      });
    }

    req.body = result.data;

    next();
  };