import React from "react";
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute';
import InstructorDashboard from './components/Instructor';
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home"
import Dashboard from "./components/Dashboard";

function App() {
  return (
    
    <div className="App">
      {/* rendering the register and login components */}
       <Router >
        <Switch>
       <Route path = "/register" component = {Register} />
      <Route path = "/login" component = {Login}/>
      <Route exact path = '/' component = {Home}/>
      <ProtectedRoute path="/instructor" component={InstructorDashboard}/>
      <ProtectedRoute path="/client" component={Dashboard}/>
      </Switch>
      </Router> 
      
    </div>
    
  );
}

export default App;
