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

## Screenshots

<img width="947" height="384" alt="Screenshot 2026-07-01 114105" src="https://github.com/user-attachments/assets/2f53cff1-5b5a-45b0-923c-086ec3c37b38" />
<img width="942" height="401" alt="Screenshot 2026-07-01 110117" src="https://github.com/user-attachments/assets/269acca8-2c01-42e3-abb2-6a95b671d7bb" />
<img width="941" height="409" alt="Screenshot 2026-07-01 110055" src="https://github.com/user-attachments/assets/f810428d-077e-4659-a389-f05a08a28c5a" />


