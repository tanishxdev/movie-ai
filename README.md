# 🎬 MovieMind AI

An AI-powered movie recommendation platform that suggests personalized movies based on the user's preferred genre, mood, and the number of recommendations requested.

The application combines a modern React frontend with an Express + TypeScript backend powered by Google's Gemini model through LangChain.

---

## Demo

### Frontend
> Coming Soon

### Backend API
https://movie-ai-ezym.onrender.com

---

## Features

- AI powered movie recommendations
- Mood based recommendations
- Genre filtering
- Structured AI output using Zod
- Google Gemini integration
- LangChain prompt chaining
- Express REST API
- TypeScript backend
- React + Vite frontend
- Request validation
- Rate limiting
- Global error handling
- Logging
- Production ready folder structure

---

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Axios
- Tailwind CSS

### Backend

- Node.js
- Express
- TypeScript
- LangChain
- Google Gemini
- Zod
- Express Rate Limit
- Helmet
- Morgan
- Pino Logger

---

## Project Structure

```
movie-ai
│
├── frontend
│
└── backend
```

---

## Architecture

```
React
   │
Axios
   │
Express API
   │
Validation Middleware
   │
Controller
   │
Service
   │
LangChain Prompt
   │
Gemini 2.5 Flash
   │
Structured Output (Zod)
   │
JSON Response
```

---

## Backend Features

- Environment validation
- Request validation
- Async error wrapper
- Global error middleware
- API response wrapper
- API error class
- Rate limiting
- Logging
- Structured LLM output

---

## Frontend Features

- Responsive UI
- Dark mode
- Loading state
- Error state
- Empty state
- Movie cards
- API abstraction
- Custom hooks

---

## API

### Health Check

```
GET /health
```

### Recommendation

```
POST /api/recommend
```

Example

```json
{
  "genre": "Action",
  "mood": "Excited",
  "count": 5
}
```

---

## Getting Started

Clone repository

```bash
git clone https://github.com/tanishxdev/movie-ai.git
```

Backend

```bash
cd backend
npm install
npm run dev
```

Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Environment Variables

Backend

```
PORT=
GOOGLE_API_KEY=
GOOGLE_MODEL=
LLM_PROVIDER=
```

Frontend

```
VITE_API_URL=
```

---

## Future Improvements

- User authentication
- Watchlist
- Favorites
- Streaming platform availability
- Movie posters
- TMDB integration
- AI explanations
- Chat-based recommendation assistant
- Recommendation history

---

## Author

**Tanish Kumar**

Portfolio

https://thisistanishcodelab.vercel.app/

GitHub

https://github.com/tanishxdev