import Proptypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Header",
};

Header.propTypes = {
  title: Proptypes.string.isRequired,
};
export default Header;
