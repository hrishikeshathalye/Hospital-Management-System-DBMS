INSERT INTO Patient(email,password,name,address,gender)
VALUES
('imsosick@gmail.com','wowzers','Ai Minh Payne','1212 Twelve Rd, San Jose, CA', 'male'),
('pikachugrrl83@gmail.com','kentucky','King Kong','3151 Spam, Milpitas, CA', 'female'),
('SpamNRice@hotmail.com','nashville','Bert N. Ernie', '1000 Sesame Street', 'male'),
('jonisthebest@yahoo.com','ilovejon','Jon Jon', '2400 Jon Ct, Reno, CA', 'male'),
('lightning2456@gmail.com','kachow', 'Steve Mcqueen', '1111 Washington, Forks, WA', 'female'),
('honeybunches@gmail.com','OFOATS','Post Alone', '949 Wild Ave, San Francisco, CA', 'female'),
('thecia@us.gov', 'pass123', 'John Doe', '1234 Big Rd, Washington DC', 'male'),
('orangesherbert13@gmail.com', 'nodairy', 'Owen G. Herbert', '31313 Tigr, Krakow, Russia', 'male'),
('Wunderbar24@gmail.com','kalel','Hans Landa','5666 Hemmel, Berlin, Germany', 'male'),
('its2am@sjsu.edu','helpme','Kevin McCallister','1344 Yonkers, NYC, NY', 'male'),
('timeconsuming@sjsu.edu','dataentry','Andy M. Dunn','1441 Pringles, NY', 'male'),
('boris.dyokovic@ibm.com','bears4lyfe','Boris Dyokovic','555 Bailey Ave, San Jose, CA', 'male'),
('thewindu@sbcglobal.net','purpleflurp','Samson Jackwell','4554 Sandy Str, Milpitas, CA', 'male'),
('honkytonk66@gmail.com','CountryBoy','Monty Houston','4444 Sprout Ave, Nashville, NJ', 'female'),
('muyrapido55@gmail.com','notActually','Matt Murdock','9987 Trimball, Fremont, CA', 'male')
;

INSERT INTO MedicalHistory(id,date,conditions,surgeries,medication)
VALUES
(1,'19-01-14','Pain in abdomen,Asthma','Appendectomy','Albuterol'),
(2,'19-01-14','Frequent Indigestion','none','none'),
(3,'19-01-14','Inflamed throat','Wisdom teeth removal','Vicodin'),
(4,'19-01-14','Parkinsons','none','none'),
(5, '19-01-14','Pre-hypertension', 'none','Volomin'),
(6,'19-01-14', 'Fatigue', 'none','none'),
(7, '19-01-14','Paranoia/Anxiety','none','none'),
(8, '19-01-14','Food poisoning/indigestion','none','none'),
(9,'19-01-14', 'Overweight','none','none'),
(10,'19-01-14', 'Caffeine Withdrawal', 'Growth removal','Caffeine pills'),
(11,'19-01-14','Insomnia','none','Melatonin'),
(12,'19-01-14', 'Back pain', 'none','Ibuprofen'),
(13,'19-01-14', 'Eye pain', 'none','none'),
(14,'19-01-14', 'Splinters in right arm', 'none','none'),
(15,'19-01-14', 'Swollen face', 'none','Concerta');

INSERT INTO Doctor(email, gender, password, name)
VALUES
('Nick.Nolte@MetroGrand.gov', 'male', '123teehee', 'Nick Nolte'),
('SandyRaimi@MetroGrand.gov', 'female', 'yeehaw', 'Sandy Raimi'),
('Bob.Grundy@MetroGrand.gov', 'male', '123tee4', 'Bob Grundy'),
('Tanya.Hilton@MetroGrand.gov', 'female', '122hee', 'Tanya Hilton'),
('Sam.Worthington@MetroGrand.gov', 'male', 'avatar2021', 'Sam Worthington'),
('Winston.Johnson@MetroGrand.gov', 'male', 'banana', 'Winston Johnson'),
('Priya.Rajanpal@MetroGrand.gov', 'female', 'goodeats', 'Priya Rajanpal'),
('Lichiang.Yi@MetroGrand.gov', 'male', 'hk4vr', 'Li-Chiang Yi'),
('Weston.Thurston@MetroGrand.gov', 'male', 'easton', 'Weston Thurston'),
('Ignacio.Mundo@MetroGrand.gov', 'male', 'SUSHI4', 'Ignacio del Mundo'),
('Padma.Patil@MetroGrand.gov', 'female', 'harry', 'Padma Patil'),
('Remus.Lupin@MetroGrand.gov', 'male', 'lycanthrope', 'Remus Lupin'),
('Harry.Housen@MetroGrand.gov', 'male', 'googlybear', 'Harry Housen'),
('Tuco.Salamanca@MetroGrand.gov', 'male', 'tight', 'Tuco Salamanca'),
('Tommy.Gunn@MetroGrand.gov', 'male', 'thebest124134', 'Tommy Gunn')
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

INSERT INTO Appointment(id,date,starttime,endtime,status)
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

INSERT INTO PatientsAttendAppointments(patient,appt,concerns,symptoms)
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

INSERT INTO Schedule(id,starttime,endtime,breaktime,day)
VALUES
(001,'09:00','17:00','12:00','T'),
(001,'09:00','17:00','12:00','F'),
(001,'09:00','17:00','12:00','Sa'),
(001,'09:00','17:00','12:00','Su'),
(002,'09:00','17:00','12:00','W'),
(002,'09:00','17:00','12:00','F'),
(003,'09:00','17:00','12:00','Sa'),
(003,'09:00','17:00','12:00','Su'),
(004,'09:00','17:00','12:00','M'),
(004,'09:00','17:00','12:00','W'),
(005,'09:00','17:00','12:00','Th'),
(006,'09:00','17:00','12:00','W'),
(006,'09:00','17:00','12:00','T'),
(007,'09:00','17:00','12:00','T'),
(007,'09:00','17:00','12:00','Th'),
(008,'09:00','17:00','12:00','M'),
(009,'09:00','17:00','12:00','F'),
(010,'09:00','17:00','12:00','Sa'),
(011,'09:00','17:00','12:00','Th'),
(012,'09:00','17:00','12:00','F'),
(013,'09:00','17:00','12:00','M'),
(014,'09:00','17:00','12:00','Sa'),
(015,'09:00','17:00','12:00','Su')
;

INSERT INTO PatientsFillHistory(patient,history)
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

INSERT INTO Diagnose(appt,doctor,diagnosis,prescription)
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

INSERT INTO ApptsToSchedules(appt,sched)
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

INSERT INTO DoctorViewsHistory(history,doctor)
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

INSERT INTO ApptInRoom(room_num,floor,bldg,appt)
VALUES
('04','2', 'MG ER 2', 1),
('01','1', 'MG Academy', 2),
('06','2', 'MG Surgery', 3),
('05','2', 'MG Psychiatry', 4),
('01','3', 'MG Oncology', 5),
('04','2', 'MG Pediatrics', 6),
('04','1', 'MG Drug Rehab', 7),
('09','2', 'MG Clinic 2', 8),
('12','1', 'MG Clinic 1', 9),
('06','3', 'MG Clinic 3', 10),
('05','2', 'MG Clinic 2', 11),
('02','1', 'MG Clinic 1', 12),
('04','1', 'MG Pediatrics', 13),
('08','1', 'MG Oncology', 14),
('09','1', 'MG ER 2', 15)
;
