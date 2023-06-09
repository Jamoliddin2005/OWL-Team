import React from "react";
import classes from "../LogOut/LogOut.module.css";

function ChangePassword({ setChangePasswordToggle }) {
  return (
    <div className={classes.ChangePassword}>
      <div className={classes.Withdrawal}>
        <div
          className={classes.close}
          onClick={() => setChangePasswordToggle(false)}
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
        <h2>Change password</h2>
        <p className={classes.topP}>
          You can change the password assigned to you to your personal.
        </p>

        <form
          className={classes.changePass}
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className={classes.inp}>
            <input type="password" placeholder="Create a password" />
          </div>
          <div className={classes.inp}>
            <input type="password" placeholder="Repeat password" />
          </div>
        </form>
        <div className={classes.buttons}>
          <button type="submit">Save</button>
          <button
            type="submit"
            onClick={() => {
              setChangePasswordToggle(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
