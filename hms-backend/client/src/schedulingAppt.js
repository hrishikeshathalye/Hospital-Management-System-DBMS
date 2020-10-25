import React, { Component, useState, useEffect } from 'react';
import {
  Schedule,
} from 'grommet-icons';
import {
  Box,
  Button,
  Heading,
  Form,
  Text,
  TextArea,
  Grommet,
  Calendar,
  DropButton,
  MaskedInput,
  Keyboard,
  Select
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
var theDate;
var theTime;
var endTime;
var theConcerns;
var theSymptoms;
var theDoc;
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
    console.log(theDate)
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
    theConcerns = event.target.value;
  };

  return (
    <Grommet theme={theme}>
      <Box
        width="medium"
        height="xsmall"
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
    theSymptoms = event.target.value;
  };

  return (
    <Grommet theme={theme}>
      <Box
        width="medium"
        height="xsmall"
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

function DoctorsDropdown() {
  const [value, setValue] = useState();
  const [doctorsList, setList] = useState([]);
  useEffect(() => {    
    fetch("http://localhost:3001/docInfo")
    .then(res => res.json())
    .then(res => {
      let arr = []
      res.data.forEach(i => {
        let tmp = `${i.name} (${i.email})`;
        arr.push(tmp);
      });
      setList(arr);
    });
  }, []);
  const onChange = event => {
    setValue(event.value);
    let doc = event.value.match(/\((.*)\)/)[1];
    theDoc = doc;
  };
  return (
    <Select
      options={doctorsList}
      value={value}
      placeholder="Select Doctor"
      onChange={onChange} fill
      required
    />
  );
}

export class SchedulingAppt extends Component {
  constuctor() {
  }
  render() {
    return (
      <Grommet theme={theme} full>
        <AppBar>
        <a style={{ color: 'inherit', textDecoration: 'inherit'}} href="/"><Heading level='3' margin='none'>HMS</Heading></a>
        </AppBar>
        <Box align="center" pad="small" gap="small">
          <Form
            onSubmit={({ value }) => {
              //probably fetch uid here, add one
              fetch("http://localhost:3001/userInSession")
                .then(res => res.json())
                .then(res => {
                  var string_json = JSON.stringify(res);
                  var email_json = JSON.parse(string_json);
                  let email_in_use = email_json.email;
                  fetch("http://localhost:3001/checkIfApptExists?email=" + email_in_use + "&startTime=" + theTime + "&date=" + theDate + "&docEmail=" + theDoc)
                    .then(res => res.json())
                    .then(res => {
                      if ((res.data[0])) {
                        window.alert("Appointment Clash! Try another doctor or date/time");
                      } else {
                        fetch("http://localhost:3001/genApptUID")
                          .then(res => res.json())
                          .then(res => {
                            var string_json = JSON.stringify(res);
                            var uid_json = JSON.parse(string_json);
                            let gen_uid = uid_json.id;
                            console.log(gen_uid);
                            fetch("http://localhost:3001/schedule?time=" + theTime + "&endTime=" + endTime +
                              "&date=" + theDate + "&concerns=" + theConcerns + "&symptoms=" + theSymptoms + 
                              "&id=" + gen_uid + "&doc=" + theDoc).then((x)=>{
                              fetch("http://localhost:3001/addToPatientSeeAppt?email=" + email_in_use + "&id=" + gen_uid +
                                "&concerns=" + theConcerns + "&symptoms=" + theSymptoms).then((x)=>{
                                  window.alert("Appointment successfully scheduled!");
                                });
                            })
                          });
                      }
                    });
                });
            }}
          >
            <Box align="center" gap="small">
              <DoctorsDropdown />
            </Box>
            <DateTimeDropButton>
            </DateTimeDropButton>
            <ConcernsTextArea />
            <br />
            <SymptomsTextArea />
            <br />
            <Box align="center" pad="small" gap="small">
              <Button
                label="Attempt To Schedule"
                type="submit"
                primary
              />
            </Box>
          </Form>
        </Box>
      </Grommet>
    );
  }
}
export default SchedulingAppt;