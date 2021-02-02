import React from "react";
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute';

import ClientSearch from './components/ClientSearch';
import InstructorDashboard from './components/Instructor';
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      {/* rendering the register and login components */}
       <Router >
        <Switch>
       <Route path = "/register" component = {Register} />
      <Route path = "/login" component = {Login}/>
      <ProtectedRoute path="/instructor" component={InstructorDashboard}/>
      <ProtectedRoute path="/client" component={ClientSearch}/>
      </Switch>
      </Router> 
    </div>
  );
}

export default App;
