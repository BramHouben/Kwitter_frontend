import React, { Component } from "react";
import "./index.css";

export default class AllLogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: this.props.logs,
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.logs.length !== prevProps.logs.length) {
      console.log("update logs");
    }
  }

  render() {
    let { logs } = this.props;
    console.log(logs);
    return (
      <div>
        <h1>logs</h1>
        <table id='logs'>
          <tbody>
            {logs.map((log, index) => {
              const { logId, typeError, service, text, time } = log; //destructuring
              return (
                <tr key={logId}>
                  <td>{logId}</td>
                  <td>{typeError}</td>
                  <td>{service}</td>
                  <td>{text}</td>
                  <td>{time}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
