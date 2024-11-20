import React from "react";
import "../../styles/popups/loginPopup.scss";
import close from '../../../public/icons/XCircle.png'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-header">
        <span className="active-tab-login" style={{color:"#3637d4",fontWeight:"bold"}}>Login</span>
        <Link to = '/signup' style={{textDecoration:"none"}}><span style={{textWrap:"nowrap"} }>Sign Up</span></Link>
        <img src={close} className="close-button-login"/>
      </div>
      <div className="active-underline"></div>
      <div className="underline"></div>
      <p className="login-title" style={{fontWeight:"bold"}}>Enter your credentials to login</p>
      <div className="form">
        <div className="input-group">
          <input type="text" placeholder="User Name" />
        </div>
        <div className="input-group">
          <input type="password" placeholder="Password" />
        </div>
        <button className="login-button">LOGIN</button>
        <div className="footer-text">
          <p>
            Don’t have an account? <br />{" "}
            <span className="signup-link"><Link to='/signup'>Sign Up</Link></span> for free now!
          </p>
          <p className="forgot-password"><Link to='/reset-password'>Forgot Password?</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
