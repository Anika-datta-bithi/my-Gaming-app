import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { Outlet } from 'react-router';
import MovieHero from '../components/MovieHero';
import GameCard from '../components/GameCard';
import GameCrumb from '../components/GameCrumb';
import GameData from '../components/GameData';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <MovieHero/>
            <GameCard/>
            <GameCrumb/>
            <GameData/>
            <Footer/>
        </div>
    );
};

export default Home;