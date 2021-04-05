import Proptypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import routerPaths from "../services/shared/router-paths";

const Header = ({ title }) => {
  return (
    // <header>
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6'>{title}</Typography>
        {/* <Link to='/register' component={Register} /> */}
        <a key='register' href={routerPaths.Register}>
          register
        </a>
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
