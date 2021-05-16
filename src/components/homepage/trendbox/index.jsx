import { Box } from "@material-ui/core";
import React, { Component } from "react";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import "./index.css";

export default class Trendbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trends: [],
    };
  }

  generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      })
    );
  }

  render() {
    return (
      <div>
        <Box id='trendbox'>
          <List>
            <ListSubheader id='subheader'>
              <h1>Trends wereldwijd</h1>
            </ListSubheader>
            {this.generate(
              <ListItem>
                <ListItemText primary='trends ' secondary='count van trend' />
              </ListItem>
            )}
          </List>
        </Box>
      </div>
    );
  }
}
