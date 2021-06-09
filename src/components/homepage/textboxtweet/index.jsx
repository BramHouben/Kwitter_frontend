import { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ApiAction from "services/Api/apiactions";
import Instance from "services/Api/axioscreate";
import "./index.css";
import SendIcon from "@material-ui/icons/Send";

export default class TextboxTweet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      open: false,
      updateMehod: this.props.handleToUpdate,
    };
  }

  showerror = (event) => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ open: false });
  };
  handleChangeContent = (event) => {
    this.setState({ content: event.target.value });
  };
  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log(this.state.content);
    console.log(this.state.name);

    await Instance.post(ApiAction.postTweets, null, {
      params: {
        // Const for now
        content: this.state.content,
      },
    })
      .then((res) => {
        this.state.updateMehod(res.data);
        this.setState({ content: "" });
      })
      .catch(function (error) {
        alert("Make a nicer tweet");
        console.log(error);
      });
  };

  render() {
    let content = this.state.content;
    return (
      <div id='textboxdiv'>
        <h1> What's happening? </h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <TextField
              id='content'
              name='content'
              value={content}
              multiline
              type='text'
              variant='outlined'
              onChange={this.handleChangeContent}
            />
          </div>
          <div className='btnSend'>
            <Button
              variant='contained'
              color='primary'
              type='submit'
              endIcon={<SendIcon>send</SendIcon>}
            >
              Send tweet
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
