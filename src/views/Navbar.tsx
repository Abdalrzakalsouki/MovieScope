/** @jsxImportSource @emotion/react */
import React, { useState, useContext } from "react";
import { SearchContext } from "../utils/SearchContext";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { css } from "@emotion/react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.text.primary, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.text.primary, 0.25),
  },
  marginLeft: 0,
  marginRight: theme.spacing(2),
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "auto",
    [theme.breakpoints.up("xs")]: {
      width: "10ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  my: 2,
  color: theme.palette.text.primary,
  display: "block",
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

const link = css`
  color: inherit;
  text-decoration: none;
  font-size: 15px;
  padding-inline: 10px;
  text-transform: capitalize;
`;

const Navbar = () => {
  const theme = useTheme();
  const pages = ["Home", "Movies", "About"];
  const searchContext = useContext(SearchContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [searchContent, setSearchContent] = useState<string>("");
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSearch = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const content = e.currentTarget.value;
    if (searchContext) searchContext.updateSearch(content);
    setSearchContent(content);
  };

  const handleEnterSearch = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.key === "Enter") {
      !searchContent
        ? searchContext?.emptySearch?.()
        : navigate("/movie-search");
      setSearchContent("");
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="mobile icon"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    {page === "Home" ? (
                      <Link to="/" css={link} style={{ color: "black" }}>
                        {page}
                      </Link>
                    ) : (
                      <Link to={page} css={link} style={{ color: "black" }}>
                        {page}
                      </Link>
                    )}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              [theme.breakpoints.up("md")]: {
                alignItems: "flex-start",
              },
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "inherit",
                textDecoration: "none",
                paddingInline: "2rem",
              }}
            >
              <Link to="/" css={link}>
                MovieScop
              </Link>
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <StyledButton
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page === "Home" ? (
                  <Link to="/" css={link}>
                    {page}
                  </Link>
                ) : (
                  <Link to={`/${page}`} css={link}>
                    {page}
                  </Link>
                )}
              </StyledButton>
            ))}
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => handleSearch(e)}
              onKeyDown={(e) => handleEnterSearch(e)}
              value={searchContent}
              type="search"
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
