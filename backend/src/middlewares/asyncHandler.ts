import { NextFunction, Request, Response } from "express";

// Generic async controller type
type AsyncController = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<unknown>;

// Wrap async controllers to forward errors
export const asyncHandler =
  (controller: AsyncController) =>
  (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    Promise.resolve(controller(req, res, next)).catch(next);
  };