CREATE DATABASE HMS;
USE HMS;

CREATE TABLE Patient(
email varchar(50) PRIMARY KEY,
password varchar(30) NOT NULL,
name varchar(50) NOT NULL,
address varchar(60) NOT NULL,
gender VARCHAR(20) NOT NULL
);

CREATE TABLE MedicalHistory(
id int PRIMARY KEY,
date DATE NOT NULL,
conditions VARCHAR(100) NOT NULL, 
surgeries VARCHAR(100) NOT NULL, 
medication VARCHAR(100) NOT NULL
);

CREATE TABLE Doctor(
email varchar(50) PRIMARY KEY,
gender varchar(20) NOT NULL,
password varchar(30) NOT NULL,
name varchar(50) NOT NULL
);

CREATE TABLE Building(
name varchar(20) PRIMARY KEY,
address varchar(30) NOT NULL
);

CREATE TABLE Room(
room_num int NOT NULL,
floor int NOT NULL,
bldg varchar(20),
status varchar(20),
PRIMARY KEY (room_num, floor, bldg),
FOREIGN KEY (bldg) REFERENCES Building (name)
);

CREATE TABLE Appointment(
id int PRIMARY KEY,
date DATE NOT NULL,
starttime TIME NOT NULL,
endtime TIME NOT NULL,
status varchar(15) NOT NULL
);

CREATE TABLE PatientsAttendAppointments(
patient varchar(50) NOT NULL,
appt int NOT NULL,
concerns varchar(40) NOT NULL,
symptoms varchar(40) NOT NULL,
FOREIGN KEY (patient) REFERENCES Patient (email),
FOREIGN KEY (appt) REFERENCES Appointment (id),
PRIMARY KEY (patient, appt)
);

CREATE TABLE Schedule(
id int NOT NULL,
starttime TIME NOT NULL,
endtime TIME NOT NULL,
breaktime TIME NOT NULL,
day varchar(20) NOT NULL,
PRIMARY KEY (id, starttime, endtime, breaktime, day)
);

CREATE TABLE PatientsFillHistory(
patient varchar(50) NOT NULL,
history int NOT NULL,
FOREIGN KEY (patient) REFERENCES Patient (email),
FOREIGN KEY (history) REFERENCES MedicalHistory (id),
PRIMARY KEY (history)
);

CREATE TABLE Diagnose(
appt int NOT NULL,
doctor varchar(50) NOT NULL,
diagnosis varchar(40) NOT NULL,
prescription varchar(50) NOT NULL,
FOREIGN KEY (appt) REFERENCES Appointment (id),
FOREIGN KEY (doctor) REFERENCES Doctor (email),
PRIMARY KEY (appt, doctor)
);

CREATE TABLE ApptsToSchedules(
appt int NOT NULL,
sched int NOT NULL,
FOREIGN KEY (appt) REFERENCES Appointment (id),
FOREIGN KEY (sched) REFERENCES Schedule (id),
PRIMARY KEY (appt, sched)
);

CREATE TABLE DocsHaveSchedules(
sched int NOT NULL,
doctor varchar(50) NOT NULL,
FOREIGN KEY (sched) REFERENCES Schedule (id),
FOREIGN KEY (doctor) REFERENCES Doctor (email),
PRIMARY KEY (sched, doctor)
);

CREATE TABLE DoctorViewsHistory(
history int NOT NULL,
doctor varchar(50) NOT NULL,
FOREIGN KEY (doctor) REFERENCES Doctor (email),
FOREIGN KEY (history) REFERENCES MedicalHistory (id),
PRIMARY KEY (history, doctor)
);

CREATE TABLE ApptInRoom(
room_num int NOT NULL,
floor int NOT NULL,
bldg varchar(20),
appt int NOT NULL,
FOREIGN KEY (room_num, floor, bldg) REFERENCES Room (room_num, floor, bldg),
FOREIGN KEY (appt) REFERENCES Appointment (id)
);
