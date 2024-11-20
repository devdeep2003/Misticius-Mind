import {React,useContext} from "react";
import "../../styles/popups/reset.scss";
import close from "/icons/XCircle.png";
import {Link} from 'react-router-dom'
import { EmailContext } from "../Context/Context";

const Login = () => {

  const { email, setEmail } = useContext(EmailContext); // Access context values

  const handleEmailChange = (event) => {
    setEmail(event.target.value); // Update email in context
  };


  return (
    <div className="reset-container">
      <div className="reset-header">
        <span
          className="active-tab-login"
          style={{ color: "#3637d4", fontWeight: "bold" , textWrap:"nowrap"}}
        >
          Reset Your Password
        </span>
        <img src={close} className="close-button-reset" />
      </div>
      <div className="underline"></div>
      <p className="reset-title">
        Enter the email associated with your account, and we'll send a
        verification code to reset your password.
      </p>
      <div className="form">
        <div className="input-group">
          <input type="text" placeholder="Your email" value={email} onChange={handleEmailChange}/>
        </div>

       <Link to='/otp-verification'> <button className="login-button">SEND CODE</button></Link>
        <div className="footer-text">
          
            <p><Link to="/login">Back to Login</Link></p>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
