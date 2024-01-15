import React from "react";
import Input from "./Input";

function Register(props) {
    return (
        <form className="form">
            <Input 
                type = "text" placeholder = "Username" />

             <Input 
                type = "text"  placeholder = "Password" />

                {props.isRegistered && (<Input 
                type = "text" placeholder = "Confirm Password" />) }  


            <button type="submit">
            { props.isRegistered ? "Register" : "Login" }   </button>
          
        </form>
      );
}

export default Register;