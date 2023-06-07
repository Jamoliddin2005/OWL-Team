import React from "react";
import classes from "./NavbarMenu.module.css";
import { Link } from "react-router-dom";

function NavbarMenu({ name, icon, toggle }) {
  return (
    <li className={classes.NavbarMenu}>
      <Link to={name}>
        {icon}
        {toggle && <h3>{name}</h3>}
      </Link>
    </li>
  );
}

export default NavbarMenu;
