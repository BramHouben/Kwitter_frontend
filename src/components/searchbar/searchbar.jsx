import React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { Component } from "react";
import "../../components/searchbar/searchbar.css";

class Searchbar extends Component {
  state = {
    content: "",
  };

  render() {
    return (
      <div>
        {/* <Container maxWidth='sm'> */}{" "}
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
        {/* </Container> */}
      </div>
    );
  }
}

export default Searchbar;
