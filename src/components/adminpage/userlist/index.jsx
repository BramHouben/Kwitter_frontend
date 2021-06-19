import React, { Component } from "react";
import "./index.css";
import { DataGrid } from "@material-ui/data-grid";
import Button from "@material-ui/core/Button";

const columns = [
  { field: "id", headerName: "ID", width: 250 },
  { field: "username", headerName: "username user", width: 170 },
  { field: "role", headerName: "role user", width: 170 },
];

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userdata: this.props.userdata,
      action: this.props.action,
      dataloaded: false,
      usernameSelected: "",
    };
    this.handleRowSelection = this.handleRowSelection.bind(this);
    this.sendToPage = this.sendToPage.bind(this);
  }

  handleRowSelection(e) {
    this.setState({
      usernameSelected: e.data.username,
    });
  }

  async sendToPage() {
    this.state.action(this.state.usernameSelected);
  }

  componentDidMount() {
    console.log(this.state.action);
  }

  componentDidUpdate(prevprops, newprops) {
    if (prevprops.dataloaded !== this.state.dataloaded) {
      console.log("update");
    }
  }

  render() {
    let { userdata } = this.state;
    return (
      <div>
        <DataGrid
          className='datagridusers'
          rows={userdata}
          columns={columns}
          pageSize={5}
          autoHeight
          onRowSelected={this.handleRowSelection}
        />
        <Button variant='contained' color='primary' onClick={this.sendToPage}>
          Promote to moderator
        </Button>
      </div>
    );
  }
}
