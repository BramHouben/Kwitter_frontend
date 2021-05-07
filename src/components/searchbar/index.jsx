import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import "./index.css";

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }
  render() {
    return (
      <div>
        <Box id='boxsearchbar' display='flex' p={2} bgcolor='gray'>
          <TextField
            id='outlined'
            label='Search'
            placeholder='What is on your mind?'
            margin='normal'
            InputProps={{
              style: {
                color: "white",
              },
            }}
            InputLabelProps={{
              style: {
                color: "white",
              },
              shrink: true,
            }}
            variant='outlined'
          />
        </Box>
      </div>
    );
  }
}

export default Searchbar;
