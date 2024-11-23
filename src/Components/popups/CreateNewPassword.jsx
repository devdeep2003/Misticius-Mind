import React, { useState } from "react";
import "../../styles/popups/newPassword.scss";
import close from "/icons/XCircle.png";

const Login = ({ onValid, onClose }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [passwordVisible , setPasswordVisibile] = useState(null)
  const [confirmPasswordVisible , setConfirmPasswordVisible] = useState(null)

  const handlePassword = () => {
    if (newPassword === confirmPassword) {
      onValid();
    } else {
      setError("Passwords don't match. Try again");
    }
  };

  return (
    <div className="newPassword-container" >
      <div className="newPassword-header">
        <span
          className="active-tab-login"
          style={{ color: "#3637d4", fontWeight: "bold", textWrap: "nowrap" }}
        >
          Create a New Password
        </span>
        <img
          src={close}
          className="close-button-newPassword"
          onClick={onClose}
          
        />
      </div>
      <div className="underline"></div>
      <p className="newPassword-title" style={{marginLeft:"-10px"}}>Enter a new password for your account</p>
      <div className="form">
        <div className="input-group">
          <input
           style={{height:"45px",borderRadius:"20px"}}
            type={passwordVisible?"text":"password"}
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
             <img
            src="/icons/EyeSlash.png"
            alt="visibility"
            srcset=""
           className="eye-icon"
           onClick={()=>setPasswordVisibile(!passwordVisible)}
          />
        </div>
        <div className="input-group">
          <input
          style={{height:"45px",borderRadius:"20px"}}
            type={confirmPasswordVisible?"text":"password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
             <img
            src="/icons/EyeSlash.png"
            alt="visibility"
            srcset=""
           className="eye-icon"
           onClick={()=>setConfirmPasswordVisible(!confirmPasswordVisible)}
          />
        </div>

        {error && <div className="incorrect-password">{error}</div>}

        <button className="login-button" onClick={handlePassword} style={{marginBottom:"120px"}}>
          RESET PASSWORD
        </button>
      </div>
    </div>
  );
};

export default Login;
