import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import Aobut from "../../components/Random/aobut";
import Skills from "../../components/Skills/Skills";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import "./Home.scss";
import Profile from "../../components/Random/Profile";

const Home = () => {
	return (
      <React.Fragment> 
            <Helmet>
               <title>Home page</title>
            </Helmet>
            <Navbar />
            <Hero/>
            <Aobut/>
            <Skills/>
            <Profile/>
            <Footer/>
      </React.Fragment>
	);
};

export default Home;
