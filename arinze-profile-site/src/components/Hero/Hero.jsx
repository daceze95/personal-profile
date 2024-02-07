import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import {
  Box,
  Image,
  Text,
  Flex,
  Heading,
  Show,
  Button,
} from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import mypic from '../../assets/Arinze-Pics.png';
import Bio from './Bio.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import Skills from '../Skills/Skills.jsx';
import './Hero.scss';
import Footer from '../Footer/Footer.jsx';

const Hero = () => {
  const [display, setDisplay] = useState(false);

  return (
    <Box w='100%' h={['auto', '100vh']} boxSizing='border-box'>
      <Navbar />
      <Flex
        flexDirection='column'
        style={{ background: '#000' }}
        pt={[24, 20, 20, 4, 4]}
        paddingInline={[4, 10]}>
        <Box
          display='flex'
          flexDirection={['column', 'column', 'column', 'column', 'row']}
          alignItems='center'
          justifyContent='space-between'
          spacing={5}>
          <Box p={[0, 4]} color='#CCC' w={['100%', 'auto']}>
            <Text fontSize={['xl']}>👋 My name is</Text>
            <Heading as='h1' fontSize={['xx-large', 'xx-large', 'xxx-large']}>
              Arinze Ezeokwuegbu
            </Heading>
            <Box
              display='flex'
              alignItems='center'
              justifyContent='flex-start'
              fontSize={['large', 'x-large', 'xx-large']}>
              I am a{' '}
              <TypeAnimation
                sequence={[
                  'Full Stack Engineer', // Types 'One'
                  2000, // Waits 1s
                  'Tech Enthusiast', // Deletes 'One' and types 'Two'
                  2000, // Waits 2s
                  'Creative Problem Solver',
                  2000,
                ]}
                wrapper='div'
                cursor={true}
                repeat={Infinity}
                style={{ color: '#00f', paddingLeft: '2px' }}
              />
            </Box>
            <Link to='/contact'>
              <Button
                variant='outline'
                leftIcon={<EmailIcon />}
                colorScheme='twitter'
                size={['md', 'md', 'md', 'lg']}
                mt={5}
                border='2px'
                borderColor='twitter.500'>
                Let's Talk 🤝
              </Button>
            </Link>
          </Box>
          <Box
            pos='relative'
            h='auto'
            boxSize={['auto', 'sm', 'xl']}
            onMouseOver={() => setDisplay(true)}
            onMouseOut={() => setDisplay(false)}
            my={[4, 0]}
            transition='ease-in-out'
            overflow='hidden'
            cursor='pointer'>
            <Image src={mypic} alt='Arinze Ezeokwuegbu' boxSize='fit-content' />
            <Bio displayState={display} />
          </Box>
        </Box>
        <Box flex={1} mb={2}>
          <Skills />
        </Box>
      </Flex>
      <Show>
        <Footer />
      </Show>
    </Box>
  );
};

export default Hero;
