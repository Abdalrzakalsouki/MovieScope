/** @jsxImportSource @emotion/react */
import { Grid, Typography, Button, useTheme } from "@mui/material";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import landingImage from "../assets/21-movies-in-2021-Title-Image2.jpg";
import Navbar from "./Navbar";

const landingContainer = css`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-image: url(${landingImage});
  background-repeat: no-repeat;
  background-size: cover;
  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(0, 0, 0, 40%);
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0.8) 100%
    );
    z-index: 1;
  }
  z-index: 1;
`;

const centeredContentStyle = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  z-index: 10;
`;

const h1Style = css`
  font-size: 4rem;
  margin: 1rem 0;
  margin-inline: 5px;
`;

const h2Style = css`
  font-size: 2rem;
  font-weight: bold;
  margin: 0.5rem 0;
`;

const buttonStyle = css`
  font-size: 1.2rem;
  padding: 1rem 2rem;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 2rem;
`;

const Landing = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <div>
      <Navbar />
      <div css={landingContainer}>
        <Grid css={centeredContentStyle}>
          <Grid item xs={12} textAlign="center">
            <Typography variant="h1" css={h1Style}>
              Your Own perfect place, your perfect movie night
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Typography variant="h2" css={h2Style}>
              Find the best movie among the largest collection in the world
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{ backgroundColor: theme.palette.primary.main }}
              css={buttonStyle}
              onClick={() => navigate("/movies")}
            >
              Get Started
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Landing;
