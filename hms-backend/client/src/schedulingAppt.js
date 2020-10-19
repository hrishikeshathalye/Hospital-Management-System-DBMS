import { grommet } from "grommet/themes";


import React, { Component, Image, StyleSheet, useState } from 'react';
import {
  FormClose,
  Notification,
  FormDown,
  Schedule,
} from 'grommet-icons';

import logo from './logo.svg';

import {
  Collapsible,
  Layer,
  Grid,
  ResponsiveContext,
  Box,
  Button,
  Heading,
  Menu,
  FormField,
  Form,
  TextInput,
  Select,
  Text,
  RadioButtonGroup,
  TextArea,
  RangeInput,
  Grommet,
  Calendar,
  DropButton,
  MaskedInput,
  Keyboard,

} from 'grommet';

import './App.css';
import backdrop from './img/hmsbackdrop.jpg'

const theme = {
  global: {
    colors: {
      brand: '#00739D',
      focus: "#00739D",
      active: "#00739D",
    },
    font: {
      family: 'Lato',
    },
  },
};

var theDate;
var theTime;
var endTime;
var theConcerns;
var theSymptoms;

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    //elevation='medium'
    style={{ zIndex: '1' }}
    {...props} />
);

const DropContent = ({ date: initialDate, time: initialTime, onClose }) => {
  const [date, setDate] = React.useState();
  const [time, setTime] = React.useState();

  const close = () => {
    theDate = date;
    theTime = time;

    //time is string, store it as [hour, min]
    let parsedTime = theTime.split(":");

    //parse hr string to in and add one hour to start hour
    let startHour = parseInt(parsedTime[0], 10);
    let endHour = startHour + 1;

    //rejoin into string
    endTime = `${endHour}:00`;

    console.log(endTime);
    console.log(theDate);
    console.log(theTime);
    onClose(date || initialDate, time || initialTime);
  };

  return (
    <Box align="center">
      <Calendar
        animate={false}
        date={date || initialDate}
        onSelect={setDate}
        showAdjacentDays={false}
        required
      />
      <Box flex={false} pad="medium" gap="small">
        <Keyboard
          required
          onEnter={event => {
            event.preventDefault(); // so drop doesn't re-open
            close();
          }}
        >
          <MaskedInput
            mask={[
              {
                length: [1, 2],
                options: [
                  "0",
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "10",
                  "11",
                  "12",
                  "13",
                  "14",
                  "15",
                  "16",
                  "17",
                  "18",
                  "19",
                  "20",
                  "21",
                  "22",
                  "23",

                ],
                regexp: /^1[1-2]$|^[0-9]$/,
                placeholder: "hh"
              },
              { fixed: ":" },
              {
                length: 2,
                options: ["00"],
                regexp: /^[0-5][0-9]$|^[0-9]$/,
                placeholder: "mm"
              }
              // ,
              // { fixed: " " },
              // {
              //   length: 2,
              //   options: ["am", "pm"],
              //   regexp: /^[ap]m$|^[AP]M$|^[aApP]$/,
              //   placeholder: "ap"
              // }
            ]}
            value={time || initialTime}
            name="maskedInput"
            onChange={event => setTime(event.target.value)}
            required
          />
        </Keyboard>
        <Box flex={false}>
          <Button label="Done" onClick={close} color="#00739D" />
        </Box>
      </Box>
    </Box>
  );
};

const DateTimeDropButton = () => {
  const [date, setDate] = React.useState();
  const [time, setTime] = React.useState("");
  const [open, setOpen] = React.useState();

  const onClose = (nextDate, nextTime) => {
    setDate(nextDate);
    setTime(nextTime);
    setOpen(false);
    setTimeout(() => setOpen(undefined), 1);
  };

  return (
    <Grommet theme={theme}>
      <Box align="center" pad="large">
        <DropButton
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          dropContent={
            <DropContent date={date} time={time} onClose={onClose} />
          }
        >
          <Box direction="row" gap="small" align="center" pad="small">
            <Text color={date ? undefined : "dark-5"}>
              {date
                ? `${new Date(date).toLocaleDateString()} ${time}`
                : "Select date & time"}
            </Text>
            <Schedule />
          </Box>
        </DropButton>
      </Box>
    </Grommet>
  );
};

const ConcernsTextArea = () => {
  const [value, setValue] = React.useState("");

  const onChange = event => {
    setValue(event.target.value);
    theConcerns = value;
  };

  return (
    <Grommet theme={theme}>
      <Box
        width="medium"
        height="xsmall"
        border={{ color: "brand", size: "small" }}
      >
        <TextArea
          placeholder="Enter your concerns..."
          value={value}
          onChange={onChange}
          fill
          required />
      </Box>
    </Grommet>
  );
};

const SymptomsTextArea = () => {
  const [value, setValue] = React.useState("");

  const onChange = event => {
    setValue(event.target.value);
    theSymptoms = value;
  };

  return (
    <Grommet theme={theme}>
      <Box
        width="medium"
        height="xsmall"
        border={{ color: "brand", size: "small" }}
      >
        <TextArea
          placeholder="Enter your symptoms..."
          value={value}
          onChange={onChange} fill
          required />
      </Box>
    </Grommet>
  );
};

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};


export class SchedulingAppt extends Component {
  constuctor() {

  }


  render() {
    return (
      <Grommet theme={theme} full>
        <AppBar>
          <Heading level='3' margin='none'>WeCare</Heading>
        </AppBar>
        <Box align="center" pad="small" gap="small">
          <Form
            onSubmit={({ value }) => {
              console.log("hi");
              console.log(theTime);
              console.log(theDate);
              console.log(theConcerns);
              console.log(theSymptoms);
              console.log("no");
              //probably fetch uid here, add one

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
                  fetch("http://localhost:3001/checkIfApptExists?email=" + email_in_use + "&startTime=" + theTime + "&date=" + theDate)
                    .then(res => res.json())
                    .then(res => {
                      if ((res.data[0])) {
                        window.alert("You've already scheduled an appointment at this time.");
                      } else {
                        fetch("http://localhost:3001/genApptUID")
                          .then(res => res.json())
                          .then(res => {
                            var string_json = JSON.stringify(res);
                            var uid_json = JSON.parse(string_json);
                            let gen_uid = uid_json.uid;
                            console.log(gen_uid);
                            fetch("http://localhost:3001/schedule?time=" + theTime + "&endTime=" + endTime +
                              "&date=" + theDate + "&concerns=" + theConcerns + "&symptoms=" + theSymptoms + "&uid=" + gen_uid);
                            fetch("http://localhost:3001/addToPatientSeeAppt?email=" + email_in_use + "&uid=" + gen_uid +
                              "&concerns=" + theConcerns + "&symptoms=" + theSymptoms);
                            window.alert("Appointment successfully scheduled!");
                            //window.location = "/PatientsViewAppt";
                          });



                      }
                    });
                });


            }}
          >
            <DateTimeDropButton>
            </DateTimeDropButton>
            <ConcernsTextArea>
            </ConcernsTextArea>
            <SymptomsTextArea>
            </SymptomsTextArea>

            <Button
              label="attempt to schedule"
              type="submit"
              primary
            />

          </Form>
        </Box>


      </Grommet>
    );
  }
}

export default SchedulingAppt;