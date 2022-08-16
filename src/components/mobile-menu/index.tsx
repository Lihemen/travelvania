import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

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
        style={({ isActive }) => (isActive ? { color: "red" } : {})}
      >
        {name}
      </NavLink>
    </li>
  );
};

export const MobileMenu = () => {
  return (
    <aside className="more">
      <nav>
        <ul>
          <ActiveNavLink to="/" name="home" />
          <ActiveNavLink to="/about" name="about" />
          <ActiveNavLink to="/hotels" name="hotels" />
          <ActiveNavLink to="/contact" name="contact" />
        </ul>
      </nav>
    </aside>
  );
};

