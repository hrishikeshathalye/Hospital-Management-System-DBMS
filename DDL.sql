CREATE DATABASE HMS;
USE wecare;
CREATE TABLE Patient(
email varchar(50) PRIMARY KEY,
password varchar(30) NOT NULL,
name varchar(50) NOT NULL,
address varchar(60) NOT NULL
);

CREATE TABLE MedicalHistory(
uid int PRIMARY KEY,
gender VARCHAR(20) NOT NULL, 
conditions VARCHAR(100) NOT NULL, 
surgeries VARCHAR(100) NOT NULL, 
medication VARCHAR(100) NOT NULL
);

CREATE TABLE DoctorNurse(
email varchar(50) PRIMARY KEY,
gender varchar(20) NOT NULL,
password varchar(30) NOT NULL,
uid int UNIQUE NOT NULL,
name varchar(50) NOT NULL
);

CREATE TABLE Building(
name varchar(20) PRIMARY KEY,
address varchar(30) NOT NULL
);

CREATE TABLE Room(
id int AUTO_INCREMENT PRIMARY KEY,
room_num int NOT NULL,
floor int NOT NULL,
bldg varchar(20),
UNIQUE (room_num, floor, bldg),
status varchar(20),
FOREIGN KEY (bldg) REFERENCES Building (name)
);

CREATE TABLE Appointment(
uid int PRIMARY KEY,
date DATE NOT NULL,
starttime TIME NOT NULL,
endtime TIME NOT NULL,
status varchar(15) NOT NULL
);

CREATE TABLE PatientsSeeAppointments(
patient varchar(50) NOT NULL,
appt int NOT NULL,
concerns varchar(40) NOT NULL,
symptoms varchar(40) NOT NULL,
FOREIGN KEY (patient) REFERENCES Patient (email),
FOREIGN KEY (appt) REFERENCES Appointment (uid)
);


CREATE TABLE Schedule(
uid int PRIMARY KEY,
starttime TIME NOT NULL,
endtime TIME NOT NULL,
breaktime TIME NOT NULL,
daysOff varchar(20)
);

CREATE TABLE PatientsfillHistory(
patient varchar(50) NOT NULL,
medhistory int NOT NULL,
UNIQUE (patient),
UNIQUE (medhistory),
FOREIGN KEY (patient) REFERENCES Patient (email),
FOREIGN KEY (medhistory) REFERENCES MedicalHistory (uid)
);

CREATE TABLE Diagnose(
appt int NOT NULL,
doctor varchar(50) NOT NULL,
diagnosis varchar(40) NOT NULL,
prescription varchar(50) NOT NULL,
FOREIGN KEY (appt) REFERENCES Appointment (uid),
FOREIGN KEY (doctor) REFERENCES DoctorNurse (email)
);

CREATE TABLE ApptsToSchedules(
appt int NOT NULL,
sched int NOT NULL,
FOREIGN KEY (appt) REFERENCES Appointment (uid),
FOREIGN KEY (sched) REFERENCES Schedule (uid)
);

CREATE TABLE DocsHaveSchedules(
sched int NOT NULL,
doctor varchar(50) NOT NULL,
FOREIGN KEY (sched) REFERENCES Schedule (uid),
FOREIGN KEY (doctor) REFERENCES DoctorNurse (email)
);

CREATE TABLE DoctorViewsHistory(
medhistory int NOT NULL,
doctor varchar(50) NOT NULL,
FOREIGN KEY (doctor) REFERENCES DoctorNurse (email),
FOREIGN KEY (medhistory) REFERENCES MedicalHistory (uid)
);

CREATE TABLE ApptInRoom(
room int NOT NULL,
appt int NOT NULL,
FOREIGN KEY (room) REFERENCES Room (id),
FOREIGN KEY (appt) REFERENCES Appointment (uid)
);

CREATE TABLE Allergy(
medHistory int NOT NULL,
allergy VARCHAR(20) NOT NULL,
FOREIGN KEY (medHistory) REFERENCES MedicalHistory (uid)
);


######### Table Fill ###########

