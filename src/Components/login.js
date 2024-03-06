import React, { useState } from 'react';
import '../Styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginClick = () => {
    alert('Logging in with email: ' + email + ' and password: ' + password);
  };

  return (
    <div className="login-container">
      <h2>Login to FoodX</h2>
      <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" />
      <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
      <button className="login-button" onClick={handleLoginClick}>Login</button>
    </div>
  );
}

export default Login;
