import React, { useState } from 'react';
import '../../styles/popups/signupPopup.scss';
import close from '/icons/XCircle.png'
import {Link} from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    email: '',
    companyName: '',
    location: '',
    country: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Add form submission logic here
  };

  return (
    <div className="signup-container">
      <div className="form-header">
       <Link to ='/login' style={{textDecoration:"none" , color:"#000000"}}> <span>Login</span></Link>
        <span className="active-tab">Sign Up</span>
        <img src={close} className='close-button'/>
      </div>
      <div className="active-underline-signup"></div>
      <div className="underline"></div>
      <span className='form-heading'>Create a free account to continue as Lite User</span>

      <form onSubmit={handleSubmit}>
        
        <div className="form-grid">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="secondName"
            placeholder="Second Name"
            value={formData.secondName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="signup-button">
          SIGN UP
        </button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
