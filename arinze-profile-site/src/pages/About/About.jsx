import React from 'react';
import {Helmet} from 'react-helmet';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import './About.scss';

const About = () => {
  return (
    <div className='about'>
      <Helmet>
        <title>About page</title>
      </Helmet>
      <Navbar />
      <div className="hero">
        <div className="main_text">
          <h1 className="coloredSide">
            <span>About Me</span>
          </h1>
        </div>
      </div>
      <div className="abtTxtCtn">
        <div className="abtTxt">Coming soon...</div>
      </div>
      <Footer/>
  </div>
  )
}

export default About
