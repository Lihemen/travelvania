import React, { useState } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import {
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaTwitter,
  FaBars,
} from "react-icons/fa";
import { MobileMenu } from "../mobile-menu";

import "./navbar.css";

interface Props extends NavLinkProps {
  to: string;
  name: string;
}

const ActiveNavLink: React.FC<Props> = ({ to, name }) => {
  return (
    <li>
      <NavLink
        to={to}
        className="navbar-link"
        style={({ isActive }) => (isActive ? { color: "#56BD97" } : {})}
      >
        {name}
      </NavLink>
    </li>
  );
};

export const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header>
      <div className="socials bm bp">
        <ul>
          <li>
            <a href="https://facebook.com/MrHilz">
              <FaFacebook className="fa-facebook" />
            </a>
          </li>
          <li>
            <a href="https://wa.me/+2347011056442">
              <FaWhatsapp className="fa-whatsapp" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/hemen_lan">
              <FaTwitter className="fa-twitter" />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/hemense-lan">
              <FaLinkedin className="fa-linkedin" />
            </a>
          </li>
        </ul>
        <p>
          <span>07011056442 </span>
          <span>info@travelvania.com</span>
        </p>
      </div>
      <nav className="navbar">
        <div className="logo">
          <NavLink to="/">Travelvania</NavLink>
        </div>

        <ul className="nav-links">
          <ActiveNavLink to="/" name="home" />
          <ActiveNavLink to="/hotels" name="hotels" />
          <ActiveNavLink to="/reviews" name="reviews" />
          <ActiveNavLink to="/auth" name="user" />
        </ul>

        <FaBars
          className="menu-btn"
          onClick={() => setShowMobileMenu((s) => !s)}
        />
      </nav>
      <MobileMenu show={showMobileMenu} />
    </header>
  );
};