INSERT INTO Patient(email,password,name,address)
VALUES
('imsosick@gmail.com','wowzers','Ai Minh Payne','1212 Twelve Rd, San Jose, CA'),
('pikachugrrl83@gmail.com','kentucky','King Kong','3151 Spam, Milpitas, CA'),
('SpamNRice@hotmail.com','nashville','Bert N. Ernie', '1000 Sesame Street'),
('jonisthebest@yahoo.com','ilovejon','Jon Jon', '2400 Jon Ct, Reno, CA'),
('lightning2456@gmail.com','kachow', 'Steve Mcqueen', '1111 Washington, Forks, WA'),
('honeybunches@gmail.com','OFOATS','Post Alone', '949 Wild Ave, San Francisco, CA'),
('thecia@us.gov', 'pass123', 'John Doe', '1234 Big Rd, Washington DC'),
('orangesherbert13@gmail.com', 'nodairy', 'Owen G. Herbert', '31313 Tigr, Krakow, Russia'),
('Wunderbar24@gmail.com','kalel','Hans Landa','5666 Hemmel, Berlin, Germany'),
('its2am@sjsu.edu','helpme','Kevin McCallister','1344 Yonkers, NYC, NY'),
('timeconsuming@sjsu.edu','dataentry','Andy M. Dunn','1441 Pringles, NY'),
('boris.dyokovic@ibm.com','bears4lyfe','Boris Dyokovic','555 Bailey Ave, San Jose, CA'),
('thewindu@sbcglobal.net','purpleflurp','Samson Jackwell','4554 Sandy Str, Milpitas, CA'),
('honkytonk66@gmail.com','CountryBoy','Monty Houston','4444 Sprout Ave, Nashville, NJ'),
('muyrapido55@gmail.com','notActually','Matt Murdock','9987 Trimball, Fremont, CA');

INSERT INTO MedicalHistory(uid,gender,conditions,surgeries,medication)
VALUES
(1,'male','Pain in abdomen,Asthma','Appendectomy','Albuterol'),
(2,'female','Frequent Indigestion','none','none'),
(3,'male','Inflamed throat','Wisdom teeth removal','Vicodin'),
(4, 'male','Parkinsons','none','none'),
(5, 'female', 'Pre-hypertension', 'none','Volomin'),
(6, 'female', 'Fatigue', 'none','none'),
(7, 'male', 'Paranoia/Anxiety','none','none'),
(8, 'male', 'Food poisoning/indigestion','none','none'),
(9, 'male', 'Overweight','none','none'),
(10, 'male', 'Caffeine Withdrawal', 'Growth removal','Caffeine pills'),
(11, 'male','Insomnia','none','Melatonin'),
(12, 'male', 'Back pain', 'none','Ibuprofen'),
(13, 'male', 'Eye pain', 'none','none'),
(14, 'female', 'Splinters in right arm', 'none','none'),
(15, 'male', 'Swollen face', 'none','Concerta');

INSERT INTO Appointment(uid,date,starttime,endtime,status)
VALUES
(1, '19-01-14', '07:30', '09:00', 'Done'),
(2, '19-05-30', '09:00', '12:00', 'Done'),
(3, '19-04-10', '09:00', '12:00', 'Done'),
(4, '19-10-31', '07:00', '12:00', 'NotDone'),
(5, '19-11-11', '09:00', '12:00', 'NotDone'),
(6, '20-01-11', '08:30', '11:00', 'NotDone'),
(7, '20-03-26', '14:00', '17:00', 'NotDone'),
(8, '19-11-23', '09:00', '12:00', 'NotDone'),
(9, '19-08-10', '10:00', '11:00', 'Done'),
(10, '19-09-09', '12:00', '13:00', 'Done'),
(11, '20-02-04', '14:00', '16:00', 'NotDone'),
(12, '18-08-24', '09:00', '12:00', 'Done'),
(13, '19-04-14', '09:00', '12:00', 'Done'),
(14, '16-10-14', '18:00', '19:00', 'Done'),
(15, '19-03-19', '09:00', '12:00', 'Done')
;

INSERT INTO Building(name,address)
VALUES
('MG Surgery', '1100 Main Street, San Jose, CA'),
('MG Clinic 1', '1101 Main Street, San Jose, CA'),
('MG Clinic 2', '1102 Main Street, San Jose, CA'),
('MG Clinic 3', '1103 Main Street, San Jose, CA'),
('MG Clinic 4', '1104 Main Street, San Jose, CA'),
('MG ER', '1105 Main Street, San Jose, CA'),
('MG PT Clinic', '1106 Main Street, San Jose, CA'),
('MG Pediatrics', '1107 Main Street, San Jose, CA'),
('MG Surgery 2', '1108 Main Street, San Jose, CA'),
('MG ER 2', '1109 Main Street, San Jose, CA'),
('MG Academy', '1110 Main Street, San Jose, CA'),
('MG Drug Rehab', '1100 Main Street, San Jose, CA'),
('MG Clinic 5', '1111 Main Street, San Jose, CA'),
('MG Psychiatry', '1112 Main Street, San Jose, CA'),
('MG Oncology', '1113 Main Street, San Jose, CA')
;

