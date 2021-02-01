import React from "react";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      {/* rendering the register and login components */}
      <div>
        <Register />
      </div>
      <div>
        <Login />
      </div>
    </div>
  );
}

export default App;
