import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Login from './Login'; // Import your Login component
import Register from './Register'; 
import logoimg from '../images/Group 7.png';
import { Button } from '@mui/material';
import logo from '../images/download.jpeg'
const Mainpage = () => {
    const [showLogin, setShowLogin] = useState(true);

    const toggleForm = () => {
        setShowLogin((prevShowLogin) => !prevShowLogin);
    };

    return (
        <div className='mainpagehero'>
            <div className="main_page_left">
                <img src={logoimg} alt="" />
            </div>
            <div className='main_page_right'>
                <div className="right_wrap">
                <img
                    className="app__headerImage"
                    src={logo}
                    alt=""
                    width={'180'}
                    height={'50'}
                />
                {showLogin ? <Login /> : <Register />}
                <div>
                    <Button onClick={toggleForm}>
                        {showLogin ? 'Register' : 'Login'}
                    </Button>
                </div>
                <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Mainpage;
