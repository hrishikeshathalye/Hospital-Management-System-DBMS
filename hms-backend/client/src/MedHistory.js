import React, { Component, Image, StyleSheet, useState } from 'react';
import { FormClose, Notification, Aid } from 'grommet-icons';
import logo from './logo.svg';

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
  RadioButton,
  CheckBox,
  RadioButtonGroup,
  TextArea,
  Range,
  RangeInput


} from 'grommet';

import './App.css';
import backdrop from './img/hmsbackdrop.jpg'

const theme = {
  global: {
    colors: {
      brand: '#00739D',
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
    //elevation='medium'
    style={{ zIndex: '1' }}
    {...props} />
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

export class MedHist extends Component {
  constuctor() {

    // let email_in_use = "";
    // let password_in_use = "";
  }

  // getSession = _ => {
  //   fetch("http://localhost:3001/userInSession")
  //     .then(res => {
  //       console.log(res);
  //       console.log("eg");
  //     });
  // }

  state = {
    sulfaChecked: false,
    iodineChecked: false,
    insulinChecked: false,
    ampicillinChecked: false,
    tetracylineChecked: false,
    aspirinChecked: false,
    penicillinChecked: false,
    latexChecked: false,
    anemiaChecked: false,
    anxietyChecked: false,
    arthritisChecked: false,
    asthmaChecked: false,
    cancerChecked: false,
    depressionChecked: false,
    diabetesChecked: false,
    ulcersChecked: false,
  }

  render() {
    const {
      sulfaChecked,
      iodineChecked,
      insulinChecked,
      ampicillinChecked,
      tetracylineChecked,
      aspirinChecked,
      penicillinChecked,
      latexChecked,
      fluorideChecked,
      anemiaChecked,
      anxietyChecked,
      arthritisChecked,
      asthmaChecked,
      cancerChecked,
      depressionChecked,
      diabetesChecked,
      ulcersChecked, } = this.state;

    return (
      <Grommet theme={theme}>
        <Box fill>
          <AppBar>
            <Heading level='3' margin='none'>WeCare</Heading>
          </AppBar>

          <Box align="left" pad="small">
            <Text >Check any known allergies:</Text>
            <Form
              // action="http://localhost:3001/insert" 
              onSubmit={({ value }) => {
                let email_in_use = "";
                console.log(value);
                fetch("http://localhost:3001/userInSession")
                  .then(res => res.json())
                  .then(res => {
                    var string_json = JSON.stringify(res);
                    var email_json = JSON.parse(string_json);
                    email_in_use = email_json.email;
                    console.log(email_in_use);
                    // console.log(JSON.stringify(res));
                    // console.log(res.data);
                    console.log("eg");
                  });


              }}>
              <FormField
                checked={ampicillinChecked}
                component={CheckBox}
                name='Ampicillin'
                label='ampicillin'
                onChange={event => this.setState({ ampicillinChecked: event.target.checked })} />
              <FormField
                checked={aspirinChecked}
                component={CheckBox}
                name='Aspirin'
                label='aspirin'
                onChange={event => this.setState({ aspirinChecked: event.target.checked })} />
              <FormField
                checked={insulinChecked}
                component={CheckBox}
                name='insulin'
                label='insulin drugs'
                onChange={event => this.setState({ insulinChecked: event.target.checked })} />
              <FormField
                checked={iodineChecked}
                component={CheckBox}
                name='iodine'
                label='iodine'
                onChange={event => this.setState({ iodineChecked: event.target.checked })} />
              <FormField
                checked={latexChecked}
                component={CheckBox}
                name='Latex'
                label='latex'
                onChange={event => this.setState({ latexChecked: event.target.checked })} />
              <FormField
                checked={penicillinChecked}
                component={CheckBox}
                name='Penicillin'
                label='penicillin'
                onChange={event => this.setState({ penicillinChecked: event.target.checked })} />
              <FormField
                checked={sulfaChecked}
                component={CheckBox}
                name='sulfa'
                label='sulfa drugs'
                onChange={event => this.setState({ sulfaChecked: event.target.checked })} />

              <FormField
                checked={tetracylineChecked}
                component={CheckBox}
                name='Tetracyline'
                label='tetracyline'
                onChange={event => this.setState({ tetracylineChecked: event.target.checked })} />

              <Text>Check if you have ever experienced the following conditions:</Text>
              <FormField
                checked={anemiaChecked}
                component={CheckBox}
                name='Anemia'
                label='anemia'
                onChange={event => this.setState({ anemiaChecked: event.target.checked })} />
              <FormField
                checked={anxietyChecked}
                component={CheckBox}
                name='Anxiety'
                label='anxiety'
                onChange={event => this.setState({ anxietyChecked: event.target.checked })} />
              <FormField
                checked={arthritisChecked}
                component={CheckBox}
                name='Arthritis'
                label='arthritis'
                onChange={event => this.setState({ arthritisChecked: event.target.checked })} />
              <FormField
                checked={asthmaChecked}
                component={CheckBox}
                name='Asthma'
                label='asthma'
                onChange={event => this.setState({ asthmaChecked: event.target.checked })} />
              <FormField
                checked={cancerChecked}
                component={CheckBox}
                name='Cancer'
                label='cancer'
                onChange={event => this.setState({ cancerChecked: event.target.checked })} />
              <FormField
                checked={depressionChecked}
                component={CheckBox}
                name='Depression'
                label='depression'
                onChange={event => this.setState({ depressionChecked: event.target.checked })} />
              <FormField
                checked={diabetesChecked}
                component={CheckBox}
                name='Diabetes'
                label='diabetes'
                onChange={event => this.setState({ diabetesChecked: event.target.checked })} />
              <FormField
                checked={ulcersChecked}
                component={CheckBox}
                name='Ulcers'
                label='ulcers'
                onChange={event => this.setState({ ulcersChecked: event.target.checked })} />
              <Button
                icon={<Aid />}
                label="Submit"
                type="submit"
                primary
              />
            </Form>

          </Box>


        </Box>
      </Grommet>
    );




  }
}

export default MedHist;