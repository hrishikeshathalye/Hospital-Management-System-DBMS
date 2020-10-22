import React,{useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home';
import LogIn from './logIn.js';
import CreateAccount from './CreateAccount.js';
import SchedulingAppt from './schedulingAppt.js';
import ViewMedHist from './ViewMedHist.js';
import DocHome from './DocHome.js';
import ViewOneHistory from './ViewOneHistory.js';
import Settings from './Settings.js';
import DocSettings from './DocSettings.js';
import PatientsViewAppt from './PatientsViewAppt.js';
import NoMedHistFound from './NoMedHistFound.js';
import DocViewAppt from './DocViewAppt.js';
import MakeDoc from './MakeDoc.js';
import Diagnose from './Diagnose.js';
import ShowDiagnoses from './ShowDiagnoses.js';

export default function App() {
  let [component, setComponent] = useState(<LogIn />)
  useEffect(()=>{
    fetch("http://localhost:3001/userInSession")
      .then(res => res.json())
      .then(res => {
      let string_json = JSON.stringify(res);
      let email_json = JSON.parse(string_json);
      let email = email_json.email;
      let who = email_json.who;
      if(email === ""){
        setComponent(<LogIn />)
      }
      else{
        if(who==="pat"){
          setComponent(<Home />)
        }
        else{
          setComponent(<DocHome />)
        }
      }
    });
  }, [])
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/NoMedHistFound">
            <NoMedHistFound />
          </Route>
          <Route path="/MakeDoc">
            <MakeDoc />
          </Route>
          <Route path="/Settings">
            <Settings />
          </Route>
          <Route path="/MedHistView">
            <ViewMedHist />
          </Route>
          <Route path="/scheduleAppt">
            <SchedulingAppt />
          </Route>
          <Route path="/showDiagnoses/:id" render={props=><ShowDiagnoses {...props} />} />
          <Route path="/Diagnose/:id" render={props=><Diagnose {...props} />} />
          <Route name="onehist" path="/ViewOneHistory/:email" render={props=><ViewOneHistory {...props} />}/>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/createAcc">
            <CreateAccount />
          </Route>
          <Route path="/DocHome">
            <DocHome />
          </Route>
          <Route path="/PatientsViewAppt">
            <PatientsViewAppt />
          </Route>
          <Route path="/DocSettings">
            <DocSettings />
          </Route>
          <Route path="/ApptList">
            <DocViewAppt />
          </Route>
          <Route path="/">
            {component}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}