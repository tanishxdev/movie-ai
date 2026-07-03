# MovieMind AI

Discover your next favorite movie, powered by AI. A production-ready React + TypeScript
frontend for the MovieMind AI recommendation API.

## Stack

- React 19 + Vite
- TypeScript
- Tailwind CSS v4
- Axios
- Framer Motion
- React Hot Toast
- Lucide React + React Icons
- ESLint

## Getting started

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173` and expects the backend to be running at
`http://localhost:8000` (configurable via `.env`).

```
VITE_API_URL=http://localhost:8000
```

## Scripts

| Command           | Description                        |
| ------------------ | ----------------------------------- |
| `npm run dev`      | Start the Vite dev server           |
| `npm run build`    | Type-check and build for production |
| `npm run preview`  | Preview the production build        |
| `npm run lint`     | Run ESLint                          |

## Project structure

```
src/
  components/
    layout/        Navbar, Hero, Footer, ThemeToggle
    ui/             Small primitives: Select, Badge, BrandMark, RatingBadge
    *.tsx           Feature components (form, cards, grid, states)
  pages/            Home page composition
  hooks/            useRecommendations, useTheme
  services/         Axios client + recommendation service
  types/            Shared TypeScript types
  constants/        Genre/mood/count options
  utils/            cn() classname helper
```

## API contract

`POST /api/recommend`

```json
// Request
{ "genre": "Action", "mood": "Excited", "count": 3 }

// Response
{
  "success": true,
  "message": "Movie recommendations fetched successfully.",
  "data": {
    "movies": [
      {
        "title": "Mad Max: Fury Road",
        "year": 2015,
        "genres": ["Action", "Adventure"],
        "cast": ["Tom Hardy", "Charlize Theron"],
        "reason": "Fast-paced action with intense sequences.",
        "rating": 8.1
      }
    ]
  }
}
```
