import React, { Component, Image, StyleSheet, Link } from 'react';
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
    Form

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

export class DocViewAppt extends Component {


    state = { apptlist: [] }

    componentDidMount() {
        this.getNames();
      
    }

    getNames() {
        
        fetch('http://localhost:3001/doctorviewappt')
        .then(res => res.json())
        .then(res => this.setState({ apptlist: res.data }));
    }

    render() {
        const { apptlist } = this.state;

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
                                <th>ID</th>
                                <th>name</th>
                                <th>date</th>
                                <th>start time</th>
                                <th>concerns</th>
                                <th>symptoms</th>
                                <th>status</th>

                            </tr>
                        </thead>
                        <tbody>
                            {apptlist.map(appt =>
                                <tr key={appt.name}>
                                    <td>{appt.uid}</td>
                                    <td>{appt.name}</td>
                                    <td>{appt.date.substring(0,10)} </td>
                                    <td>{appt.starttime}</td>
                                    <td>{appt.concerns}</td>
                                    <td>{appt.symptoms}</td>
                                    <td>{appt.status}</td>
                                   {/*  <td>
                                        <Button label="Add"></Button>
                                   </td>*/}
                                    <td>
                                        <Button label="Delete"
                                        onClick = {() => {
                                            fetch('http://localhost:3001/deleteAppt?uid='+ appt.uid)
                                            .then(res => res.json())
                                            

                                        }}
                                        ></Button>
                                        
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
            theme = {theme}>
                <Header />
                <Box fill={true}>
                    

                    <Body />

                </Box>
            </Grommet>
        );




    }
}

export default DocViewAppt;