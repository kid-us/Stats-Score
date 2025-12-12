# StatsScore

A modern football match tracking application built with React, TypeScript, and Vite. StatsScore displays live and upcoming matches from major football competitions including the Premier League and Champions League, with detailed match information and event timelines.

## Features

- View matches from Premier League and Champions League
- Match details with scores, teams, and competition information
- Scrollable calendar for match dates
- Live match updates
- Modern, responsive UI built with Tailwind CSS
- Real-time data fetching with React Query

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Routing
- **TanStack Query (React Query)** - Data fetching and caching
- **Axios** - HTTP client
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible component primitives

## API

This project uses the **Football Data API** to fetch match data. The API provides comprehensive football data including:

- Competition matches
- Match details
- Team information
- Scores and statistics

### API Endpoints Used

- `GET /competitions/{competition}/matches` - Get matches for a specific competition
- `GET /matches/{id}` - Get detailed information about a specific match

### API Rate Limit

⚠️ **Important**: The API has a rate limit of **10 requests per minute**. Please be mindful of this limit when using the application. The app uses React Query's caching to minimize unnecessary API calls.

### API Authentication

The API requires authentication using an access token. You'll need to:

1. Sign up at [Football Data API](https://www.football-data.org/)
2. Get your API access token
3. Configure it in your environment variables (see Setup section)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd StatsScore
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_ACCESS_TOKEN=your_api_access_token_here
VITE_API_URL=https://api.football-data.org/v4
```

Replace `your_api_access_token_here` with your actual Football Data API access token.

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
StatsScore/
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/       # React components
│   │   ├── ui/          # Reusable UI components
│   │   └── ...          # Feature components
│   ├── constants/       # Constants and configuration
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── routes/          # Page components
│   ├── types/           # TypeScript type definitions
│   └── main.tsx         # Application entry point
├── public/              # Public assets
├── package.json         # Dependencies and scripts
└── vite.config.ts       # Vite configuration
```

## Usage

1. **View Matches**: Navigate to the matches page to see all available matches from Premier League and Champions League.

2. **Filter Matches**: Use the tabs (All, Live, Favorites) to filter matches by status.

3. **View Match Details**: Click on any match card to see detailed information including:
   - Match timeline with events
   - Team information
   - Scores and statistics
   - Competition details

4. **Navigate Dates**: Use the calendar component to navigate between different match days.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_ACCESS_TOKEN` | Your Football Data API access token | Yes |
| `VITE_API_URL` | The base URL for the Football Data API | Yes |

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.
