import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MedHist from './MedHistory.js';
import Home from './Home';
import LogIn from './logIn.js';
import NewMedHist from './newPatientMedHist.js';
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

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          {/* <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/MedHist">MedHist</Link>
            </li>
            <li>
              <Link to="/ViewOneHistory">ViewOneHistory</Link>
            </li>
            <li>
              <Link to="/newPatientMedHist">New Patient MedHist</Link>
            </li>
            <li>
              <Link to="/createAcc">Create an Account</Link>
            </li>
            <li>
              <Link to="/scheduleAppt">Schedule an Appointment</Link>
            </li>
            <li>
              <Link to="/MedHistView">Medical History View</Link>
            </li>
            <li>
              <Link to="/DocHome">Doctor's home page</Link>
            </li>
            <li>
              <Link to="/Settings">Settings page</Link>
            </li>
          </ul> */}
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/NoMedHistFound">
            <NoMedHistFound />
          </Route>
          <Route path="/MakeDoc">
            <MakeDoc />
          </Route>
          <Route path="/MedHist">
            <MedHist />
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

          <Route name="onehist" path="/ViewOneHistory/:email" component={ViewOneHistory} />

          <Route path="/newPatientMedHist">
            <NewMedHist />
          </Route>
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
            <LogIn />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Users() {
  return <h2>Users</h2>;
}