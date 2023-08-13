import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Container>
      <Typography variant="h1">Sorry, Someting went wrong ): </Typography>
      <Button>
        <Link to="/">Home</Link>
      </Button>
    </Container>
  );
};

export default Error;
