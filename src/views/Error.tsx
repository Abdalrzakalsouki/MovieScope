import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Navbar from "./Navbar";
const Error = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <div>
      <Navbar />
      <div className="center-container">
        <Typography variant="h1">Sorry, Someting went wrong ): </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{ backgroundColor: theme.palette.primary.main }}
          onClick={() => navigate("/")}
        >
          Home
        </Button>
      </div>
    </div>
  );
};

export default Error;
