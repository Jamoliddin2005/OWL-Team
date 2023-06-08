import React from "react";
import classes from "./LogOut.module.css";
function LogOut({ setLogOutToggle }) {
  return (
    <div className={classes.LogOut}>
      <div
        className={classes.close}
        onClick={() => {
          setLogOutToggle(false);
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18"
            stroke="#999CB1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 6L18 18"
            stroke="#999CB1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h2>Sign out account</h2>
      <p>Are you sure you want to log out of your account.</p>
      <div className={classes.buttons}>
        <button>Confirm</button>
        <button
          onClick={() => {
            setLogOutToggle(false);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default LogOut;
