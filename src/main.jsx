import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import DashboardPage from "./pages/dashboard";
import UserDetailsPage from "./pages/user-details";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<DashboardPage />} />
      <Route path="/user/:id" element={<UserDetailsPage />} />
    </>,
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
