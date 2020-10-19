import React, { Component, Image, StyleSheet, useState } from 'react';
import logo from './logo.svg';
import brandImage from './img/Asset 3.png';
import { withRouter } from 'react-router-dom';

import {
  FormClose,
  Notification,
  User,


} from 'grommet-icons';

import {
  Collapsible,
  Layer,
  ResponsiveContext,
  Box,
  Button,
  Heading,
  Grommet,
  Menu,
  FormField,
  Form,
  TextInput,
  Select,
  Text,
  CheckBox,
  RadioButtonGroup,
  TextArea,
  RangeInput,


} from 'grommet';

import './App.css';
import backdrop from './img/hmsbackdrop.jpg'

const theme = {
  global: {
    colors: {
      brand: '#00739D',
      focus: "#00739D",
      active: "#00739D",
    },
    font: {
      family: 'Lato',
    },
  },
};

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    style={{ zIndex: '1' }}
    {...props} />
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

class LogIn extends Component {
  state = { isDoctor: false }

  constuctor() {
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange() {
    let path = '/Home';
    this.props.history.push(path);
  }

  render() {
    const { isDoctor } = this.state; // If doctor, will wuery from doctor table

    return (
      <Grommet theme={theme} full>
        <AppBar>
          <Heading level='3' margin='none'>WeCare</Heading>
        </AppBar>

        <Box
          fill
          align="center"
          justify="top"
          pad="medium">
          <Box align="center">
            <img
              height="100"
              width="100"
              src={require('./img/Asset 3.png')} />
          </Box>
          <Box
            width="medium"
            pad="medium">
            <Form

              onReset={event => console.log(event)}
              onSubmit={({ value }) => {
                console.log("Submit", value);
                if (value.isDoc === true) {
                  fetch("http://localhost:3001/checkDoclogin?email=" + value.email +
                    "&password=" + value.password)
                    .then(res => res.json())
                    .then(res => {
                      if (res.data.length === 0) {
                        window.alert("ouch, invalid log in");
                        console.log("nope");
                      } else {
                        window.location = "DocHome";
                        console.log(res.data);
                      }
                    });
                } else {
                  fetch("http://localhost:3001/checklogin?email=" + value.email +
                    "&password=" + value.password)
                    .then(res => res.json())
                    .then(res => {
                      if (res.data.length === 0) {
                        console.log("nope");
                        window.alert("ouch, invalid log in");
                      } else {
                        window.location = "/Home";
                        console.log(res.data);
                      }
                    });
                }
              }
              }>

              <FormField
                color="#00739D"
                label="Email"
                name="email"
                type="email"
                placeholder = "Please enter your email."
                required />
              <FormField
                color="#00739D"
                type='password'
                label="Password"
                name="password"
                placeholder = "Please enter your password."
                required />
              <FormField
                component={CheckBox}
                checked={isDoctor}
                margin="small"
                label="I'm a doctor"
                name="isDoc"
                onChange={(event) => {
                  this.setState({ isDoctor: event.target.checked })
                  console.log("toggled");
                }}

              />
              <Box direction="column" align="center" >
                <Button type="submit" label="Log In" fill="horizontal" primary />
                <Button label="Create Account"
                  style={{ textAlign: 'center' }}
                  fill="horizontal"
                  href="/createAcc" />
              </Box>
            </Form>
          </Box>
        </Box>
      </Grommet>
    );
  }
}

export default withRouter(LogIn);