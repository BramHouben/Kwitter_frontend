import { Button } from "@material-ui/core";

const LoadTweetsButton = () => {
  const onClick = () => {
    console.log("load tweets");
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={onClick}>
        Hello World
      </Button>
    </div>
  );
};

export default LoadTweetsButton;
