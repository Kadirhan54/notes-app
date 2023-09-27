import React from "react";
import ReactDOM from "react-dom/client";

// import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotesListPage from "./pages/notes/NotesListPage";
import ErrorPage from "./pages/error/ErrorPage";
import NotePage from "./pages/note/NotePage";
import Layout from "./pages/layout/Layout";

import "./App.css";

const router = createBrowserRouter([
   {
      path: "/",
      element: (
         <Layout>
            <NotesListPage />
         </Layout>
      ),
      errorElement: <ErrorPage />,
   },
   {
      path: "/notes/:noteId",
      element: (
         <Layout>
            <NotePage />
         </Layout>
      ),
   },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
