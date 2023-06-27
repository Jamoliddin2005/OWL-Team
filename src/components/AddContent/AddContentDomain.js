import React from "react";
import classes from "../LogOut/LogOut.module.css";

function AddContentDomain({ GetUrl, setAddContentDomainsToggle }) {
  return (
    <div className={`${classes.AddContent}`}>
      <div
        className={classes.close}
        onClick={() => {
            setAddContentDomainsToggle(false);
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
      <h2>Header example</h2>

      <p className={classes.topP}>Subtext example</p>
      <div>
        <form>
          <label htmlFor="exampleWebsite">Text example</label>
          <div className={classes.inputs}>
            <div className={`${classes.input} ${classes.inputSpan} httpsSpan`}>
              <span className={`${classes.spanAbsolute} httpsSpan`}>
                https://
              </span>
              <input type="text" placeholder="(Не обязательно)" />
            </div>
            <div className={`${classes.input} ${classes.inputSpan}`}>
              <span className={classes.spanAbsolute}>.</span>
              <input type="text" placeholder="Example.com" />
            </div>
          </div>
        </form>
        <div className={classes.buttons}>
          <button>Save</button>
          <button
            onClick={() => {
                setAddContentDomainsToggle(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddContentDomain;
