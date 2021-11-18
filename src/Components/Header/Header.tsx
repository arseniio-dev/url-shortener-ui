import React, { CSSProperties } from "react";
import { NavLink } from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimension";
import logo from "../../static/logo.svg";
import classes from "./Header.module.scss";
import Menu from "./Menu/Menu";
const Header = () => {
  const { width } = useWindowDimensions();

  const links = [
    { to: "/home", text: "Home" },
    { to: "/profile", text: "Profile" },
    { to: "/create", text: "Create" },
    { to: "/auth", text: "About" },
  ];

  const activeStyle: CSSProperties = {
    backgroundColor: "#0bf",
    color: "#222",
  };

  const navLinks = (
    <React.Fragment>
      {links.map((link, index) => {
        return (
          <NavLink
            key={index}
            to={link.to}
            style={(props) => {
              return props.isActive ? activeStyle : {};
            }}
          >
            {link.text}
          </NavLink>
        );
      })}
    </React.Fragment>
  );
  return (
    <div className={classes.Header}>
      <div className={classes.Header__logo}>
        <img src={logo} alt="shortener" />
      </div>
      <nav className={classes.Header__nav}>
        {width >= 820 ? navLinks : <Menu links={links} />}
      </nav>
    </div>
  );
};

export default Header;
