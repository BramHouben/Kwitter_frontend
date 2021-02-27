import { Button } from "@material-ui/core";
import Proptypes from "prop-types";
const LoadTweetsButton = () => {
  const onClick = () => {
    console.log("load tweets");
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={onClick}>
        Load tweets
      </Button>
    </div>
  );
};

LoadTweetsButton.propTypes = {
  onClick: Proptypes.func,
};
export default LoadTweetsButton;
