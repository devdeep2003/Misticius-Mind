import React, { useContext } from "react";
import "../../styles/popups/otp.scss";
import close from "/icons/XCircle.png";
import { Link } from "react-router-dom";
import CountdownTimer from "./Timer";
import { useState } from "react";
import { EmailContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";

const Login = ({onClose , onSuccess}) => {
  const { email } = useContext(EmailContext);

  const navigate = useNavigate();

  const [code, setCode] = useState(Array(5).fill("")); // 5-digit input
  const [error, setError] = useState("");
  const [correctOtp] = useState("34532");

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) return; // Allow only digits
    const updatedCode = [...code];
    updatedCode[index] = value;
    setCode(updatedCode);

    // Auto-focus to the next input
    if (value && index < 4) {
      document.getElementById(`code-${index + 1}`).focus();
    }
  };

  const handleVerifyOTP = () => {
    const enteredCode = code.join("");
    if (enteredCode === correctOtp) {
      setError(""); // Clear error if OTP is correct
      onSuccess();
    } else {
      setError("Invalid OTP. Please try again."); // Set error if OTP is incorrect
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-header">
        <span
          className="active-tab-login"
          style={{ color: "#3637d4", fontWeight: "bold", textWrap: "nowrap" }}
        >
          Enter Verification Code
        </span>
        <img src={close} className="close-button-otp" onClick={onClose} />
      </div>
      <div className="underline"></div>
      <p className="otp-title">
        We’ve sent a 5-digit verification code to {email}. Please enter the code
        below to continue.
      </p>
      <div className="form">
        <div className="code-inputs" style={{ gap: "10px" }}>
          {code.map((digit, index) => (
            <input
              style={{ height: "50px", width: "50px" }}
              key={index}
              id={`code-${index}`}
              type="text"
              value={digit}
              maxLength="1"
              onChange={(e) => handleInputChange(e, index)}
              className="code-input"
            />
          ))}
        </div>

        {error && <div className="incorrect-otp">{error}</div>}

        <button
          className="login-button"
          onClick={handleVerifyOTP}
          style={{ marginLeft: "30px" }}
        >
          VERIFY CODE
        </button>

        <div className="footer-text">
          <CountdownTimer initialMinutes={5} initialSeconds={0} />
          <p>
            <Link to="/reset-password">Resend Code</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
