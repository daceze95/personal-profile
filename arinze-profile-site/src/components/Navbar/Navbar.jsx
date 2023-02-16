import React from "react";
import { NavLink } from "react-router-dom";
import { NavItems as navLinks, NavContact } from "./NavLinks";
import "./Navbar.scss";

const Navbar = () => {
	return (
    <div style={{width: "100%"}}>
      <header> 
        <img src="#" alt="logo" />
        
        <nav>
          <ul className="nav__link">
            {navLinks.map((anchor, id) => (
              <li>
                <NavLink to={anchor.path} key={id}>
                  {anchor.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <NavLink to={NavContact.path}><button>{NavContact.name}</button></NavLink>
      </header>
    </div>
	);
};

export default Navbar;