INSERT INTO Room(room_num,floor,bldg,status)
VALUES
('04','2', 'MG ER 2', '1'),
('01','1', 'MG Academy', '1'),
('06','2', 'MG Surgery', '1'),
('05','2', 'MG Psychiatry', '1'),
('01','3', 'MG Oncology', '1'),
('04','2', 'MG Pediatrics', '1'),
('04','1', 'MG Drug Rehab', '1'),
('09','2', 'MG Clinic 2', '1'),
('12','1', 'MG Clinic 1', '1'),
('06','3', 'MG Clinic 3', '1'),
('05','2', 'MG Clinic 2', '1'),
('02','1', 'MG Clinic 1', '1'),
('04','1', 'MG Pediatrics', '1'),
('08','1', 'MG Oncology', '1'),
('09','1', 'MG ER 2', '1')
;

INSERT INTO DoctorNurse(email, gender, password, uid, name)
VALUES
('Nick.Nolte@MetroGrand.gov', 'male', '123teehee', 99001, 'Nick Nolte'),
('SandyRaimi@MetroGrand.gov', 'female', 'yeehaw', 99002, 'Sandy Raimi'),
('Bob.Grundy@MetroGrand.gov', 'male', '123tee4', 99003, 'Bob Grundy'),
('Tanya.Hilton@MetroGrand.gov', 'female', '122hee', 99004, 'Tanya Hilton'),
('Sam.Worthington@MetroGrand.gov', 'male', 'avatar2021', 99005, 'Sam Worthington'),
('Winston.Johnson@MetroGrand.gov', 'male', 'banana', 99006, 'Winston Johnson'),
('Priya.Rajanpal@MetroGrand.gov', 'female', 'goodeats', 99007, 'Priya Rajanpal'),
('Lichiang.Yi@MetroGrand.gov', 'male', 'hk4vr', 99008, 'Li-Chiang Yi'),
('Weston.Thurston@MetroGrand.gov', 'male', 'easton', 99009, 'Weston Thurston'),
('Ignacio.Mundo@MetroGrand.gov', 'male', 'SUSHI4', 99010, 'Ignacio del Mundo'),
('Padma.Patil@MetroGrand.gov', 'female', 'harry', 99011, 'Padma Patil'),
('Remus.Lupin@MetroGrand.gov', 'male', 'lycanthrope', 99012, 'Remus Lupin'),
('Harry.Housen@MetroGrand.gov', 'male', 'googlybear', 99013, 'Harry Housen'),
('Tuco.Salamanca@MetroGrand.gov', 'male', 'tight', 99014, 'Tuco Salamanca'),
('Tommy.Gunn@MetroGrand.gov', 'male', 'thebest124134', 99015, 'Tommy Gunn')
;

INSERT INTO Schedule(uid,starttime,endtime,breaktime,daysOff)
VALUES
(001,'09:00','17:00','12:00','MWTh'),
(002,'09:00','17:00','12:00','WF'),
(003,'09:00','17:00','12:00','SaSu'),
(004,'09:00','17:00','12:00','MW'),
(005,'09:00','17:00','12:00','Th'),
(006,'09:00','17:00','12:00','WTh'),
(007,'09:00','17:00','12:00','TTh'),
(008,'09:00','17:00','12:00','MTTh'),
(009,'09:00','17:00','12:00','MF'),
(010,'09:00','17:00','12:00','FSa'),
(011,'09:00','17:00','12:00','TTh'),
(012,'09:00','17:00','12:00','TThF'),
(013,'09:00','17:00','12:00','MW'),
(014,'09:00','17:00','12:00','Sa'),
(015,'09:00','17:00','12:00','Su')
;

INSERT INTO PatientsFillHistory(patient,medhistory)
VALUES
('imsosick@gmail.com',1),
('pikachugrrl83@gmail.com',2),
('SpamNRice@hotmail.com',3),
('jonisthebest@yahoo.com',4),
('lightning2456@gmail.com',5),
('honeybunches@gmail.com',6),
('thecia@us.gov',7),
('orangesherbert13@gmail.com',8),
('Wunderbar24@gmail.com',9),
('its2am@sjsu.edu',10),
('timeconsuming@sjsu.edu',11),
('boris.dyokovic@ibm.com',12),
('thewindu@sbcglobal.net',13),
('honkytonk66@gmail.com',14),
('muyrapido55@gmail.com',15)
;

INSERT INTO ApptInRoom(room,appt)
VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),
(11, 11),
(12, 12),
(13, 13),
(14, 14),
(15, 15)
;

