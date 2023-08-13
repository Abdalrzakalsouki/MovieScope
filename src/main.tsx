import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme.tsx";
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
