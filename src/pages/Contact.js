import React, { useState } from 'react';
import { Card, Typography, TextField } from '@mui/material';

function Contact() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
        setName(inputValue);
      } else if (inputType === 'email') {
        setEmail(inputValue);
      } else {
        setMessage(inputValue);
      }
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
        setErrorMessage('Email is invalid');
        return;
    }
    
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage(`Thanks ${name}, your message has been recieved`);
  };

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginTop: "24px"}}>
      <Card sx={{padding: "24px"}}>
      <Typography sx={{fontSize: "2em", fontWeight: 600}}>Contact</Typography>
      <form 
        className="form"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "60vw",
          maxWidth: "500px",
        }}
      >
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
          rows="5"
          style={{ fontFamily: "arial" }}
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      </Card>
    </div>
  );
}

export default Contact;
