import React, { useState } from 'react';
import { Input, Button } from '@mui/material';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();

    const signIn = (event) => {


        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                // Redirect to home page on successful sign-in
                history('/home');
            })
            .catch((error) => alert(error.message));

        // setOpensignin(false);
    };
    return (
        <div>
            <form className="app__signup">
                <Input
                    className='form_input'
                    placeholder="Email"
                    type="text"
                    value={email}
                    disableUnderline
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    className='form_input'
                    placeholder="Password"
                    type="password"
                    value={password}
                    disableUnderline
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button className='dea_btn' type="submit" onClick={signIn}>
                    Sign In
                </Button>
            </form>
        </div>
    );
};

export default Login;
