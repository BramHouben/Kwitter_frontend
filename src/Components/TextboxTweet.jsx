import { Component } from "react";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
class TextboxTweet extends Component {
  state = {
    name: "",
    content: "",
  };

  handleChangeContent = (event) => {
    this.setState({ content: event.target.value });
  };
  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.content);
    console.log(this.state.name);
    // axios.post(
    //   "http://localhost:8081/tweets",
    //   {
    //     accoutname: this.state.name,
    //     content: this.state.content,
    //   },
    //   {
    //     mode: "cors",
    //     credentials: "same-origin",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Access-Control-Allow-Origin": "*",
    //     },
    //   }
    // );
    axios
      .post("http://localhost:8096/tweets", null, {
        params: {
          accountname: this.state.name,
          content: this.state.content,
        },
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>content</label>
          <TextField
            id='content'
            name='content'
            type='text'
            onChange={this.handleChangeContent}
          />
          <label>naam</label>
          <TextField
            id='name'
            name='name'
            type='text'
            onChange={this.handleChangeName}
          />

          <div>
            <button type='submit'>Send tweet</button>
          </div>
        </form>
      </div>
    );
  }
}

export default TextboxTweet;
