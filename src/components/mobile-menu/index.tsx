import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

import "./mobilemenu.css";

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

type MenuProps = {
  show: boolean;
};

export const MobileMenu: React.FC<MenuProps> = (props) => {
  return (
    <nav className={`mobile-menu ${props.show && "toggle"}`}>
      <ul>
        <ActiveNavLink to="/" name="home" />
        <ActiveNavLink to="/about" name="about" />
        <ActiveNavLink to="/hotels" name="hotels" />
        <ActiveNavLink to="/contact" name="contact" />
      </ul>
    </nav>
  );
};

