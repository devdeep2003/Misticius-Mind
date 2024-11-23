import React, { useState } from "react";
import "../../styles/popups/loginPopup.scss";
import close from "../../../public/icons/XCircle.png";

const Login = ({ onClose, onSignup, onForgot }) => {

  const[visible , setVisible] = useState(null)


  return (
    <div className="login-container">
      <div className="login-header">
        <span
          className="active-tab-login"
          style={{ color: "#3637d4", fontWeight: "bold" }}
        >
          Login
        </span>

        <span style={{ textWrap: "nowrap" }} onClick={onSignup}>
          Sign Up
        </span>

        <img src={close} className="close-button-login" onClick={onClose} />
      </div>
      <div className="active-underline"></div>
      <div className="underline"></div>
      <p className="login-title" style={{ fontWeight: "bold" }}>
        Enter your credentials to login
      </p>
      <div className="form">
        <div className="input-group">
          <input
            type="text"
            style={{ height: "40px", width: "320px" }}
            placeholder="User Name"
          />
        </div>
        <div
          className="input-group"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <input
            type={visible ? "text" : "password"}
            style={{ height: "40px", width: "320px",borderRadius:"20px" }}
            placeholder="Password"
          />
          <img
            src="/icons/EyeSlash.png"
            alt="visibility"
            srcset=""
           className="eye-icon"
           onClick={()=>setVisible(!visible)}
          />
        </div>
        <button className="login-button">LOGIN</button>
      </div>
      <div className="footer-text">
        <p>
          Don’t have an account? <br />{" "}
          <span className="signup-link" onClick={onSignup}>
            Sign Up
          </span>{" "}
          for free now!
        </p>
        <p className="forgot-password" onClick={onForgot}>
          Forgot Password?
        </p>
      </div>
    </div>
  );
};

export default Login;
