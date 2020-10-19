var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');
var cors = require('cors');
var port = 3001; //process.env.PORT || was 3000

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'wecare',
  multipleStatements: true
  //port: 3001,
  //socketPath: '/private/tmp/mysql.sock'
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

var email_in_use = "";
var password_in_use = "";

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.use(cors());

app.get('/checkIfPatientExists', (req, res) => {
  let params = req.query;
  let email = params.email;
  con.query(`SELECT * 
             FROM Patient  
             WHERE email = "${email}"`, function (error, results, fields) {
    if (error) throw error;
    else {
      console.log(results);
      return res.json({
        data: results
      })
    };
  });
});

app.get('/checkIfDocExists', (req, res) => {
  let params = req.query;
  let email = params.email;
  con.query(`SELECT * 
             FROM DoctorNurse  
             WHERE email = "${email}"`, function (error, results, fields) {
    if (error) throw error;
    else {
      console.log(results);
      return res.json({
        data: results
      })
    };
  });
});

app.get('/checkIfApptExists', (req, res) => {
  let params = req.query;
  let email = params.email;
  let startTime = params.startTime;
  let date = params.date;

  let ndate = date.substring(0, 10);
  let sql_date = `STR_TO_DATE('${ndate}', '%Y-%m-%d')`;
  //sql to turn string to sql time obj
  let sql_start = `CONVERT('${startTime}', TIME)`;

  con.query(`SELECT * 
             FROM PatientsSeeAppointments, Appointment  
             WHERE patient = "${email}" AND
             appt = uid AND
             date = ${sql_date} AND
             starttime = ${sql_start}`, function (error, results, fields) {
    if (error) throw error;
    else {
      console.log(results);
      return res.json({
        data: results
      })
    };
  });
});

app.get('/names', (req, res) => {
  con.query('SELECT * FROM Patient', function (error, results, fields) {
    if (error) throw error;
    else {
      return res.json({
        data: results
      })
    };
  });
});

app.get('/OneHistory', (req, res) => {
  console.log("in one history");
  let params = req.query;
  let email = params.patientEmail;
  console.log(email);
    let statement = `SELECT medication,gender,name,email,
                    address,conditions,surgeries,GROUP_CONCAT(allergy SEPARATOR ', ') AS allergies
                    FROM patientsfillhistory,patient,medicalhistory,allergy
                    WHERE allergy.medhistory=uid AND patientsfillhistory.medhistory=uid
                    AND patient=email AND email = ` + email + ` GROUP BY email`;
  con.query(statement, function (error, results, fields) {
    if (error) throw error;
    else {
      return res.json({
        data: results
      })
    }
  })
});

app.get('/makeAccount', (req, res) => {
  console.log("hi");
  let ah = req.query;
  let name = ah.name + " " + ah.lastname;
  let email = ah.email;
  let password = ah.password;
  let address = ah.address;

  let sql_statement = `INSERT INTO Patient (email, password, name, address) 
                       VALUES ` + `("${email}", "${password}", "${name}", "${address}")`;
  console.log(sql_statement);

  con.query(sql_statement, function (error, results, fields) {
    if (error) throw error;
    else {
      email_in_use = email;
      password_in_use = password;
      return res.json({
        data: results
      })
    };
  });
});

app.get('/makeDocAccount', (req, res) => {
  console.log("trying to make a doctor");
  let params = req.query;
  let name = params.name + " " + params.lastname;
  let email = params.email;
  let password = params.password;
  let gender = params.gender;
  let uid = params.uid;

  let sql_statement = `INSERT INTO DoctorNurse (email, gender, password, uid, name) 
                       VALUES ` + `("${email}", "${gender}", "${password}", "${uid}", "${name}")`;
  console.log(sql_statement);

  con.query(sql_statement, function (error, results, fields) {
    if (error) throw error;
    else {
      email_in_use = email;
      password_in_use = password;
      return res.json({
        data: results
      })
    };
  });
});

app.get('/MedHistView', (req, res) => {
  let params = req.query;
  let patientName = "'%" + params.name + "%'";
  let secondParamTest = "" + params.variable;
  console.log(params);
  //console.log(crap2);
    let statement = `SELECT name AS 'Name',
                    patientsfillhistory.medhistory AS 'UID',
                    email FROM Patient,patientsfillhistory
                    WHERE Patient.email = patientsfillhistory.patient`;
  if (patientName != "''")
    statement += " AND Patient.name LIKE " + patientName
  con.query(statement, function (error, results, fields) {
    if (error) throw error;
    else {
      return res.json({
        data: results
      })
    };
  });
});

app.get('/patientViewAppt', (req, res) => {
  let kill_me = req.query;
  let email = kill_me.email;
  let statement = `SELECT PatientsSeeAppointments.appt as UID, 
                          PatientsSeeAppointments.patient as user, 
                          PatientsSeeAppointments.concerns as theConcerns, 
                          PatientsSeeAppointments.symptoms as theSymptoms, 
                          Appointment.date as theDate,
                          Appointment.starttime as theStart,
                          Appointment.endtime as theEnd
                          FROM PatientsSeeAppointments, Appointment
                          WHERE PatientsSeeAppointments.patient = "${email}" AND
                          PatientsSeeAppointments.appt = Appointment.uid`;
  console.log(statement);
  con.query(statement, function (error, results, fields) {
    if (error) throw error;
    else {
      console.log(results);
      console.log(JSON.stringify(results));
      return res.json({
        data: results
      })
    };
  });
});

