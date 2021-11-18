import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Menu.module.scss";
interface menuProps {
  links: { to: string; text: string }[];
}

const Menu = ({ links }: menuProps) => {
  const [isOpen, setOpen] = useState(false);

  const menuClickHandler = () => {
    setOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <div className={classes.Menu__toggle} onClick={menuClickHandler}>
        {isOpen ? "x" : "="}
      </div>
      {isOpen ? (
        <div
          className={classes.Menu__links_container}
          onClick={menuClickHandler}
        >
          {links.map((link, index) => {
            return (
              <NavLink key={index} to={link.to}>
                {link.text}
              </NavLink>
            );
          })}
        </div>
      ) : null}

      {/* <span>{isOpen ? 'OPEN' : 'CLOSE'}</span> */}
    </React.Fragment>
  );
};

export default Menu;
