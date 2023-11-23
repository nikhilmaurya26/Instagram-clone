import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './cmponents/Home';
import Login from './cmponents/Login';
import Register from './cmponents/Register';
import Mainpage from './cmponents/Mainpage';


const router = createBrowserRouter([
    {
        path: '/home',
        element: <Home />
    },
    {
        path:'login',
        element:<Login/>
    },
    {
        path:'register',
        element:<Register/>
    }
    ,
    {
        path:'/',
        element:<Mainpage/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

