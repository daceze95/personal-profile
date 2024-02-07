import React from 'react';
import { Helmet } from 'react-helmet';
import { Heading, Box, Divider, Text } from '@chakra-ui/react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Pitch = () => {
  return (
    <Box className='portfolio' display='flex' flexDirection='column' h='100vh'>
      <Helmet>
        <title>Portfolio page</title>
      </Helmet>
      <Navbar />

      <Box className='hero' p={5} pt={[24, 20]}>
        <Box className='main_text'>
          <Heading as='h1' mb={4}>
            Elevator Pitch
          </Heading>
          <Divider mb={6} />
        </Box>

        <Text>
          Hi there! I'm Arinze Ezeokwuegbu, a seasoned full-stack developer with
          a passion for crafting innovative digital solutions. With over 4 years
          of hands-on experience in web development, I specialize in building
          responsive and scalable applications that delight users and drive
          business growth.
        </Text>

        <Text>
          My expertise spans across front-end technologies like React and
          Next.js, as well as back-end frameworks like Node.js and Spring Boot.
          Whether it's designing intuitive user interfaces or optimizing
          database performance, I thrive on tackling complex challenges and
          delivering high-quality results.
        </Text>

        <Text>
          I've successfully contributed to various projects, including Swift
          Rider a logistic web app, Totc E-learning platform, G-Hut a site that
          utilize Rawg.io api to display games of different genres, etc. As
          someone deeply committed to continuous learning, I stay up-to-date
          with the latest industry trends and technologies, ensuring that my
          solutions are always cutting-edge and effective.
        </Text>

        <Text>
          I'm excited about the opportunity to bring my skills and expertise to
          your organization, where I can contribute to building innovative
          solutions that make a real difference. Let's collaborate and create
          something amazing together!
        </Text>
      </Box>
      <Footer />
    </Box>
  );
};

export default Pitch;
