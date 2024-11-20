import React, { useState } from "react";
import "../../styles/popups/newPassword.scss";
import close from "/icons/XCircle.png";
import {useNavigate} from 'react-router-dom'
import { Password } from "phosphor-react";


const Login = () => {

  const navigate = useNavigate();

const[newPassword , setNewPassword] = useState("");
const[confirmPassword,setConfirmPassword] = useState("");
const [error, setError] = useState("");

const handlePassword = () =>{
  if(newPassword === confirmPassword){
    navigate("/password-change-success");
  }
    else{
      setError("Passwords don't match. Try again")
    }
}

  return (
    <div className="newPassword-container">
      <div className="newPassword-header">
        <span
          className="active-tab-login"
          style={{ color: "#3637d4", fontWeight: "bold" , textWrap:"nowrap"}}
        >
          Create a New Password 
        </span>
        <img src={close} className="close-button-newPassword" />
      </div>
      <div className="underline"></div>
      <p className="newPassword-title">
      Enter a new password for your account
      </p>
      <div className="form">
        <div className="input-group">
          <input type="password" placeholder="New Password" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)}/>
        </div>
        <div className="input-group">
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
        </div>

        {error && <div className="incorrect-password">{error}</div>}

        <button className="login-button" onClick={handlePassword}>RESET PASSWORD</button>
     
      </div>
    </div>
  );
};

export default Login;
