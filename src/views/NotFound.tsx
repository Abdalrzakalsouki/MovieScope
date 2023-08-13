import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
// import { useTheme } from "@mui/material/styles";
const NotFound = () => {
  //   const theme = useTheme();
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
