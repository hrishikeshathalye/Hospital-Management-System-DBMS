import React, { Component, Image, StyleSheet, useState } from 'react';
import { FormClose, Notification } from 'grommet-icons';
import logo from './logo.svg';

import {
  Box,
  Button,
  Heading,
  Grommet,
  FormField,
  Form,
  Text,

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

export class CreateAccount extends Component {
  constuctor() {
  }

  render() {

    return (
      <Grommet theme={theme} full>
        <AppBar>
          <Heading level='3' margin='none'>WeCare</Heading>
        </AppBar>
        <Box fill align="center" justify="top">
          <Box align="center" pad="medium">
            <img
              height="100"
              width="100"
              src={require('./img/Asset 3.png')} />
          </Box>
          <Box width="medium">
          <Text color = "#AAAAAA">Patient's registration form:</Text>
            <Form
              onReset={event => console.log(event)}
              method="post"
              onSubmit={({ value }) => {
                console.log("Submit", value);

                fetch("http://localhost:3001/checkIfPatientExists?email=" + value.email)
                  .then(res => res.json())
                  .then(res => {
                    console.log("uoo");
                    console.log(res.data[0]);
                    console.log("sdadsada");

                    if ((res.data[0])) {
                      window.alert("An account is already associated with that email.");
                      console.log("no user founds");
                    } else {
                      fetch("http://localhost:3001/makeAccount?name=" + value.firstName + "&lastname=" + value.lastName + "&email=" + value.email
                        + "&password=" + value.password + "&address=" + value.address);
                      window.location = "/Home";
                    }
                  });
              }}>
              <FormField
                label="First Name"
                name="firstName"
                placeholder="Please enter your first name."
                required
                validate={{ regexp: /^[a-z]/i }} />
              <FormField
                label="Last Name"
                name="lastName"
                required
                placeholder="Please enter your last name."
                validate={{ regexp: /^[a-z]/i }} />
              <FormField
                label="Address"
                name="address"
                placeholder="Please enter your address."
                required />
              <FormField
                label="Email"
                name="email"
                type="email"
                placeholder="Please enter your email."
                required />
              <FormField
                label="Password"
                name="password"
                placeholder="Please enter your password."
                required
                validate={{ regexp: /^(?=.{8,})(?=.*[0-9]{2})/, message: "@ least 8 characters containing 2 digits" }} />
              <Box direction="row" align="center" >
                <Button
                  style={{ textAlign: 'center' }}
                  label="Cancel"
                  fill="horizontal"
                  href="/" />
                <Button
                  label="Sign Up"
                  fill="horizontal"
                  type="submit"
                  primary />
              </Box>
              <Box
                align="center" pad="small">
                <Text>Are you a doctor?</Text>
                <Button
                  primary
                  label="I'm a doctor"
                  href="/MakeDoc" />
              </Box>
            </Form>
          </Box>
        </Box>
      </Grommet>
    );
  }
}

export default CreateAccount;