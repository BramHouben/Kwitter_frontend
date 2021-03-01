import { Button } from "@material-ui/core";
import Proptypes from "prop-types";
import { Component } from "react";

class LoadTweetsButton extends Component {
  render() {
    const onClick = () => {
      console.log("load tweets");
    };

    return (
      <div>
        <Button variant='contained' color='primary' onClick={onClick}>
          Load tweets
        </Button>
      </div>
    );
  }
}
LoadTweetsButton.propTypes = {
  onClick: Proptypes.func,
};
export default LoadTweetsButton;
