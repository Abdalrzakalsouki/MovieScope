import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const Error = () => {
  return (
    <div>
      <Navbar />
      <Container className="center-container">
        <Typography variant="h1">Sorry, Someting went wrong ): </Typography>
        <Link to="/">Home</Link>
      </Container>
    </div>
  );
};

export default Error;
