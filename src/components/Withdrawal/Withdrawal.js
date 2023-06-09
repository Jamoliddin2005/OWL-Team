import React from "react";
import classes from "../LogOut/LogOut.module.css";

function Withdrawal({ setWithdrawalToggle }) {
  return (
    <div className={classes.Withdrawal}>
      <div className={classes.close} onClick={() => setWithdrawalToggle(false)}>
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
      <h2>Withdrawal</h2>
      <p className={classes.topP}>Available balance</p>
      <h1>
        <span>$</span> 300.25
      </h1>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className={classes.inp}>
          <label htmlFor="amount">Amount</label>
          <input type="text" name="" id="amount" placeholder="Enter amount" />
        </div>
        <div className={classes.inp}>
          <label htmlFor="eth">ETH address</label>
          <input
            type="text"
            name=""
            id="eth"
            placeholder="0xb794f5ea0ba39494ce839613fffba74279579268"
          />
        </div>
        <div className={classes.important}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM10 5C10 5.55228 9.55229 6 9 6C8.44771 6 8 5.55228 8 5C8 4.44772 8.44771 4 9 4C9.55229 4 10 4.44772 10 5ZM10 14V8H8V14H10Z"
              fill="#999CB1"
            />
          </svg>
          <p>
            Make sure the address is correct. In case of an error there is no
            refund. You can change the address in your profile
          </p>
        </div>

        <div className={classes.buttons}>
          <button type="submit">Confirm</button>
          <button type="submit" onClick={() => setWithdrawalToggle(false)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Withdrawal;
