# KeenKeeper

KeenKeeper is a social friendship management website for tracking friends,
relationship goals, and the little check-ins that keep a circle warm.

## Technologies

- Next.js 16 App Router
- React 19 with Context state management
- Tailwind CSS 4
- Recharts
- Local image assets from `public/assets/`

## Key Features

- Responsive Home dashboard with summary cards and friend cards loaded from
  `src/data/friends.json`.
- Dynamic friend detail pages with status, tags, goals, action buttons, and
  toast-backed quick check-ins.
- Searchable, filterable timeline plus a Recharts analytics page for
  Call/Text/Video interaction counts.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.
