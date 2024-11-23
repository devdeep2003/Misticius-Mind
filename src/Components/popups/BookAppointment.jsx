import React, { useState } from "react";
import "../../styles/popups/bookpopup.scss";


const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add form submission logic here
  };

  return (
    <div className="bookappointment-container">
      <div className="form-header">
        <span className="active-tab">Book an Appointment</span>
       <a href="/"> <img src="../../../public/icons/XCircle.png" className="close-button-book" /></a>
      </div>
      <div className="underline"></div>
      <span className="form-heading">
        Book an appointment for a strategic discussion about a Pro Plan
      </span>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <input
          style={{height:"45px"}}
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
          style={{height:"45px"}}
            type="text"
            name="secondName"
            placeholder="Last Name"
            value={formData.secondName}
            onChange={handleChange}
          />
          <input
          style={{height:"45px"}}
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
          />
          <input
          style={{height:"45px"}}
            type="text"
            name="companyName"
            placeholder="Phone Number"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>

        <textarea
          className="textarea"
          type="text"
          name="message"
          placeholder="Leave a message..."
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit" className="bookappointment-button">
          BOOK APPOINTMENT
        </button>
      </form>
    </div>
  );
};



export default SignUp;
