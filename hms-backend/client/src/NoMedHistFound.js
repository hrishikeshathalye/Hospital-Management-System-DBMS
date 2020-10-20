import React, { Component} from 'react';
import {
    Box,
    Heading,
    Grommet,
} from 'grommet';

import './App.css';

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
                    <strong>HMS</strong>
                </Heading>

            </Box>
        );
        const Body = () => (
            <div className="container">
                <div className="panel panel-default p50 uth-panel" >
                    <Heading alignSelf="center" textAlign="right" margin="large">Medical History Not Found<br /></Heading>
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