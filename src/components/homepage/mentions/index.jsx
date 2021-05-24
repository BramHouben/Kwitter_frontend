import React, { Component } from "react";
import { connect } from "react-redux";
import Tweet from "components/homepage/tweet";

export class Mentions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mentions: this.props,
    };
  }

  componentDidMount() {
    console.log("mentions loaded");
  }
  componentDidUpdate(oldprops, oldstate) {
    if (oldprops.mentions !== this.state.mentions) {
      console.log("update mentions");
    }
  }

  render() {
    let { mentions } = this.props;
    return (
      <div id='mentionlist'>
        <h1>Mentions</h1>
        {mentions.map((mention) => (
          <Tweet key={mention.id} tweet={mention} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Mentions);