INSERT INTO diagnose(appt,doctor,diagnosis,prescription)
VALUES
(1,'Nick.Nolte@MetroGrand.gov', 'Major bloating due to allergy', 'Ibuprofen as needed'),
(2, 'SandyRaimi@MetroGrand.gov', 'Muscle tightness/soreness', 'Stretch morning/night and before workouts'),
(3, 'Bob.Grundy@MetroGrand.gov', 'Prehypertension', 'Heart Medication'),
(4,'Tanya.Hilton@MetroGrand.gov','Osteoarthritis', 'none'),
(5,'Sam.Worthington@MetroGrand.gov', 'Heartburn', 'Heartburn medication'),
(6,'Winston.Johnson@MetroGrand.gov', 'Obesity', 'none'),
(7, 'Priya.Rajanpal@MetroGrand.gov', 'Atherosclerosis', 'See nutritionist'),
(8,'Lichiang.Yi@MetroGrand.gov', 'Allergic Reaction to Dairy', 'none'),
(9, 'Weston.Thurston@MetroGrand.gov', 'Shin Splints', 'See: PT'),
(10, 'Ignacio.Mundo@MetroGrand.gov', 'Caffeine Withdrawal', 'Caffeine pills, wean off'),
(11, 'Padma.Patil@MetroGrand.gov', 'Insomnia', 'Melatonin'),
(12, 'Remus.Lupin@MetroGrand.gov', 'Anxiety', 'See Psych'),
(13, 'Harry.Housen@MetroGrand.gov', 'Cancer', 'See Oncologist'),
(14, 'Tuco.Salamanca@MetroGrand.gov', 'Whooping cough', 'none'),
(15, 'Tommy.Gunn@MetroGrand.gov', 'Shoulder Impingement', 'See PT')
;

INSERT INTO apptstoschedules(appt,sched)
VALUES
(1,001),
(2,002),
(3,003),
(4,004),
(5,005),
(6,006),
(7,007),
(8,008),
(9,009),
(10,010),
(11,011),
(12,012),
(13,013),
(14,014),
(15,015)
;

INSERT INTO DocsHaveSchedules(sched,doctor)
VALUES
(001,'Nick.Nolte@MetroGrand.gov'),
(002,'SandyRaimi@MetroGrand.gov'),
(003,'Bob.Grundy@MetroGrand.gov'),
(004,'Tanya.Hilton@MetroGrand.gov'),
(005,'Sam.Worthington@MetroGrand.gov'),
(006,'Winston.Johnson@MetroGrand.gov'),
(007,'Priya.Rajanpal@MetroGrand.gov'),
(008,'Lichiang.Yi@MetroGrand.gov'),
(009,'Weston.Thurston@MetroGrand.gov'),
(010,'Ignacio.Mundo@MetroGrand.gov'),
(011,'Padma.Patil@MetroGrand.gov'),
(012,'Remus.Lupin@MetroGrand.gov'),
(013,'Harry.Housen@MetroGrand.gov'),
(014,'Tuco.Salamanca@MetroGrand.gov'),
(015,'Tommy.Gunn@MetroGrand.gov')
;

INSERT INTO DoctorViewsHistory(medhistory,doctor)
VALUES
(1,'Nick.Nolte@MetroGrand.gov' )     ,
(2,'SandyRaimi@MetroGrand.gov'      ),
(3,'Bob.Grundy@MetroGrand.gov'      ),
(4,'Tanya.Hilton@MetroGrand.gov'    ),
(5,'Sam.Worthington@MetroGrand.gov' ),
(6,'Winston.Johnson@MetroGrand.gov' ),
(7,'Priya.Rajanpal@MetroGrand.gov'  ),
(8,'Lichiang.Yi@MetroGrand.gov'     ),
(9,'Weston.Thurston@MetroGrand.gov' ),
(10,'Ignacio.Mundo@MetroGrand.gov'   ),
(11,'Padma.Patil@MetroGrand.gov'     ),
(12,'Remus.Lupin@MetroGrand.gov'    ) ,
(13,'Harry.Housen@MetroGrand.gov'  )  ,
(14,'Tuco.Salamanca@MetroGrand.gov')  ,
(15,'Tommy.Gunn@MetroGrand.gov')
;

INSERT INTO PatientsSeeAppointments(patient,appt,concerns,symptoms)
VALUES
('imsosick@gmail.com',1, 'none', 'itchy throat'),
('pikachugrrl83@gmail.com',2, 'infection', 'fever'),
('SpamNRice@hotmail.com',3, 'none','none'),
('jonisthebest@yahoo.com',4,'none','none'),
('lightning2456@gmail.com',5,'none','itchy palms'),
('honeybunches@gmail.com',6,'none','heat risk'),
('thecia@us.gov',7, 'new Diet', 'none'),
('orangesherbert13@gmail.com',8, 'medical question','none'),
('Wunderbar24@gmail.com',9,'birth control', 'none'),
('its2am@sjsu.edu',10,'allergy to latex', 'hard to breathe'),
('timeconsuming@sjsu.edu',11, 'none', 'none'),
('boris.dyokovic@ibm.com',12, 'Acne out of control', 'acne'),
('thewindu@sbcglobal.net',13, 'none', 'none'),
('honkytonk66@gmail.com',14, 'weight', 'Cant stop eating'),
('muyrapido55@gmail.com',15, 'addiction', 'itchiness, irritability')
;
