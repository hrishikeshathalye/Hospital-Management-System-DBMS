import React, { Component} from 'react';

import {
    Box,
    Button,
    Heading,
    Grommet,
    FormField,
    Form
} from 'grommet';

import './App.css';

const theme = {
    global: {
        colors: {
            brand: '#000000',
            focus: '#000000'
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

export class DocSettings extends Component {
    constuctor() {
    }
    render() {
        return (
            <Grommet theme={theme} full>
                <Box >
                    <AppBar>
                    <a style={{ color: 'inherit', textDecoration: 'inherit'}} href="/"><Heading level='3' margin='none'>HMS</Heading></a>
                    </AppBar>
                    <Box pad="small">
                    <Form
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
                          fetch("http://localhost:3001/resetPasswordDoctor?email=" + 
                          email_in_use + "&oldPassword=" + value.oldPassword + "&newPassword=" + 
                          value.newPassword, {method: 'POST'})
                          .then(res => res.json())
                          .then(res => {
                            let didUpdate = res.data.affectedRows;
                            if(didUpdate === 0) {
                                window.alert("Old Password is wrong");
                            } else {
                                window.alert("Password Reset Successful");
                            }
                          });
                          });

                    }}>
                        <h3>Password Change</h3>
                        <FormField
                            type='password'
                            label="Old Password"
                            name="oldPassword"
                            required
                        />
                        <br />
                        <FormField
                            label="New Password"
                            name="newPassword"
                            required
                        />
                        <br />
                        <Button
                            type="submit"
                            label="Change Password"
                            primary
                        />
                    </Form>
                    </Box>
                </Box>
            </Grommet>
        );
    }
}

export default DocSettings;