import React, { Component, Image, StyleSheet } from 'react';
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
    Form,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHeader,
    TableRow,
    Text

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

export class NoMedHistFound extends Component {


    state = { medhiststate: [] }

    componentDidMount() {
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
                <div className="panel panel-default p50 uth-panel" >

                    <Heading alignSelf="center" textAlign="right" margin="large">        Please contact your previous healthcare provider to release your medical portfolio to your current provider.<br />
                    <i>We are excited to start the next chapter of your healthcare journey.</i></Heading>
                </div>
            </div>

        );


        return (
            <Grommet full={true} theme={theme}>
                <Box fill={true}>

                    

                    <Header />
                    <Body />

                </Box>
            </Grommet>
        );




    }
}

export default NoMedHistFound;