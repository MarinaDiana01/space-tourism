import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import RootLayout from "./routes/root-layout.jsx";
import HomePage from "./routes/home.jsx";
import DestinationPage from "./routes/destination.jsx";
import CrewPage from "./routes/crew.jsx";
import TechnologyPage from "./routes/technology.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/destination",
        element: <DestinationPage />,
      },
      {
        path: "/crew",
        element: <CrewPage />,
      },
      {
        path: "/technology",
        element: <TechnologyPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
