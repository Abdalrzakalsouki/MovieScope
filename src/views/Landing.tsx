/** @jsxImportSource @emotion/react */
import { Grid, Typography, Button } from "@mui/material";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import "../css/components/landing.css";

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
  font-weight: bold;
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
  return (
    <div className="landing-container">
      <Grid css={centeredContentStyle}>
        <Grid item xs={12} textAlign="center">
          <Typography variant="h1" css={h1Style}>
            Your <span className="lading-text">Own</span> perfect place, your
            perfect movie night
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
            sx={{ backgroundColor: "#db0000" }}
            size="large"
            color="error"
            css={buttonStyle}
            onClick={() => navigate("/movies")}
          >
            Get Started
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Landing;
