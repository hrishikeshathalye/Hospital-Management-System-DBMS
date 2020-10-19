import React, { Component, Image, StyleSheet, useState } from 'react';
import logo from './logo.svg';

import {
    FormClose,
    Notification

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
        style={{ zIndex: '1' }}
        {...props} />
);

const INITIAL_STATE = {
    email: "",
    password: "",
    error: null,
};

export class PatientsViewAppointments extends Component {
    state = { appointmentsState: [] }

    componentDidMount() {

        this.getNames("");
        console.log(this.state.names);
    }

    getNames(value) {
        let patName = value;
        console.log(patName);

        fetch("http://localhost:3001/userInSession")
            .then(res => res.json())
            .then(res => {
                var string_json = JSON.stringify(res);
                var email_json = JSON.parse(string_json);
                let email_in_use = email_json.email;
                console.log(email_in_use);
                // console.log(JSON.stringify(res));
                // console.log(res.data);
                console.log("eg");
                fetch('http://localhost:3001/patientViewAppt?email=' + email_in_use)
                    .then(res => res.json())
                    .then(res => {

                        this.setState({ appointmentsState: res.data });
                        //console.log(JSON.stringify);
                    });
            });



    }

    render() {
        const { appointmentsState } = this.state;

        const Body = () => (
            <div className="container">
                <div className="panel panel-default p50 uth-panel">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                            <th>Date of Appointment:</th>
                                <th>Start Time:</th>
                                <th>End Time:</th>
                                <th>Concerns</th>
                                <th>Symptoms</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointmentsState.map(patient =>
                                <tr key={patient.user}>
                                    {/* <td>|____________________
                                        <script type="text/javascript">
                                            fetch('http://localhost:3001/getDateTimeOfAppt?uid=' + patient.UID);

                                        </script>
                                    </td> */}
                                    <td align="center" >

                                        {patient.theDate.substring(0, 10)
                                            // (async function () {
                                            //     let me = "dd";
                                            //     return fetch('http://localhost:3001/getDateTimeOfAppt?uid=' + patient.UID)
                                            //         .then(res => res.json())
                                            //         .then(res => {
                                            //             console.log("sasa");
                                            //             console.log(me);
                                            //             console.log("sasa");

                                            //             me = res.data[0].end;
                                            //          ß   console.log(res.data[0].end);
                                            //             console.log(res.data[0]);
                                            //             me = res.data[0].end;
                                            //             console.log(me);
                                            //             return res.data[0].end
                                            //         });
                                            //         // console.log("here");

                                            //         // return me;
                                            // })()
                                        }
                                    </td>
                                    <td align="center" >{patient.theStart.substring(0, 5)}</td>
                                    <td align="center" >{patient.theEnd.substring(0, 5)}</td>
                                    <td align="center">{patient.theConcerns} </td>
                                    <td align="center">{patient.theSymptoms}
                                    </td>

                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

        );

        return (
            <Grommet theme={theme} full>
                <Box >
                    <AppBar>
                        <Heading level='3' margin='none'>WeCare</Heading>
                    </AppBar>
                    <Body />
                    <Form
                    // onSubmit={({ value }) => {
                    //     let email_in_use = "";
                    //     console.log(value);
                    //     fetch("http://localhost:3001/userInSession")
                    //       .then(res => res.json())
                    //       .then(res => {
                    //         var string_json = JSON.stringify(res);
                    //         var email_json = JSON.parse(string_json);
                    //         email_in_use = email_json.email;
                    //         console.log(email_in_use);
                    //         console.log("eg");
                    //       fetch("http://localhost:3001/resetPasswordPatient?email=" + 
                    //       email_in_use + "&oldPassword=" + value.oldPassword + "&newPassword=" + 
                    //       value.newPassword, {method: 'POST'});
                    //       });
                    //     //   fetch("http://localhost:3001/resetPasswordPatient?email=" + 
                    //     //   email_in_use + "&oldPassword=" + value.oldPassword + "&newPassword=" + 
                    //     //   value.newPassword, {method: 'POST'});


                    // }}
                    >
                        {/* <Text>Change your password:</Text>
                        <FormField
                            type='password'
                            label="Old password"
                            name="oldPassword"
                            required
                        />
                        <FormField
                            label="New password"
                            name="newPassword"
                            required
                        />
                        <Button
                            type="submit"
                            label="try to change"
                            primary
                        /> */}
                    </Form>


                </Box>
            </Grommet>
        );
    }
}

export default PatientsViewAppointments;