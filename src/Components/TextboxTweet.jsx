import { Component } from "react";
import TextField from "@material-ui/core/TextField";

class TextboxTweet extends Component {
  render(prop) {
    console.log(prop);

    // const onsubmit = (e) => {
    //   //  e.preventdefault();
    //   console.log(e);
    //   prop.addTweet("test");
    // };

    return (
      <div>
        <TextField id='text' type='text' />
        <button onClick={onsubmit}>Send tweet</button>
      </div>
    );
  }
}

export default TextboxTweet;
