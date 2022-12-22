import React from 'react';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import './Home.css';
import NavBar from './NavBar/NavBar'

export default function Home() {
  return (
    <div className="home-container" id="Home">
        <NavBar /> 
        <Profile />
        <Footer />
    </div>
  )
}
