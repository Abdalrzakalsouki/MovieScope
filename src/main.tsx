import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./utils/theme.tsx";
import SearchProvider from "./utils/SearchContext.tsx";
import MovieProvider from "./utils/MovieContext.tsx";
import Movies from "./views/Movies.tsx";
import MovieSearch from "./views/MovieSearch.tsx";
import Movie from "./views/Movie.tsx";
import About from "./views/About.tsx";
import Landing from "./views/Landing.tsx";
import NotFound from "./views/NotFound.tsx";
import UnderDevelopment from "./views/UnderDevelopment.tsx";
import MoreMovies from "./views/MoreMovies.tsx";
import Error from "./views/Error.tsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./index.css";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path: "/movies",
    element: <Movies />,
    errorElement: <Error />,
  },
  {
    path: "/movie-search",
    element: <MovieSearch />,
    errorElement: <Error />,
  },
  {
    path: "/movie/:title/:id",
    element: <Movie />,
    errorElement: <Error />,
  },
  {
    path: "/movies/popular-movies",
    element: <MoreMovies />,
    errorElement: <Error />,
  },
  {
    path: "/movies/top-rated-movies",
    element: <MoreMovies />,
    errorElement: <Error />,
  },
  {
    path: "/movies/upcoming-movies",
    element: <MoreMovies />,
    errorElement: <Error />,
  },
  {
    path: "/new-feature",
    element: <UnderDevelopment />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Error />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <SearchProvider>
          <MovieProvider>
            <RouterProvider router={routes} />
          </MovieProvider>
        </SearchProvider>
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>
);
