import React from "react";
import "../../styles/popups/newPasswordsuccess.scss";
import closeIcon from "/icons/XCircle.png"; // Adjust path if necessary
import successIcon from "/icons/CheckCircle.png"; // Adjust path if necessary

const Success =() => {
  return (
    <div className="newPasswordsuccess-container">
      <div className="newPasswordsuccess-header">
        <span
          className="active-tab-login"
          style={{ color: "#3637d4", fontWeight: "bold", textWrap: "nowrap" }}
        >
          Password Reset Successfully
        </span>
        <a href="/"> <img src={closeIcon} className='close-button-signup'/></a>
      </div>
      <div className="underline"></div>
      <div className="tick-success">
        <img src={successIcon} alt="success icon" className="tick-icon" />
        <span className="success-text">Successful!</span>
      </div>

      <p className="newPasswordsuccess-title">
        Your password has been reset successfully. You can now log in with your new password.
      </p>
      <div className="form">
       <a href="/login"> <button className="newPasswordsuccess-button" >
          BACK TO LOGIN
        </button></a>
      </div>
    </div>
  );
};

export default Success;
