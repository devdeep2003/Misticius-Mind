import React, { useState } from 'react';
import '../../styles/popups/signupPopup.scss';
import close from '/icons/XCircle.png'



const SignUp = ({onLogin , onClose}) => {
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
      <span onClick = {onLogin}>Login</span>
       <span className="active-tab">Sign Up</span>
       <a href="/"> <img src={close} className='close-button-signup' onClick={onClose} style={{marginLeft:"400px"}}/></a>
      </div>
      <div className="active-underline-signup"></div>
      <div className="underline"></div>
      <span className='form-heading'>Create a free account to continue as Lite User</span>

      <form onSubmit={handleSubmit}>
        
        <div className="form-grid" >
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            style={{height:"45px"}}
          />
          <input
            type="text"
            name="secondName"
            placeholder="Second Name"
            value={formData.secondName}
            onChange={handleChange}
            style={{height:"45px"}}
          />
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
            style={{height:"45px"}}
          />
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            style={{height:"45px"}}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            style={{height:"45px"}}
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            style={{height:"45px"}}
          />
        </div>
        <button type="submit" className="signup-button">
          SIGN UP
        </button>
        <p style={{paddingBottom:"30px"}}>
          Already have an account? <span onClick={onLogin} style={{cursor:"pointer" , color:"blue"}}>Login</span>
        </p>
      </form>
    </div>
  );
};




export default SignUp;
