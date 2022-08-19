import React from "react";
import { FaTimes } from "react-icons/fa";
import { NavLink, NavLinkProps } from "react-router-dom";

import "./mobilemenu.css";

interface Props extends NavLinkProps {
  to: string;
  name: string;
  close: () => void;
}

const ActiveNavLink: React.FC<Props> = ({ to, name, close }) => {
  return (
    <li onClick={close}>
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
  close: () => void;
};

export const MobileMenu: React.FC<MenuProps> = (props) => {
  return (
    <nav className={`mobile-menu ${props.show && "toggle"}`}>
      <ul>
        <FaTimes onClick={props.close} className="close" />
        <ActiveNavLink to="/" name="home" close={props.close} />
        <ActiveNavLink to="/hotels" name="hotels" close={props.close} />
        <ActiveNavLink to="/about" name="about" close={props.close} />
        <ActiveNavLink to="/contact" name="contact" close={props.close} />
      </ul>
    </nav>
  );
};

