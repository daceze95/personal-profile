import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '../../components/Hero/Hero';

const Home = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Home page</title>
      </Helmet>
      <Hero />
    </React.Fragment>
  );
};

export default Home;
