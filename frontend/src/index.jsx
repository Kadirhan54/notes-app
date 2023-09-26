import React from "react";
import ReactDOM from "react-dom/client";

// import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotesListPage from "./pages/NotesListPage";
import ErrorPage from "./pages/ErrorPage";
import NotePage from "./pages/NotePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NotesListPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/notes/:noteId",
    element: <NotePage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
