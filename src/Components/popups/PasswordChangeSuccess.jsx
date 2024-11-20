import React from "react";
import "../../styles/popups/newPasswordsuccess.scss";
import close from "/icons/XCircle.png";
import { Link } from "react-router-dom";
import tick from "/icons/CheckCircle.png";

const Login = () => {
  return (
    <div className="newPasswordsuccess-container">
      <div className="newPasswordsuccess-header">
        <span
          className="active-tab-login"
          style={{ color: "#3637d4", fontWeight: "bold", textWrap: "nowrap" }}
        >
          Password Reset Successfully
        </span>
        <img src={close} className="close-button-newPasswordsuccess" />
      </div>
      <div className="underline"></div>
      <div className="tick-success">
      <img src={tick} alt="success-icon" className="tick-icon" />
      <span className="success-text">Successful!</span>
      </div>
      
      <p className="newPasswordsuccess-title">
        Your password has been reset successfully. <br />You can now log in with your
        new password.
      </p>
      <div className="form">
        <button className="newPasswordsuccess-button">
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            BACK TO LOGIN
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Login;
