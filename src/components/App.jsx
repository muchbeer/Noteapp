import React from "react";
import Register from "./Register";

//Single responsibility
//using double upper sand
//const currentTime = new Date().getHours()
//currentTime > 12 && <h1>Hello </h1>
//this will return Hello if currentTIme is true and null if it is not 

// { isLoggedin ? <h1>Hello</h1> : <Login /> } 


var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      
    <Register 
        isRegistered = {userIsRegistered}
    />

    </div>
  );
}

export default App;