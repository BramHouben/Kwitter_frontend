import { Box } from "@material-ui/core";
import React, { Component } from "react";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import ApiAction from "services/Api/apiactions";

import Instance from "services/Api/axioscreate";
import "./index.css";

export default class Trendbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trends: {},
    };
  }

  async getTrend() {
    await Instance.get(ApiAction.getTrends)
      .then((data) => {
        console.log(data);
        this.setState({
          trends: data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getTrend();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.trends !== prevState.trends) {
      console.log("update");
    }
  }

  // generate(element) {
  //   return this.state.trends.map((trend) =>
  //     React.cloneElement(element, {
  //       key: trend.trendName,
  //     })
  //   );
  // }

  render() {
    let { trends } = this.state;
    return (
      <div>
        <Box id='trendbox'>
          <List>
            <ListSubheader id='subheader'>
              <h1>Trends wereldwijd</h1>
            </ListSubheader>
            {trends.length >= 0 ? (
              trends.map((item) => (
                <div key={item.trendName}>
                  <ListItem>
                    <ListItemText primary={item.trendName} />
                    <ListItemText primary={item.count} />
                  </ListItem>
                </div>
              ))
            ) : (
              <div>No trends loaded</div>
            )}
          </List>
        </Box>
      </div>
    );
  }
}
