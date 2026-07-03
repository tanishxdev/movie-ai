# Backend

This directory contains the REST API responsible for generating AI-powered movie recommendations using Google's Gemini model through LangChain.

---

# Tech Stack

- Node.js
- Express
- TypeScript
- LangChain
- Google Gemini
- Zod
- Helmet
- Morgan
- Pino
- Express Rate Limit

---

# Folder Structure

```
src
│
├── config
├── controllers
├── middlewares
├── prompts
├── routes
├── schemas
├── services
├── types
├── utils
│
├── app.ts
└── server.ts
```

---

# Request Flow

```
Client

↓

Route

↓

Validation Middleware

↓

Controller

↓

Service

↓

Prompt Template

↓

LangChain

↓

Gemini

↓

Structured Output (Zod)

↓

Controller

↓

ApiResponse

↓

Client
```

---

# Folder Responsibilities

## config

Application configuration.

Contains

- Environment validation
- Dotenv configuration
- LLM configuration

---

## controllers

Receives validated requests from Express routes.

Responsibilities

- Accept request
- Call service
- Return API response

Controllers contain no business logic.

---

## middlewares

Reusable Express middleware.

Includes

- Request validation
- Async wrapper
- Error middleware
- Rate limiting

---

## prompts

Contains reusable LangChain prompt templates.

Separating prompts from services makes prompt engineering easier to maintain.

---

## routes

Defines API endpoints.

Routes should only map URLs to controllers.

---

## schemas

Contains Zod schemas.

Used for

- Request validation
- AI structured output validation

---

## services

Contains business logic.

Responsibilities

- Build LangChain chain
- Call Gemini
- Parse AI output

Controllers never interact with Gemini directly.

---

## utils

Shared utilities.

Includes

- ApiResponse
- ApiError
- Logger

---

# API Endpoints

## Health Check

```
GET /health
```

Response

```json
{
    "success": true,
    "message": "Server is running"
}
```

---

## Recommend Movies

```
POST /api/recommend
```

Request

```json
{
    "genre":"Action",
    "mood":"Excited",
    "count":3
}
```

Successful Response

```json
{
    "success": true,
    "message": "Movie recommendations fetched successfully.",
    "data": {
        "movies":[]
    }
}
```

Validation Error

```json
{
    "success": false,
    "message": "Validation Failed"
}
```

Internal Server Error

```json
{
    "success": false,
    "message": "Internal Server Error"
}
```

---

# Environment Variables

Create a `.env`

```
PORT=8000

GOOGLE_API_KEY=

GOOGLE_MODEL=gemini-2.5-flash

LLM_PROVIDER=google
```

---

# Run Locally

Install dependencies

```bash
npm install
```

Development

```bash
npm run dev
```

Production Build

```bash
npm run build
```

Start Production

```bash
npm start
```

---

# Production Features

- Type-safe environment variables
- Request validation
- Structured LLM output
- Centralized error handling
- Rate limiting
- Logging
- Security headers
- Modular architecture
- Production-ready TypeScript configuration

---

# Testing

Health Check

```
GET /health
```

Recommendation

```
POST /api/recommend
```

Example Body

```json
{
  "genre": "Action",
  "mood": "Excited",
  "count": 5
}
```

Expected Response

```json
{
    "success": true,
    "message": "...",
    "data": {
        "movies":[]
    }
}
```

---

# Deployment

The backend is deployed on Render.

Build

```bash
npm run build
```

Start

```bash
npm start
```

Required Environment Variables

```
GOOGLE_API_KEY
GOOGLE_MODEL
LLM_PROVIDER
PORT
```