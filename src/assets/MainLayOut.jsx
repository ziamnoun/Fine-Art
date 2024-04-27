import React from 'react';
import Navbar from './NAVBAR/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayOut = () => {
    return (
        <div className="bg-gradient-to-r from-black to-purple-800 min-h-screen">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;