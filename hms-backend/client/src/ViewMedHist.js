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
export class ViewMedHist extends Component {
    
    state = { medhiststate: [] }

    componentDidMount() {
        this.getNames("");
        console.log(this.state.names);
    }

    getNames(value) {
        let patName = " ";
        if (value !== undefined)
            patName = value;
        console.log(patName);
        fetch('http://localhost:3001/MedHistView?name='+ patName + '&variable=words')
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
               <a style={{ color: 'inherit', textDecoration: 'inherit'}} href="/"><Heading level='3' margin='none'>HMS</Heading></a>

            </Box>
        );

        const Body = () => (
            <div className="container" style={{width:"100vw"}}>
                <div className="panel panel-default p50 uth-panel">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th style={{width:"50vw"}}>Name</th>
                                <th style={{width:"50vw"}}>Profile</th>
                            </tr>
                        </thead> 
                        <tbody>
                            {medhiststate.map(patient =>
                                <tr key={patient.id} style={{textAlign:"center"}}>
                                    <td>{patient.Name} </td>
                                    <td>
                                        <Button label="Medical Profile" href={'/ViewOneHistory/' + patient.email}/>
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
                <Box fill={true} align="center">
                    <Form
                        onSubmit={({ value }) => {
                            this.getNames(value.email);
                        }}>
                        <h4 style={{textAlign:"center", marginBottom:"0"}}>Search By Name</h4>
                        <FormField name="email" align="center" />
                        <div align="center">
                            <Button type="submit" primary label="Submit" />
                        </div>
                    </Form>
                    <Body />
                </Box>
            </Grommet>
        );
    }
}

export default ViewMedHist;