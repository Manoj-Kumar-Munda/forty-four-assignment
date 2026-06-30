import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import store from "./store/store";
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
