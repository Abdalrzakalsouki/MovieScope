import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchProvider from "./utils/SearchContext.tsx";
import MovieProvider from "./utils/MovieContext.tsx";
import Home from "./Home.tsx";
import Movies from "./views/Movies.tsx";
import Movie from "./views/Movie.tsx";
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
    path: "/movie/:title/:id",
    element: <Movie />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SearchProvider>
      <MovieProvider>
        <RouterProvider router={routes} />
      </MovieProvider>
    </SearchProvider>
  </React.StrictMode>
);
