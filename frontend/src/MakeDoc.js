import React, { Component} from 'react';

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

const theme = {
    global: {
        colors: {
            brand: '#000000',
            focus: "#000000",
            active: "#000000",
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

export class MakeDoc extends Component {
    constuctor() {
    }
    render() {
        return (
            <Grommet theme={theme} full>
                <AppBar>
                <a style={{ color: 'inherit', textDecoration: 'inherit'}} href="/"><Heading level='3' margin='none'>HMS</Heading></a>
                </AppBar>
                <Box fill align="center" justify="top">
                    <Box width="medium">
                    <Text color = "#AAAAAA">Регистрационная форма для врачей:</Text>
                        <Form
                            onReset={event => console.log(event)}
                            method="post"
                            onSubmit={({ value }) => {
                                console.log("Submit", value);
                                console.log(value.email)
                                fetch("http://localhost:3001/checkIfDocExists?email=" + value.email)
                                    .then(res => res.json())
                                    .then(res => {
                                        console.log(res.data[0]);
                                        if ((res.data[0])) {
                                            window.alert("A doctor is already associated with that email.");
                                            console.log("no user found");
                                        } else {
                                            fetch("http://localhost:3001/makeDocAccount?name=" + value.firstName + "&lastname=" + value.lastName + "&email=" + value.email
                                                + "&password=" + value.password + "&gender=" + value.gender + "&schedule=" + value.schedule);
                                            window.location = "/DocHome";
                                        }
                                    });
                            }} >
                            <FormField
                                label="Имя"
                                name="firstName"
                                required
                                placeholder="Пожалуйста, введите своё имя."
                                validate={{ regexp: /^[a-z]/i }} />
                            <FormField
                                label="Фамилия"
                                name="lastName"
                                required
                                placeholder="Пожалуйста, введите свою фамилию."
                                validate={{ regexp: /^[a-z]/i }} />
                            <FormField
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="Пожалуйста, введите свой адрес электронной почты."
                                required />
                            <FormField
                                label="Номер расписания"
                                name="schedule"
                                placeholder="Пожалуйста, введите номер расписания"
                                required />
                            <FormField
                                label="Пол"
                                name="gender"
                                placeholder="Мужчина или Женщина"
                                required />
                            <FormField
                                label="Пароль"
                                name="password"
                                required
                                placeholder="Пожалуйста, введите свой пароль."
                                validate={{ regexp: /^(?=.{8,})(?=.*[0-9]{2})/, message: "@ least 8 characters containing 2 digits" }} />
                            <Box direction="row" align="center" >
                                <Button
                                    style={{ textAlign: 'center' }}
                                    label="Отмена"
                                    fill="horizontal"
                                    href="/" />
                                <Button
                                    label="Зарегистрироваться"
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