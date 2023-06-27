import React from "react";
import classes from "../LogOut/LogOut.module.css";
import axios from "axios";
import { HandleResponse } from "../../pages/utils";

function sendWithdrawalRequest(amount) {
  let data = {};
  if (amount == "") {
    HandleResponse({
      success: false,
      message: "Invalid parameters",
    });
  }
  data.sum = parseInt(amount);
  data.do = "createWithdrawRequest";
  data.coin = "ETH";
  axios
    .post("/profile", data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then(function (resp) {
      HandleResponse(resp.data);
      if (resp.data.success) {
        setTimeout(function () {
          window.location.reload();
        }, 3000);
      }
    });
}

function Withdrawal({ setWithdrawalToggle, account }) {
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
        <span>$</span> {account.balance ? account.balance : 0.0}
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
          <button
            type="submit"
            onClick={() => {
              let amount = document.querySelector("#amount").value;
              sendWithdrawalRequest(amount);
              setWithdrawalToggle(false);
            }}
          >
            Confirm
          </button>
          <button type="submit" onClick={() => setWithdrawalToggle(false)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Withdrawal;
