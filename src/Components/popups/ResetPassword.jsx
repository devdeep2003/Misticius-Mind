import { React, useContext } from "react";
import "../../styles/popups/reset.scss";
import { EmailContext } from "../Context/Context";

const Reset = ({ onLogin, onSubmit, onClose }) => {
  const { email, setEmail } = useContext(EmailContext); // Access context values

  const handleEmailChange = (event) => {
    setEmail(event.target.value); // Update email in context
  };

  return (
    <div className="reset-container">
      <div className="reset-header">
        <span
          className="active-tab-login"
          style={{ color: "#3637d4", fontWeight: "bold", textWrap: "nowrap" }}
        >
          Reset Your Password
        </span>
        <img src="/icons/XCircle.png" className="close-button-reset" onClick={onClose} />
      </div>
      <div className="underline"></div>
      <p className="reset-title">
        Enter the email associated with your account, and we'll send a
        verification code to reset your password.
      </p>
      <div className="form">
        <div className="input-group">
          <input
            style={{ height: "45px", marginLeft: "-5px" }}
            type="text"
            placeholder="Your email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <button
          className="login-button"
          onClick={onSubmit}
          style={{ marginLeft: "30px" }}
        >
          SEND CODE
        </button>
        <div className="footer-text">
          <p onClick={onLogin} style={{ cursor: "pointer" }}>
          <a href="/login">  Back to Login </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reset;
