import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import ApiAction from "services/Api/apiactions";
import Instance from "services/Api/axioscreate";
import { connect } from "react-redux";
import "./index.css";
import Alert from "@material-ui/lab/Alert";

class Loginform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      open: false,
    };
    this.handleClose = this.handleClose.bind(this);
  }
  setPassword(newpass) {
    this.setState({
      password: newpass,
    });
  }

  setUsername(newusername) {
    this.setState({
      username: newusername,
    });
  }

  handleClose(event, reason) {
    this.setState({ open: false });

    if (reason === "clickaway") {
      return;
    }
  }

  componentDidUpdate(prevprops, newprops) {
    if (prevprops.open !== this.state.open) {
      console.log("update");
    }
  }

  async loginUser() {
    await Instance.post(ApiAction.login, {
      username: this.state.username,
      password: this.state.password,
    })
      .then((data) => {
        if (data.status === 200) {
          // this.props.loggedIn();
          this.checkforRedirect();
        }
      })
      .catch((error) => {
        if (error.response.status !== 200) {
          this.setState({ open: true });
        }

        console.log(error);
      });
  }

  async checkforRedirect() {
    await Instance.get(ApiAction.checkForRole, {})
      .then((data) => {
        if (data.status === 200) {
          this.props.loggedIn();
          window.location.pathname = data.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form id='formlogin'>
          <div id='login-username-field'>
            <TextField
              id='login-username'
              label='Username'
              variant='outlined'
              onChange={(e) => {
                this.setUsername(e.target.value);
              }}
            />
          </div>
          <div id='login-password-field'>
            <TextField
              id='login-password'
              type='password'
              label='password'
              variant='outlined'
              onChange={(e) => {
                this.setPassword(e.target.value);
              }}
            />
          </div>
        </form>
        <div id='register-button'>
          <Button
            variant='outlined'
            color='primary'
            onClick={() => this.loginUser()}
          >
            Login
          </Button>
        </div>
        <Snackbar
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <Alert onClose={this.handleClose} severity='error'>
            Wrong credentials!
          </Alert>
        </Snackbar>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  loggedIn: () => dispatch({ type: "LOGIN", payload: true }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Loginform);
