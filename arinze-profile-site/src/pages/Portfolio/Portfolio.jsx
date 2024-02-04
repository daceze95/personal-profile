import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Portfolio.scss';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <Helmet>
        <title>Portfolio page</title>
      </Helmet>
      <Navbar />

      <div className='hero'>
        <div className='main_text'>
          <h1 className='coloredSide'>
            {/* <span>Portfolio</span> */}
            <span>Elevator Pitch</span>
          </h1>
        </div>
      </div>
      <div className='prflTxtCtn'>
        <div className='prflTxt'>Coming soon...</div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
