import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <Container>
      <Typography variant="h1">
        404 | <Typography>Sorry this page is not existing</Typography>
      </Typography>
      <Button>
        <Link to="/">Home</Link>
      </Button>
    </Container>
  );
};
export default NotFound;
