import React from 'react';
import { Box, Text, Divider, Link } from '@chakra-ui/react';
import './Footer.scss';

const Footer = () => {
  const year = new Date().getFullYear().toString();
  const icon = [
    // {
    //   name: "bxl-facebook-circle",
    //   url: ""
    // },
    {
      name: 'bxl-twitter',
      url: 'https://twitter.com/EzeokwuegbuA',
    },
    {
      name: 'bxl-github',
      url: 'https://github.com/daceze95',
    },
    {
      name: 'bxl-linkedin-square',
      url: 'https://www.linkedin.com/in/arinze-ezeokwuegbu/',
    },
    {
      name: 'bxl-whatsapp',
      url: 'https://wa.me/+2348134014148',
    },
  ].reverse();

  return (
    <Box className='footerCtner' flex='1'>
      <Divider />
      <Box
        display='flex'
        flexDirection={[
          'column-reverse',
          'column-reverse',
          'column-reverse',
          'row',
        ]}
        justifyContent={['flex-start', 'space-between']}
        alignItems={['center', 'center', 'center', 'flex-start']}
        color='#94A3B8'
        paddingInline={2}>
        <Text
          className='footerText'
          mb='0'
          textAlign={['center', 'center', 'center', 'left']}>
          copyright&#64;{`${year} `}Arinze Ezeokwuegbu. All Rights Reserved.
        </Text>
        <Box className='iconBox' mb={['4', '0']}>
          {icon.map((icn, index) => {
            return (
              <Link
                to={icn.url}
                key={index}
                borderRadius='full'
                fontSize='1.5rem'
                isExternal
                mr={index === icon.length - 1 ? 0 : 4}>
                <i className={`bx ${icn.name}`}></i>
              </Link>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
