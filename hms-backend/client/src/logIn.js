import React, { Component} from 'react';
import { withRouter } from 'react-router-dom';
import {
  Box,
  Button,
  Heading,
  Grommet,
  FormField,
  Form,
  CheckBox,
} from 'grommet';

import './App.css';

const theme = {
  global: {
    colors: {
      brand: '#000000',
      focus: "#000000",
      active: "#000000",
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
    const { isDoctor } = this.state; // If doctor, will query from doctor table

    return (
      <Grommet theme={theme} full>
        <AppBar>
        <a style={{ color: 'inherit', textDecoration: 'inherit'}} href="/"><Heading level='3' margin='none'>HMS</Heading></a>
        </AppBar>

        <Box
          fill
          align="center"
          justify="top"
          pad="medium">
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
                        window.alert("Invalid Log In");
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
                        window.alert("Invalid Log In");
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
                margin="large"
                label="I'm a doctor"
                name="isDoc"
                onChange={(event) => {
                  this.setState({ isDoctor: event.target.checked })
                }}
              />
              <Box direction="column" align="center" >
                <Button style={{ textAlign: 'center' , margin:'1rem'}}
                 type="submit" label="Log In" fill="horizontal" primary />
                <Button label="Create Account"
                  style={{ textAlign: 'center' , margin:'0.5rem'}}
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