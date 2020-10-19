import React, { Component, Image, StyleSheet, useState } from 'react';
import logo from './logo.svg';
import {
    Box,
    Button,
    Heading,
    Grommet,
    Menu,
    FormField,
    TextInput,
    Select,
    grommet,
    Grid,
    Text,
    Form,


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

const SidebarButton = ({ label, ...rest }) => (
    <Button plain {...rest}>
        {({ hover }) => (
            <Box
                background={hover ? "#DADADA" : undefined}
                pad={{ horizontal: "large", vertical: "medium" }}
            >
                <Text size="large">{label}</Text>
            </Box>
        )}
    </Button>
);

const SidebarButtons = () => {
    const [active, setActive] = useState();
    return (
        <Grommet full theme={theme}>
            <Box fill direction="row">
                <Box background="brand">
                    {["Appointments", "View Patients", "Settings", "Sign Out"].map(label => (
                        <SidebarButton
                            key={label}
                            label={label}
                            active={label === active}
                            onClick={() => {
                                if (label === "Appointments") {
                                    window.location = "/ApptList"
                                }
                                else if (label === "Sign Out") {
                                    fetch("http://localhost:3001/endSession");
                                    window.location = "/"
                                }
                                else if (label === "Settings") {
                                    window.location = "/DocSettings"
                                }
                                else if (label === "View Patients") {
                                    window.location = "/MedHistView"
                                }
                                setActive(label);
                            }}
                        />
                    ))}
                </Box>
            </Box>
        </Grommet>
    );
};

export class DocHome extends Component {


    state = { medhiststate: [] }

    componentDidMount() {

        this.getNames("");
        console.log(this.state.names);
    }

    getNames(value) {
        let patName = value;
        console.log(patName);
        fetch('http://localhost:3001/MedHistView?name=' + patName + '&variable=words')
            .then(res => res.json())
            .then(res => this.setState({ medhiststate: res.data }));
    }

    render() {
        const { medhiststate } = this.state;

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
                <Heading level={3} margin='none'>
                    <strong>WeCare</strong>
                </Heading>

            </Box>
        );

        const Body = () => (
            <div className="container">
                <div className="panel panel-default p50 uth-panel">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {medhiststate.map(patient =>
                                <tr key={patient.id}>
                                    <td>{patient.Name} </td>
                                    <td>{patient.UID}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

        );

        return (
            <Grommet full={true}
                theme={theme}>
                <Box align="left">
                    <Header />
                    <Grid
                        fill
                        rows={['auto', 'flex']}
                        columns={['auto', 'flex']}
                        areas={[
                            { name: 'sidebar', start: [0, 1], end: [0, 1] },
                            { name: 'main', start: [1, 1], end: [1, 1] },
                        ]}>
                        <Box
                            gridArea="sidebar"
                            width="small"
                            animation={[
                                { type: 'fadeIn', duration: 300 },
                                { type: 'slideRight', size: 'xlarge', duration: 150 },
                            ]}
                        >
                            <SidebarButtons />
                        </Box>
                        <Box
                            gridArea="main"
                            justify="top"
                            align="center">
                            <Box align="center" pad="large">
                                <img
                                    height="100"
                                    width="100"
                                    src={require('./img/Asset 3.png')} />
                                <Heading
                                    color="#00739D">Welcome, doc.
                                </Heading>
                            </Box>
                        </Box>
                    </Grid>




                </Box>
            </Grommet>
        );




    }
}

export default DocHome;