import React from "react";
import classes from "./NavbarMenu.module.css";
import { Link } from "react-router-dom";

function NavbarMenu({
  name,
  icon,
  toggle,
  setLogOutToggle,
  GetUrl,
  url,
  link,
  setChangePasswordToggle,
}) { 
 
  return (
    <li
      className={`${classes.NavbarMenu} ${
        name === "Log out" && classes.logOut 
      } ${link.toLowerCase() === url.toLowerCase() && classes.active}` }
      onClick={(e) => {
        GetUrl();
        name === "Log out" && setLogOutToggle(true);
        name === "Settings" && setChangePasswordToggle(true);
      }}
    >
      <Link
        to={link}
        onClick={(e) => {
          name === "Log out" && e.preventDefault();
          name === "Settings" && e.preventDefault();
        }}
      >
        {icon}
        {toggle && <h3>{name}</h3>}
      </Link>
    </li>
  );
}

export default NavbarMenu;
