import React from 'react';
import Navbar from './NAVBAR/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayOut = () => {
    return (
        <div className="div">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;