import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const UnderDevelopment = () => {
  return (
    <Container>
      <Typography variant="h1">
        This is page is still under development, we will do our best to finish
        it soon ^-)
      </Typography>
      <Button>
        <Link to="/">Home</Link>
      </Button>
    </Container>
  );
};

export default UnderDevelopment;
