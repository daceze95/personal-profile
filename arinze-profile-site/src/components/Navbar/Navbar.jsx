import React from "react";
import { NavLink } from "react-router-dom";
import { NavItems as navLinks, NavContact } from "./NavLinks"; 
import { FaBars, FaTimes } from "react-icons/fa"
import "./Navbar.scss";

const Navbar = () => {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);

	return (
    // <div style={{width: "100%"}}>
      <header> 
        <img src="#" alt="logo" />
        
        {click ? <FaTimes size={30} className="hamburger" onClick={handleClick}/> : <FaBars size={30} className="hamburger" onClick={handleClick}/>}

        <nav className={click ? "navCtn__link active" : "navCtn__link"}>
          <ul className="nav__link">
            {navLinks.map((anchor, id) => (
              <li key={id}>
                <NavLink to={anchor.path} >
                  {anchor.name}
                </NavLink>
              </li>
            ))}
            <NavLink to={NavContact.path}>
              <li><button>{NavContact.name}</button></li>
            </NavLink>
          </ul>
        </nav>
      </header>
    // </div>
	);
};

export default Navbar;
