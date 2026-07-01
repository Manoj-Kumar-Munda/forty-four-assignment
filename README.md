# forty-four-assignment

A user management dashboard built with React. Fetches users from a public API, lets you browse, search, and add new ones through a form.


## Getting started

Make sure you have **Node.js 18+** installed, then run:

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

## Tech stack
- **Vite** - for building and dev server
- **React-router-dom** - for routing
- **Tailwind CSS** - for styling components
- **Redux Toolkit** - for state management
- **lucide-react** - for icons

### Other commands

```bash
npm run build     # production build → ./dist
npm run preview   # serve the production build locally
npm run lint      # run oxlint
```

---

## Project structure

```
src/
├── components/        # Shared UI components (Button, Input)
├── constants/         # API endpoint constants
├── hooks/             # Custom hooks (useFetch)
├── lib/               # Utility functions (cn helper)
├── pages/
│   ├── dashboard/     # User list, search, add-user form
│   └── user-details/  # Individual user detail view
└── store/             # Redux store and slices
```

