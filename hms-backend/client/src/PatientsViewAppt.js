import React, { Component} from 'react';

import {
    Box,
    Heading,
    Grommet,
    Button
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

export class PatientsViewAppointments extends Component {
    state = { appointmentsState: [] }
    componentDidMount() {
        this.getNames("");
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
                fetch('http://localhost:3001/patientViewAppt?email=' + email_in_use)
                    .then(res => res.json())
                    .then(res => {
                        this.setState({ appointmentsState: res.data });
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
                            <th>Date of Appointment</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                                <th>Concerns</th>
                                <th>Symptoms</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointmentsState.map(patient =>
                                <tr key={patient.user}>
                                    <td align="center" >
                                        {new Date(patient.theDate).toLocaleDateString().substring(0, 10)}
                                    </td>
                                    <td align="center" >{patient.theStart.substring(0, 5)}</td>
                                    <td align="center" >{patient.theEnd.substring(0, 5)}</td>
                                    <td align="center">{patient.theConcerns} </td>
                                    <td align="center">{patient.theSymptoms}</td>
                                    <td align="center">{patient.status}</td>
                                    <td>
                                        <Button label="See Diagnosis"
                                        href={`/showDiagnoses/${patient.ID}`}
                                        ></Button>     
                                    </td> 
                                    <td>
                                    {   patient.status==="NotDone"?
                                        <Button label="Cancel"
                                        onClick = {() => {
                                            fetch('http://localhost:3001/deleteAppt?uid='+ patient.ID)
                                            window.location.reload()
                                        }}
                                        ></Button>
                                        :
                                        <Button label="Delete"
                                        onClick = {() => {
                                            fetch('http://localhost:3001/deleteAppt?uid='+ patient.ID)
                                            window.location.reload()
                                        }}
                                        ></Button>
                                    }
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
                    <a style={{ color: 'inherit', textDecoration: 'inherit'}} href="/"><Heading level='3' margin='none'>HMS</Heading></a>
                    </AppBar>
                    <Body />
                </Box>
            </Grommet>
        );
    }
}

export default PatientsViewAppointments;