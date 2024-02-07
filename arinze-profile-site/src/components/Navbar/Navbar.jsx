import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Box,
  Image,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import Logo from '../../assets/arinzeEzeokwuegbuWhiteLogo.png';
import { NavItems as navLinks, NavContact } from './NavLinks';
import './Navbar.scss';

const Navbar = () => {
  const [activeDropDown, setActiveDropDown] = useState(false);

  const toggleDropDown = () => {
    setActiveDropDown(!activeDropDown);
  };

  const indicator = ({ isActive }) => {
    return {
      borderBottom: isActive ? '2px solid blue' : '',
    };
  };

  return (
    <Box
      pos='fixed'
      w='100%'
      zIndex='100'
      backdropFilter='auto'
      backdropBlur='8px'
      h={activeDropDown ? '100vh' : 'auto'}>
      <Box pointerEvents={activeDropDown ? 'none' : 'auto'}>
        <nav className='navbar navbar-expand-lg navbar-dark bg-blue-500 w-100'>
          <Box className='container-fluid'>
            <Image src={Logo} alt='logo' className='navbar-brand' />
            <button
              onClick={toggleDropDown}
              style={{ pointerEvents: 'auto' }}
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarTogglerDemo02'
              aria-controls='navbarTogglerDemo02'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <Box
              style={{ pointerEvents: 'auto' }}
              className='collapse navbar-collapse justify-content-end'
              id='navbarTogglerDemo02'>
              <UnorderedList className='navbar-nav'>
                {navLinks.map((navLink) => (
                  <ListItem
                    className='nav-item'
                    key={navLink.name}
                    pl={4}
                    listStyleType='none'>
                    <NavLink
                      className='nav-link text-end fs-4'
                      style={indicator}
                      aria-current='page'
                      to={navLink.path}>
                      {navLink.name}
                    </NavLink>
                  </ListItem>
                ))}
                <ListItem className='nav-item' pl={4} listStyleType='none'>
                  <NavLink
                    className='nav-link text-end fs-4'
                    style={{
                      md: { borderRadius: '10px', ...indicator },
                      lg: {
                        border: '1px solid gray',
                        borderRadius: '10px',
                        ...indicator,
                      },
                    }}
                    aria-current='page'
                    to={NavContact.path}>
                    {NavContact.name}
                  </NavLink>
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </nav>
      </Box>
    </Box>
  );
};

export default Navbar;
