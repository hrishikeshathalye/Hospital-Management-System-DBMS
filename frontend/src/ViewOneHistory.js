import React, { Component} from 'react';

import {
    Box,
    Heading,
    Grommet,
    Table,
    TableBody,
    TableCell,
    TableRow
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

export class ViewOneHistory extends Component {
    state = { medhiststate: [], medhiststate2: []}
    componentDidMount() {
        const { email } = this.props.match.params;
        this.allDiagnoses(email);
        this.getHistory(email);
    }

    getHistory(value) {
        let email = "'" + value + "'";
        fetch('http://localhost:3001/OneHistory?patientEmail='+ email)
        .then(res => res.json())
            .then(res => this.setState({ medhiststate: res.data }));
    }

    allDiagnoses(value) {
        let email = "'" + value + "'";
        fetch('http://localhost:3001/allDiagnoses?patientEmail='+ email)
        .then(res => res.json())
        .then(res => this.setState({ medhiststate2: res.data }));
    }

    render() {
        const { medhiststate } = this.state;
        const { medhiststate2 } = this.state;
        const Header = () => (
            <Box
                tag='header'
                background='brand'
                pad='small'
                elevation='small'
                justify='between'
                direction='row'
                align='center'
                flex={false}
            >
                <a style={{ color: 'inherit', textDecoration: 'inherit'}} href="/"><Heading level='3' margin='none'>HMS</Heading></a>
            </Box>
        );
        const Body = () => (
            <div className="container">
                <div className="panel panel-default p50 uth-panel">
                    {medhiststate.map(patient =>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell scope="row">
                                        <strong>Name</strong>
                                    </TableCell>
                                    <TableCell>{patient.name}</TableCell>
                                    <TableCell></TableCell>
                                    <TableCell><strong>Email</strong></TableCell>
                                    <TableCell>{patient.email}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row">
                                        <strong>Gender</strong>
                                    </TableCell>
                                    <TableCell>
                                        {patient.gender}
                                    </TableCell>
                                    <TableCell />
                                    <TableCell>
                                        <strong>Address</strong>
                                    </TableCell>
                                    <TableCell>{patient.address}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row">
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <strong>Conditions</strong>
                                    </TableCell>
                                    <TableCell>{patient.conditions}
                                        </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row">
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <strong>Surgeries</strong>
                                    </TableCell>
                                    <TableCell>{patient.surgeries}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row">
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <strong>Medications</strong>
                                    </TableCell>
                                    <TableCell>{patient.medication}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    )}
                </div>
                <hr />
            </div>
        );
        const Body2 = () => (
            <div className="container">
                <div className="panel panel-default p50 uth-panel">
                    {medhiststate2.map(patient =>
                        <div>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell scope="row">
                                        <strong>Date</strong>
                                    </TableCell>
                                    <TableCell>{patient.date.split('T')[0]}</TableCell>
                                    <TableCell></TableCell>
                                    <TableCell><strong>Doctor</strong></TableCell>
                                    <TableCell>{patient.doctor}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row">
                                        <strong>Concerns</strong>
                                    </TableCell>
                                    <TableCell>
                                        {patient.concerns}
                                    </TableCell>
                                    <TableCell />
                                    <TableCell>
                                        <strong>Symptoms</strong>
                                    </TableCell>
                                    <TableCell>{patient.symptoms}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row">
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <strong>Diagnosis</strong>
                                    </TableCell>
                                    <TableCell>{patient.diagnosis}
                                        </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row">
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <strong>Prescription</strong>
                                    </TableCell>
                                    <TableCell>{patient.prescription}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row">
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        <hr />
                        </div>
                    )}
                </div>
            </div>
        );
        return (
            <Grommet full={true} theme={theme}>
                <Box fill={true}>
                    <Header />
                    <Body />
                    <Body2 />
                </Box>
            </Grommet>
        );
    }
}
export default ViewOneHistory;