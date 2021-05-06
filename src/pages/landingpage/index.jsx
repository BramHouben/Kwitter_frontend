import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import "../landingpage/index.css";
import routerPaths from "services/shared/router-paths";
import Button from "@material-ui/core/Button";

export class landingPage extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <img src='/assets/talkingpeople.png' alt='talking people'></img>
          </Grid>
          <Grid item xs={12} sm={6} className='textlandingpage'>
            <h1 id='h1title'>Kwetter </h1>
            <h2>Tweet what you think and meet new people.</h2>
            <div className='loginbutton'>
              <Button
                id='btnlogin'
                variant='contained'
                color='primary'
                size='large'
                href={routerPaths.Register}
              >
                Register
              </Button>
            </div>
            <div className='registerbutton'>
              <Button
                id='btnregister'
                size='large'
                variant='outlined'
                color='primary'
                href={routerPaths.Login}
              >
                Login
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(landingPage);
