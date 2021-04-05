import Proptypes from "prop-types";

const Footer = ({ title }) => {
  return (
    <footer>
      <h1>{title}</h1>
    </footer>
  );
};
Footer.defaultProps = {
  title: "Dit is een footer",
};

Footer.propTypes = {
  title: Proptypes.string.isRequired,
};

export default Footer;
