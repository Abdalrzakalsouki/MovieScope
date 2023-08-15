import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const NotFound = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <div className="center-container">
      <Typography variant="h1">
        <span className="keyword">404</span> ):
        <Typography>Sorry this page is not existing</Typography>
      </Typography>
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
  );
};
export default NotFound;