app.get('/getDateTimeOfAppt', (req, res) => {
  console.log("sdhrhhrthrthryhr");
  let dead = req.query;
  let uid = dead.uid;
  let statement = `SELECT starttime as start, 
                          endttime as end, 
                          date as theDate 
                   FROM Appointment 
                   WHERE uid = "${uid}"`;
  console.log(statement);
  con.query(statement, function (error, results, fields) {
    if (error) throw error;
    else {
      console.log(results);
      console.log(JSON.stringify(results));
      return res.json({
        data: results
      })
    };
  });
});

app.get('/checkIfHistory', (req, res) => {
    let params = req.query;
    let email = params.email;
    let statement = "SELECT patient FROM patientsfillhistory WHERE patient = " + email;
    con.query(statement, function (error, results, fields) {
        if (error) throw error;
        else {
            console.log(results);
            console.log(JSON.stringify(results));
            return res.json({
                data: results
            })
        };
    });
});


app.post('/resetPasswordPatient', (req, res) => {
  let something = req.query;
  let email = something.email;
  let oldPassword = "" + something.oldPassword;
  let newPassword = "" + something.newPassword;

  let statement = `UPDATE Patient 
                   SET password = "${newPassword}" 
                   WHERE email = "${email}" 
                   AND password = "${oldPassword}";`;
  console.log(statement);
  con.query(statement, function (error, results, fields) {
    if (error) throw error;
    else {
      return res.json({
        data: results
      })
    };
  });
});


app.post('/resetPasswordDoctor', (req, res) => {
  let something = req.query;
  let email = something.email;
  let oldPassword = "" + something.oldPassword;
  let newPassword = "" + something.newPassword;

  let statement = `UPDATE DoctorNurse 
                   SET password = "${newPassword}" 
                   WHERE email = "${email}" 
                   AND password = "${oldPassword}";`;
  console.log(statement);
  con.query(statement, function (error, results, fields) {
    if (error) throw error;
    else {
      return res.json({
        data: results
      })
    };
  });
});

app.get('/checklogin', (req, res) => {
  let params = req.query;
  let email = params.email;
  let password = params.password;
  let sql_statement = `SELECT * FROM Patient 
                       WHERE email="${email}" 
                       AND password="${password}"`;
  console.log(sql_statement);
  con.query(sql_statement, function (error, results, fields) {
    if (error) {
      console.log("eror");
      return res.status(500).json({ failed: 'error ocurred' })
    }
    else {
      console.log(results);
      //return results;
      if (results.length === 0) {
        console.log("Sdadsdadasdadasdasdas");
      } else {
        var string = JSON.stringify(results);
        var json = JSON.parse(string);
        email_in_use = json[0].email;
        password_in_use = json[0].password;
        console.log(email_in_use);
        console.log(password_in_use);
      }
      return res.json({
        data: results
      })
    };
  });
});

app.get('/checkAppt', (req, res) => {
  let params = req.query;
  let email = params.email;
  let password = params.password;
  let sql_statement = `SELECT * FROM 
                       Patient WHERE email="${email}" 
                       AND password="${password}"`;
  console.log(sql_statement);
  con.query(sql_statement, function (error, results, fields) {
    if (error) {
      console.log("eror");
      return res.status(500).json({ failed: 'error ocurred' })
    }
    else {
      console.log(results);
      //return results;
      if (results.length === 0) {
        console.log("Sdadsdadasdadasdasdas");
      } else {
        var string = JSON.stringify(results);
        var json = JSON.parse(string);
        email_in_use = json[0].email;
        password_in_use = json[0].password;
        console.log(email_in_use);
        console.log(password_in_use);
      }
      return res.json({
        data: results
      })
    };
  });
});

app.get('/checkDoclogin', (req, res) => {
  let params = req.query;
  let email = params.email;
  let password = params.password;
  let sql_statement = `SELECT * 
                       FROM DoctorNurse 
                       WHERE email="${email}" AND password="${password}"`;
  console.log(sql_statement);
  con.query(sql_statement, function (error, results, fields) {
    if (error) {
      console.log("eror");
      return res.status(500).json({ failed: 'error ocurred' })
    }
    else {
      console.log(results);
      //return results;
      if (results.length === 0) {
        console.log("Sdadsdadasdadasdasdas");
      } else {
        var string = JSON.stringify(results);
        var json = JSON.parse(string);
        email_in_use = json[0].email;
        password_in_use = json[0].password;
        console.log(email_in_use);
        console.log(password_in_use);
      }
      return res.json({
        data: results
      })
    };
  });
});

