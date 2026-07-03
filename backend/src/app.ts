import express from "express";
import cors from "cors";

import recommendationRoutes from "./routes/recommendation.routes.js";

import { errorHandler } from "./middlewares/error.middleware.js";

import { logger } from "./utils/logger.js";

const app = express();

// Global Middlewares              

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Request Logger                  

app.use((req, res, next) => {
  logger.info({
    method: req.method,
    url: req.originalUrl,
    ip: req.ip,
  });

  next();
});

// Health Check                    

app.get("/health", (_, res) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy",
  });
});

// API Routes                      

app.use("/api", recommendationRoutes);

// 404 Handler                     

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`,
  });
});

// Global Error Handler            

app.use(errorHandler);

export default app;