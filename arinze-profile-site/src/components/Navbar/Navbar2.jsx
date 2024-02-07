// import React from 'react';
// import {
//   RadioGroup,
//   Stack,
//   Radio,
//   Button,
//   Drawer,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerHeader,
//   DrawerBody,
//   Flex,
//   Box,
//   Image,
//   Text,
//   useDisclosure,
// } from '@chakra-ui/react';
// // import { NavLink } from 'react-router-dom';
// // import { NavItems as navLinks, NavContact } from './NavLinks';
// // import './Navbar.scss';
// // import { Navbar2 } from './Navbar2.jsx';

// import { NavLink } from 'react-router-dom';
// import { NavItems as navLinks, NavContact } from './NavLinks';
// import { FaBars, FaTimes } from 'react-icons/fa';

// export function Navbar2({ image }) {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [placement, setPlacement] = React.useState('right');

//   const [click, setClick] = React.useState(false);
//   const handleClick = () => setClick(!click);


//   return (
//     <>
//       <Box
//         display='flex'
//         w='100%'
//         alignItems='center'
//         flexDirection='row'
//         justifyContent='space-between'
//         mb='4'>
//         <Box marginRight='auto'>
//           <Image src={image} alt='logo' />
//         </Box>

//         <nav className={click ? 'navCtn__link active' : 'navCtn__link'}>
//           <ul className='nav__link'>
//             {navLinks.map((anchor, id) => (
//               <li key={id}>
//                 <NavLink to={anchor.path}>{anchor.name}</NavLink>
//               </li>
//             ))}
//             <NavLink to={NavContact.path}>
//               <li>
//                 <button>{NavContact.name}</button>
//               </li>
//             </NavLink>
//           </ul>
//         </nav>
//       </Box>

//       {onOpen && <FaBars size={30} className='hamburger' onClick={onOpen} />}

//       <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerHeader borderBottomWidth='1px'>
//             {isOpen && (
//               <FaTimes size={30} className='hamburger' onClick={onClose} />
//             )}
//           </DrawerHeader>
//           <DrawerBody>
//             <nav className={click ? 'navCtn__link active' : 'navCtn__link'}>
//               <ul className='nav__link'>
//                 {navLinks.map((anchor, id) => (
//                   <li key={id}>
//                     <NavLink to={anchor.path}>{anchor.name}</NavLink>
//                   </li>
//                 ))}
//                 <NavLink to={NavContact.path}>
//                   <li>
//                     <button>{NavContact.name}</button>
//                   </li>
//                 </NavLink>
//               </ul>
//             </nav>
//           </DrawerBody>
//         </DrawerContent>
//       </Drawer>
//     </>
//   );
// }

// // const Navbar = () => {
// //   const [click, setClick] = React.useState(false);
// //   const handleClick = () => setClick(!click);

// //   return (
// //     <header>
// //       {/* <img src={Logo} alt='logo' /> */}
// //       <Navbar2 image={Logo} />

// //       {/* {click ? (
// //         <FaTimes size={30} className='hamburger' onClick={handleClick} />
// //       ) : (
// //         <FaBars size={30} className='hamburger' onClick={handleClick} />
// //       )}

// //       <nav className={click ? 'navCtn__link active' : 'navCtn__link'}>
// //         <ul className='nav__link'>
// //           {navLinks.map((anchor, id) => (
// //             <li key={id}>
// //               <NavLink to={anchor.path}>{anchor.name}</NavLink>
// //             </li>
// //           ))}
// //           <NavLink to={NavContact.path}>
// //             <li>
// //               <button>{NavContact.name}</button>
// //             </li>
// //           </NavLink>
// //         </ul>
// //       </nav> */}
// //     </header>
// //     // </div>
// //   );
// // };
