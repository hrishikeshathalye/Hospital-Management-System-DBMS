# Hosital-Management-System-DBMS
<b>Link</b> : https://github.com/hrishikeshathalye/Hospital-Management-System-DBMS

<pre>
Name: Hrishikesh Athalye
MIS: 111803154
Class : TY Comp Div 2
</pre>

Hospital Management System made for Sem 5 DBMS Course Project.<br>
Hospitals interact with a lot of people in a day and there are various activities involved in day to day operations of hospitals, for example booking of appointments, managing doctor schedules, managing patient diagnoses, managing medical histories of patients, etc. The aim of this project is to show how data related to these tasks can be made easier to manage using databases.

<b>Technologies Used:</b>
<pre>
Frontend : React.js
Backend : Node.js, Express
Database : MySQL
</pre>

<b>ER Diagram :</b>
![alt text](https://github.com/hrishikeshathalye/Hosital-Management-System-DBMS/blob/master/Schemas%26ER/myer.png)

<b>Relational Schemas :</b>
![alt text](https://github.com/hrishikeshathalye/Hosital-Management-System-DBMS/blob/master/Schemas%26ER/schema.png)

<b>Patient Side Features :</b>

    1. There is a seperate interface for patients. Patients have a seperate login.
    
    2. Patients can book appointments.
    
    3. Patients can give previous medical history.
    
    4. Patients can view/update/cancel already booked appointments if necessary.
    
    5. Cancelled appointments create free slots for other patients.
    
    6. The system avoids clash of appointments with other patients. Each patient is therefore ensured his/her slot.
    
    7. Patients are able to see complete diagnosis, prescriptions and medical history.
    
    8. Patient medical history is only available to the doctor with whom the appointment is booked to ensure privacy.

<b>Doctor Side Features :</b>

    1. There is a seperate interface for doctors. Doctors have a seperate login.

    2. The system takes into consideration doctor schedules and does not allow appointments when a doctor is already busy or has a break.
    
    3. Doctors are able to access patient history and profile, and add to patient history.
    
    4. Doctors are able to give diagnosis and prescriptions.
    
    5. Doctors are able to modify diagnosis and prescriptions.

<b>Screenshots :</b>
1. Patient registering on the system:
![alt text](https://github.com/hrishikeshathalye/Hosital-Management-System-DBMS/blob/master/Screenshots/PatientRegistration.png)

2. Doctor registering on the system:
![alt text](https://github.com/hrishikeshathalye/Hosital-Management-System-DBMS/blob/master/Screenshots/DoctorRegistration.png)

3. Log In Screen:
![alt text](https://github.com/hrishikeshathalye/Hosital-Management-System-DBMS/blob/master/Screenshots/LogInScreen.png)

4. Password Reset Screen:
![alt text](https://github.com/hrishikeshathalye/Hosital-Management-System-DBMS/blob/master/Screenshots/PasswordReset.png)

5. Patient Home Screen:
![alt text](https://github.com/hrishikeshathalye/Hosital-Management-System-DBMS/blob/master/Screenshots/PatientHome.png)

6. Patient Viewing History:
![alt text](https://github.com/hrishikeshathalye/Hosital-Management-System-DBMS/blob/master/Screenshots/PatientHistory.png)

7. Patient Viewing Appointments:
![alt text](https://github.com/hrishikeshathalye/Hosital-Management-System-DBMS/blob/master/Screenshots/PatientViewingAppt.png)

8. Patient Scheduling Appointment:
![alt text](https://github.com/hrishikeshathalye/Hosital-Management-System-DBMS/blob/master/Screenshots/SchedulingAppt.png)

9. Doctor Home Screen:
![alt text](https://github.com/hrishikeshathalye/Hosital-Management-System-DBMS/blob/master/Screenshots/DoctorHome.png)

10. Doctor Viewing Appointment:
![alt text](https://github.com/hrishikeshathalye/Hosital-Management-System-DBMS/blob/master/Screenshots/DoctorViewingAppt.png)

11. Doctor Giving Diagnosis:
![alt text](https://github.com/hrishikeshathalye/Hosital-Management-System-DBMS/blob/master/Screenshots/Diagnosis.png)

12. Doctor Viewing Patient History:
![alt text](https://github.com/hrishikeshathalye/Hosital-Management-System-DBMS/blob/master/Screenshots/ViewingPatientHistory.png)

<b>Instructions to run:</b>

    1. Run "npm install" in frontend and backend directories.
    
    2. Run "npm start" first in the backend and then in the frontend directory.
    
    3. Access localhost:3000 from the browser.
