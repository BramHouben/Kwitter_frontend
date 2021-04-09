import React from "react";

import Container from "@material-ui/core/Container";
import { FormControl } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import "index.css";
import InputLabel from "@material-ui/core/InputLabel";
export default class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
    };
  }

  // componentDidMount() {}
  render() {
    return (
      <div>
        <Container maxWidth='sm'>
          <p>register</p>
          <FormControl>
            <InputLabel htmlFor='email-input'>Email address</InputLabel>
            <Input id='email-input' aria-describedby='email-input-text' />
            <FormHelperText id='email-input-text'>
              We'll never share your email!
            </FormHelperText>
          </FormControl>

          <div id='textfieldRegister'>
            <TextField
              id='standard-password-input'
              label='Password'
              type='password'
              autoComplete='current-password'
            />
          </div>
          <div id='buttonRegister'>
            <Button variant='contained' color='primary'>
              Register
            </Button>
          </div>
        </Container>
      </div>
    );
  }
}
