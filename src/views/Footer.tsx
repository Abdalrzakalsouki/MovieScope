import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
const Footer = () => {
  return (
    <div className="flex-coulm-center">
      <Typography variant="h3"> MovieScop </Typography>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/about">About</Link>
      <p>Made by love ❤ | Abdulrazzak Alsssouki</p>
    </div>
  );
};
export default Footer;
