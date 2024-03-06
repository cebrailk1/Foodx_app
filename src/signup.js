import React, { useState } from 'react';
import './Signup.css'; 

function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegisterClick = () => {
    alert('Registering with full name: ' + fullName + ', email: ' + email + ', and password: ' + password);
  };

  return (
    <div className="register-container">
      <h2>Register for FoodX</h2>
      <input type="text" value={fullName} onChange={handleFullNameChange} placeholder="Full Name" />
      <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" />
      <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
      <button className="register-button" onClick={handleRegisterClick}>Register</button>
    </div>
  );
}

export default Signup;
