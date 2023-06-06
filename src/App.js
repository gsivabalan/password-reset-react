//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resetToken, setResetToken] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleForgotPassword = async () => {
    try {
      const response = await axios.post('/forgot-password', { email });
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const handleResetPassword = async () => {
    try {
      const response = await axios.post('/reset-password', { resetToken, newPassword });
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleForgotPassword}>Reset Password</button>

      <h2>Reset Password</h2>
      <input
        type="text"
        placeholder="Reset Token"
        value={resetToken}
        onChange={(e) => setResetToken(e.target.value)}
      />
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={handleResetPassword}>Submit</button>
    </div>
  );
};

export default App;
