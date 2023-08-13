import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import Theme from "./Theme.tsx";
import SearchProvider from "./utils/SearchContext.tsx";
import MovieProvider from "./utils/MovieContext.tsx";
import Movies from "./views/Movies.tsx";
import MovieSearch from "./views/MovieSearch.tsx";
import Movie from "./views/Movie.tsx";
import About from "./views/About.tsx";
import Landing from "./views/Landing.tsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./css/normalize.css";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/movie-search",
    element: <MovieSearch />,
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
    <ThemeProvider theme={Theme}>
      <SearchProvider>
        <MovieProvider>
          <RouterProvider router={routes} />
        </MovieProvider>
      </SearchProvider>
    </ThemeProvider>
  </React.StrictMode>
);
