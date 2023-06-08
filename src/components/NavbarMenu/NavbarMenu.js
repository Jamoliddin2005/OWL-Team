import React from "react";
import classes from "./NavbarMenu.module.css";
import { Link } from "react-router-dom";

function NavbarMenu({ name, icon, toggle, setLogOutToggle }) {
  return (
    <li
      className={`${classes.NavbarMenu} ${
        name === "Log out" && classes.logOut
      }`}
      onClick={(e) => {
        name === "Log out" && setLogOutToggle(true);
      }}
    >
      <Link
        to={name}
        onClick={(e) => {
          name === "Log out" && e.preventDefault();
        }}
      >
        {icon}
        {toggle && <h3>{name}</h3>}
      </Link>
    </li>
  );
}

export default NavbarMenu;
