import Proptypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Register from "../pages/register";
import { Link } from "@material-ui/core";

const Header = ({ title }) => {
  return (
    // <header>
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6'>{title}</Typography>
        <Link to='/register' component={Register} />
      </Toolbar>
    </AppBar>
    // </header>
  );
};

Header.defaultProps = {
  title: "Kwitter",
};

Header.propTypes = {
  title: Proptypes.string.isRequired,
};
export default Header;
