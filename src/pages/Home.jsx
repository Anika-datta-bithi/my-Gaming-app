import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { Outlet } from 'react-router';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
        </div>
    );
};

export default Home;