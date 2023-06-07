INSERT INTO Patient(email,password,name,address,gender)
VALUES
('patient1@gmail.com','patient1','Пациент1','Таганская 56', 'Мужчина'),
('patient2@gmail.com','patient2','Пациент2','Карла Маркса 84', 'Мужчина'),
('patient3@gmail.com','patient3','Пациент3','Малая Бонная 46', 'Женщина')
;

INSERT INTO MedicalHistory(id,date,conditions,surgeries,medication)
VALUES
(1,'19-04-23','Боль в животе','Операция на сердце','Но-шпа'),
(2,'19-04-23','Частое расстройство желудка','Нет','Нет'),
(3,'19-04-23','Боль в теле','Нет','Флебодиа')
;

INSERT INTO Doctor(email, gender, password, name)
VALUES
('doctor1@gmail.com', 'Мужчина', 'doctor1', 'Доктор1'),
('doctor2@gmail.com', 'Мужчина', 'doctor2', 'Доктор2')
;

INSERT INTO Appointment(id,date,starttime,endtime,status)
VALUES
(1, '20-04-23', '09:00', '10:00', 'Завершено'),
(2, '21-04-23', '10:00', '11:00', 'Завершено'),
(3, '22-04-23', '14:00', '15:00', 'Завершено')
;

INSERT INTO PatientsAttendAppointments(patient,appt,concerns,symptoms)
VALUES
('patient1@gmail.com',1, 'Нет', 'зуд в горле'),
('patient2@gmail.com',2, 'Инфекция', 'лихорадка'),
('patient3@gmail.com',3, 'тошнота', 'лихорадка')
;

INSERT INTO Schedule(id,starttime,endtime,breaktime,day)
VALUES
(001,'09:00','17:00','12:00','Вторник'),
(001,'09:00','17:00','12:00','Пятница'),
(001,'09:00','17:00','12:00','Суббота'),
(001,'09:00','17:00','12:00','Понедельник'),
(002,'09:00','17:00','12:00','Среда'),
(002,'09:00','17:00','12:00','Пятница')
;

INSERT INTO PatientsFillHistory(patient,history)
VALUES
('patient1@gmail.com', 1),
('patient2@gmail.com', 2),
('patient3@gmail.com', 3)
;

INSERT INTO Diagnose(appt,doctor,diagnosis,prescription)
VALUES
(1,'doctor1@gmail.com', 'Вздутие живота', 'Ибупрофен по мере необходимости'),
(2,'doctor2@gmail.com', 'Болезненность в мышцах', 'Растяжка утром/вечером'),
(3,'doctor2@gmail.com', 'Дефицит витаминов', 'Хорошая диета')
;

INSERT INTO DocsHaveSchedules(sched,doctor)
VALUES
(001,'doctor1@gmail.com'),
(002,'doctor2@gmail.com')
;

INSERT INTO DoctorViewsHistory(history,doctor)
VALUES
(1,'doctor1@gmail.com'),
(2,'doctor2@gmail.com'),
(3,'doctor2@gmail.com')
;