app.get('/addToPatientSeeAppt', (req, res) => {
  let params = req.query;
  let email = params.email;
  let appt_uid = params.uid;
  let concerns = params.concerns;
  let symptoms = params.symptoms;

  let sql_try = `INSERT INTO PatientsSeeAppointments (patient, appt, concerns, symptoms) 
                 VALUES ("${email}", ${appt_uid}, "${concerns}", "${symptoms}")`;
  console.log(sql_try);
  con.query(sql_try, function (error, results, fields) {
    //console.log(query.sql);
    if (error) throw error;
    else {
      console.log("im hippie");
    }
  });

});

app.get('/schedule', (req, res) => {
  let params = req.query;
  let time = params.time;
  let date = params.date;
  let uid = params.uid;
  let endtime = params.endTime;
  let concerns = params.concerns;
  let symptoms = params.symptoms;

  let ndate = date.substring(0, 10);

  let sql_date = `STR_TO_DATE('${ndate}', '%Y-%m-%d')`;
  //sql to turn string to sql time obj
  let sql_start = `CONVERT('${time}', TIME)`;

  //sql to turn string to sql time obj
  let sql_end = `CONVERT('${endtime}', TIME)`;
  let sql_try = `INSERT INTO Appointment (uid, date, starttime, endtime, status) 
                 VALUES (${uid}, ${sql_date}, ${sql_start}, ${sql_end}, "Not Done")`;
  console.log(sql_try);
  con.query(sql_try, function (error, results, fields) {
    //console.log(query.sql);
    if (error) throw error;
    else {
      console.log("im hippie");
    }
  });
});

app.get('/genApptUID', (req, res) => {
  //query current max uid
  con.query('SELECT uid FROM Appointment ORDER BY uid DESC LIMIT 1;', function (error, results, fields) {
    //console.log(query.sql);
    if (error) throw error;
    else {
      console.log("im cool");
      console.log(results[0].uid);
      let generated_uid = results[0].uid + 1;
      console.log(generated_uid);
      console.log("die");
      return res.json({ uid: `${generated_uid}` });
    };
  });
});

app.get('/userInSession', (req, res) => {
  console.log("cowboy beep");
  return res.json({ email: `${email_in_use}` });
});

app.get('/endSession', (req, res) => {
  console.log("attempting to end session");
  email_in_use = "";
  password_in_use = "";
  console.log("hit rock bottom");
});

app.post('/insert', (req, res) => {
  console.log("hello ive touched");
  con.query('INSERT INTO users (first, last) VALUES ("ok", "ok")', function (error, results, fields) {
    //console.log(query.sql);
    if (error) throw error;
    else {
      console.log("im hippie");
    };
  });
});

app.post('/scheduleAppt', (req, res) => { // probably delete later
  console.log("hello ive touched");
  con.query('INSERT INTO users (first, last) VALUES ("ok", "ok")', function (error, results, fields) {
    //console.log(query.sql);
    if (error) throw error;
    else {
      console.log("im hippie");
    };
  });
});

app.get('/doctorViewAppt', (req, res) => {
  let a = req.query;
  let email = a.email;
  let statement = `SELECT a.uid,a.date, a.starttime, a.status, p.name, psa.concerns, psa.symptoms
  FROM Appointment a, PatientsSeeAppointments psa, Patient p
  WHERE a.uid = psa.appt AND psa.patient = p.email`;
  console.log(statement);
  con.query(statement, function (error, results, fields) {
    if (error) throw error;
    else {
      console.log(results);
      console.log(JSON.stringify(results));
      return res.json({
        data: results
      })
    };
  });
});

app.get('/deleteAppt', (req, res) => {
  let a = req.query;
  let uid = a.uid;
  let statement = `DELETE FROM PatientsSeeAppointments p WHERE p.appt = ${uid}`;
  console.log(statement);
  con.query(statement, function (error, results, fields) {
    if (error) throw error;
    else {
      console.log('hi');
      let statement2 = `DELETE FROM ApptInRoom a WHERE a.appt = ${uid}`;
      console.log(statement2);
      con.query(statement, function (error, results, fields) {
      if (error) throw error;
          else {
      console.log('hi');
            let statement1 = `DELETE FROM Diagnose d WHERE d.appt = ${uid}`;
            console.log(statement1);
            con.query(statement, function (error, results, fields) {
              if (error) throw error;
              else {
                console.log('hi');
                let statement3 = `DELETE FROM ApptsToSchedules a WHERE a.appt = ${uid}`;
                console.log(statement3);
                con.query(statement, function (error, results, fields) {
                  if (error) throw error;
                  else {
                    console.log('hi');
                    return res.json({
                      data: results
                    })
                    
                    
                    
                  };
          });

      };
  });
      
    };
  });
      
    };
  });

});
// 
// var query = con.query('INSERT INTO users (first, last) VALUES ("hello", "there")', 
//   function (error, results, fields){  
//        if (error) throw error;});
// console.log(query.sql);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});




con.query('SELECT * from Patient', function (err, users, fields) {
  if (err) throw err
  console.log(users);

})


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// app.listen(3001);
// console.log('Example app listening at port:3001');

app.listen(port, () => {
  console.log(`Listening on port ${port} `);
});

module.exports = app;
