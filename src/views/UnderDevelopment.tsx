import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const UnderDevelopment = () => {
  return (
    <div>
      <Navbar />
      <Container className="center-container">
        <Typography variant="h1">
          This is page is still under development, we will do our best to finish
          it soon ^-)
        </Typography>
        <Link to="/">Home</Link>
      </Container>
    </div>
  );
};

export default UnderDevelopment;
