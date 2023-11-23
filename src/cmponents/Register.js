import React, { useState } from 'react';
import { Input, Button } from '@mui/material';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const signUp = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username,
        });
      })
      .then(() => {
        // Redirect to home page after successful registration
        navigate('/home');
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div>
      <form className="app__signup">
        <Input
          placeholder="Name"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          placeholder="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" onClick={signUp}>
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Register;
