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

export class MakeDoc extends Component {
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
                    <Text color = "#AAAAAA">Doctor's registration form:</Text>

                        <Form
                            onReset={event => console.log(event)}
                            method="post"
                            onSubmit={({ value }) => {
                                console.log("Submit", value);

                                fetch("http://localhost:3001/checkIfDocExists?email=" + value.email)
                                    .then(res => res.json())
                                    .then(res => {
                                        console.log("uoo");
                                        console.log(res.data[0]);
                                        console.log("sdadsada");

                                        if ((res.data[0])) {
                                            window.alert("A doctor is already associated with that email.");
                                            console.log("no user founds");
                                        } else {
                                            fetch("http://localhost:3001/makeDocAccount?name=" + value.firstName + "&lastname=" + value.lastName + "&email=" + value.email
                                                + "&password=" + value.password + "&uid=" + value.uid + "&gender=" + value.gender);
                                            window.location = "/DocHome";
                                        }
                                    });
                            }} >
                            <FormField
                                label="First Name"
                                name="firstName"
                                required
                                placeholder="Please enter your first name."
                                validate={{ regexp: /^[a-z]/i }} />
                            <FormField
                                label="Last Name"
                                name="lastName"
                                required
                                placeholder="Please enter your last name."
                                validate={{ regexp: /^[a-z]/i }} />
                            <FormField
                                label="Employee ID"
                                name="uid"
                                placeholder="Please enter your employee id."
                                required />
                            <FormField
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="Please enter your email."
                                required />
                            <FormField
                                label="Gender"
                                name="gender"
                                placeholder="Female or Male"
                                required />
                            <FormField
                                label="Password"
                                name="password"
                                required
                                placeholder="Please enter your password."
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

                        </Form>
                    </Box>
                </Box>

            </Grommet>
        );
    }
}

export default MakeDoc;