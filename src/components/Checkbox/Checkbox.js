import React from "react";
import classes from "./Checkbox.module.css";

function Checkbox({ allChecker, setAllChecker }) {
  return (
    <div className={classes.checkboxDiv}>
      <input type="checkbox" id="checkBox" />
      <label htmlFor="checkBox" className={classes.check}>
        <div
          className={classes.checked}
          onClick={() => {
            if (allChecker) {
              setAllChecker(false);
            } else {
              setAllChecker(true);
            }
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 4.5L6.75 12.75L3 9"
              stroke="#0A0B10"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </label> 
    </div>
  );
}

export default Checkbox;
