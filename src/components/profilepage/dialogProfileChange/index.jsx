import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import ApiAction from "services/Api/apiactions";
import Instance from "services/Api/axioscreate";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class DialogProfileChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      website: "",
      bio: "",
      name: "",
      place: "",
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  componentDidUpdate(prevprops, newprops) {
    if (prevprops.openModal !== this.state.openModal) {
      console.log("update");
    }
  }

  async handleOpen() {
    this.setState({
      openModal: true,
    });
  }

  async handleClose() {
    this.setState({
      openModal: false,
    });
  }
  async setName(Name) {
    console.log(Name);
    this.setState({
      name: Name,
    });
  }

  async setPlace(Place) {
    this.setState({
      place: Place,
    });
  }

  async setWebsite(Website) {
    this.setState({
      website: Website,
    });
  }

  async setBio(Bio) {
    this.setState({
      bio: Bio,
    });
  }

  async sendUserInfo(e) {
    console.log("sendUserInfo");
    e.preventDefault();

    await Instance.put(ApiAction.changeProfileDetails, {
      bio: this.state.bio,
      website: this.state.website,
      location: this.state.place,
      name: this.state.name,
    })
      .then((data) => {
        console.log(data);
        this.handleClose();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        {" "}
        <Button variant='contained' color='primary' onClick={this.handleOpen}>
          change account details
        </Button>
        <Dialog
          open={this.state.openModal}
          onClose={this.handleClose}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>User info</DialogTitle>
          <form
            id='formregister'
            noValidate
            onSubmit={(e) => this.sendUserInfo(e)}
          >
            <DialogContent>
              <DialogContentText>
                Please change your account info to the latest information
              </DialogContentText>

              <TextField
                autoFocus
                margin='dense'
                id='name'
                label='Naam & achternaam'
                fullWidth
                onChange={(e) => {
                  this.setName(e.target.value);
                }}
              />
              <TextField
                autoFocus
                margin='dense'
                id='place'
                label='Plaats'
                fullWidth
                onChange={(e) => {
                  this.setPlace(e.target.value);
                }}
              />
              <TextField
                autoFocus
                margin='dense'
                id='website'
                label='Website'
                fullWidth
                onChange={(e) => {
                  this.setWebsite(e.target.value);
                }}
              />
              <TextField
                autoFocus
                margin='dense'
                id='bio'
                label='Bio'
                fullWidth
                onChange={(e) => {
                  this.setBio(e.target.value);
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color='primary'>
                Cancel
              </Button>
              <Button color='primary' type='submit'>
                send
              </Button>
            </DialogActions>{" "}
          </form>
        </Dialog>
      </div>
    );
  }
}
