import React from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';


function App() {
  return (
    
    <div className="App">
      {/* rendering the register and login components */}
       <Router >
        <Switch>
       <Route path = "/register" component = {Register} /> */}
       
      <Route path = "/login" component = {Login}/>
      </Switch>
      </Router> 
      
    </div>
    
  );
}

export default App;
