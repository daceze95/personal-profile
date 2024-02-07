import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react';

const Bio = ({displayState}) => {
  return (
    <Box
      pos='absolute'
      top='0'
      left='0'
      right='0'
      zIndex='5'
      backdropFilter='auto'
      backdropBlur='8px'
      p='10px'
      backgroundColor='#000000CC'
      h='100%'
      className={displayState ? 'slide-in' : 'slide-out'}
      overflowY='scroll'
      color='white'>
      <Box>
        <Heading as='h3' textAlign='center'>
          Bio
        </Heading>
        <Text>
          👨‍💻Software Engineer & Full-Stack Developer | 🎓 Chemistry Graduate | 🌍 Based in Lagos, Nigeria.
        </Text>
        <Text>
          🔧 Technical Skills: JavaScript, TypeScript, Node.js, Java, Spring
          Boot, React.js, Next.js, Git, GitHub, and more.
        </Text>
        <Text>
          💡 Passionate about problem-solving and crafting efficient solutions,
          I thrive on building robust backend systems and intuitive frontend
          interfaces.
        </Text>
        <Text>
          🌱 Constantly evolving my skills and embracing new technologies to
          stay at the forefront of the industry. 🤝 Strong communicator and
          natural leader, adept at collaborating within teams to deliver
          exceptional results.
        </Text>
        <Text>
          🎹 When not coding, you can find me exploring new hobbies like piano,
          honing my graphic design skills, or sharing knowledge through
          mentoring and public speaking.
        </Text>
        <Text>
          🚀 My mission is to empower others through technology and make a
          positive impact in the world.
        </Text>
      </Box>
    </Box>
  );
}

export default Bio