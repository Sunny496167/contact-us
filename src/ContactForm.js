import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setSubmitted(true);

    // Reset form data
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-container">
      <div className='box'></div>
      <div className="contact-info">
        <div className='box1'></div>
        <div className='box2'></div>
        <div className='box3'></div>
        <h2><b>Contact</b> Us</h2>
        <p>
          <div id='cont'>
          <img src="call.png" alt="callicon"/>
           Phone: +91 99033 42634 
          <span><img src="mail.png" alt="mailicon"/>
           E-mail: <u>iic.tmsl@gmail.com</u>
           </span>
          </div>
        </p>
      </div>
      <div className="form-container">
        <div className="illustration">
          <img src="amico.png" alt="Illustration" />
        </div>
        <div className="div-form">
          {submitted ? (
            <div className="thank-you-message">
              <h3>Thank you for your message!</h3>
              <p>We will get back to you soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="NAME" 
                value={formData.name}
                onChange={handleChange}
                required 
              />

              <label htmlFor="email">Email ID</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="EMAIL" 
                value={formData.email}
                onChange={handleChange}
                required 
              />

              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                placeholder="MESSAGE" 
                value={formData.message}
                onChange={handleChange}
                required 
              ></textarea>

              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
