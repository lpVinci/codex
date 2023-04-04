import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="containerNav">
      <ul>
        <li>
          <NavLink className="home a" to="/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink className="about a" to="/about">
            ABOUT ME
          </NavLink>
        </li>
        <li>
          <NavLink className="contact a" to="/contact">
            CONTACT
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
