import { Response } from "express";

export function successResponse(
  res: Response,
  data: unknown,
  message = "Success"
) {
  return res.status(200).json({
    success: true,
    message,
    data,
  });
}