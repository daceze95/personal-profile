import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Heading, Text, Link, Divider } from '@chakra-ui/react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './About.scss';

const About = () => {
  return (
    <Box className='about'>
      <Helmet>
        <title>About page</title>
      </Helmet>
      <Navbar />
      <Box p={[4, 8]} pt={[24, 20]}>
        <Heading as='h1' mb={4}>
          About Me
        </Heading>
        <Divider mb={6} />
        <Text mb={4}>
          Hello! My name is Arinze Ezeokwuegbu, and I am a passionate and highly
          skilled Full Stack Developer based in Lagos, Nigeria. With a
          Bachelor's degree in Chemistry, I bring a unique perspective to the
          world of software development.
        </Text>
        <Text mb={4}>
          Over the past few years, I have gained extensive experience in
          developing responsive and performant web applications. My expertise
          lies in both frontend and backend development, utilizing technologies
          such as React, Node.js, and Java to create seamless user experiences.
        </Text>
        <Text mb={4}>
          I have a strong commitment to delivering high-quality software
          solutions and thrive in collaborative environments where I can
          contribute my skills and knowledge to achieve project goals. I am
          dedicated to continuous learning and staying updated with the latest
          technologies and industry trends.
        </Text>
        <Text mb={4}>
          Outside of work, I enjoy contributing to open-source projects on
          GitHub and sharing my knowledge with the developer community. In my
          free time, you can find me exploring new technologies, reading, or
          enjoying the outdoors.
        </Text>
        <Divider mb={6} />
        <Text fontStyle='italic' fontSize='sm'>
          Connect with me on{' '}
          <Link
            href='https://www.linkedin.com/in/arinze-ezeokwuegbu/'
            isExternal>
            LinkedIn
          </Link>{' '}
          or check out my projects on{' '}
          <Link href='https://github.com/daceze95' isExternal>
            GitHub
          </Link>
          .
        </Text>
      </Box>
      <Footer />
    </Box>
  );
};

export default About;
