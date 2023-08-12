import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchProvider from "./utils/SearchContext.tsx";
import Home from "./Home.tsx";
import Movies from "./views/Movies.tsx";
import About from "./views/About.tsx";
import "./css/index.css";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SearchProvider>
      <RouterProvider router={routes} />
    </SearchProvider>
  </React.StrictMode>
);
