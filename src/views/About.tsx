import Navbar from "./Navbar";
import { Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <Navbar />
      <Container className="center-container">
        <Typography variant="h1">MovieScope</Typography>
        <p>A platform to search for any movie</p>
        <p>Version: 1.0.0</p>
        <Link
          to="https://github.com/Abdalrzakalsouki"
          target="_blank"
          rel="noopener noreferrer"
        >
          Abdulrazzak Alsssouki
        </Link>
      </Container>
    </div>
  );
};

export default About;
