import React from "react";
import classes from "./Profile.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { HandleResponse } from "../utils";
import Loading from "../../components/Loading/Loading";

function saveWallet(address) {
  let data = {};
  data.do = "saveWallets";
  data.walletEth = address;
  axios
    .post("/profile", data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then(function (resp) {
      HandleResponse(resp.data);
    });
}

const Profile = ({ toggle, setWithdrawalToggle, GetUrl, account }) => {
  const [transaction, setTransactions] = useState([]);
  const [transactionsLoading, setTransactionsLoading] = useState(true);
  useEffect(() => {
    let el;
    let tempTrans = [];
    setTransactionsLoading(true);
    axios
      .get("https://owl-panel.com/api/v2/getTransactions")
      .then(function (resp) {
        for (let i = 0; i < resp.data.length; i++) {
          el = resp.data[i];
          el.transactionType = "Income";
          tempTrans.push(el);
        }
        axios
          .get("https://owl-panel.com/api/v2/getWithdrawals")
          .then(function (resp) {
            for (let i = 0; i < resp.data.length; i++) {
              el = resp.data[i];
              el.transactionType = "Withdrawal";
              tempTrans.push(el);
            }
            setTransactionsLoading(false);
          });
      });
    setTransactions(
      tempTrans 
    ); 
  }, []);

  const [filters, setFilters] = useState("All");

  GetUrl();

  transaction.sort(
    (a, b) =>
      (new Date(b.date).getTime() || -Infinity) -
      (new Date(a.date).getTime() || -Infinity)
  )
 
  function FilterFunct(fillName) {
    if (fillName === "All") {
      return transaction;
    } else if (fillName === "Withdrawal") {
      return transaction.filter(
        (prod) => prod.transactionType === "Withdrawal"
      );
    } else {
      return transaction.filter((prod) => prod.transactionType === "Income");
    }
  }

  let Prod = FilterFunct(filters);

  return (
    <div className={classes.classes}>
      <div className={toggle ? "container_On" : "container_Off"}>
        <div className={classes.row}>
          <div className={classes.top}>
            <div className={classes.balance}>
              <div className={classes.balance_top}>
                <div>
                  <h4>Balance</h4>
                  <h3>
                    <span className={classes.dollar}>$</span>{" "}
                    {account.balance ? account.balance : 0}
                  </h3>
                </div>
                <div>
                  <button onClick={() => setWithdrawalToggle(true)}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.84494 13.0402L4.14426 11.6796C3.86545 12.5092 3.71436 13.3974 3.71436 14.3209C3.71436 18.897 7.424 22.6067 12.0001 22.6067C16.5761 22.6067 20.2858 18.897 20.2858 14.3209C20.2858 13.3974 20.1347 12.5092 19.8559 11.6796L18.1552 13.0402C18.2408 13.4537 18.2858 13.8821 18.2858 14.3209C18.2858 17.7925 15.4716 20.6067 12.0001 20.6067C8.52857 20.6067 5.71436 17.7925 5.71436 14.3209C5.71436 13.8821 5.75934 13.4537 5.84494 13.0402Z"
                        fill="#0A0B10"
                      />
                      <path
                        d="M12 2L11.3989 1.20082L12 0.748716L12.6011 1.20082L12 2ZM13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13L13 13ZM4.89891 6.08971L11.3989 1.20082L12.6011 2.79918L6.10109 7.68807L4.89891 6.08971ZM12.6011 1.20082L19.1011 6.08971L17.8989 7.68807L11.3989 2.79918L12.6011 1.20082ZM13 2L13 13L11 13L11 2L13 2Z"
                        fill="#0A0B10"
                      />
                    </svg>
                    <p>Withdrawal</p>
                  </button>
                </div>
              </div>
              <div className={classes.stick}></div>
              <div className={classes.balance_bottom}>
                <div className={classes.balance_bottom_left}>
                  <div>
                    <p>Income all time</p>
                    <h4>
                      $ {account.incomeAllTime ? account.incomeAllTime : 0}
                    </h4>
                  </div>
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.181 22.6946L9.62949 20.6534C9.2213 21.8607 9 23.1541 9 24.4992C9 31.1266 14.3726 36.4992 21 36.4992C27.6274 36.4992 33 31.1266 33 24.4992C33 23.1541 32.7787 21.8607 32.3705 20.6534L29.819 22.6946C29.9377 23.2776 30 23.8811 30 24.4992C30 29.4697 25.9706 33.4992 21 33.4992C16.0294 33.4992 12 29.4697 12 24.4992C12 23.8811 12.0623 23.2776 12.181 22.6946Z"
                      fill="#FF6B3C"
                    />
                    <path
                      d="M21 22.75L20.063 23.9213L21 24.6709L21.937 23.9213L21 22.75ZM22.5 7C22.5 6.17157 21.8284 5.5 21 5.5C20.1716 5.5 19.5 6.17157 19.5 7L22.5 7ZM11.313 16.9213L20.063 23.9213L21.937 21.5787L13.187 14.5787L11.313 16.9213ZM21.937 23.9213L30.687 16.9213L28.813 14.5787L20.063 21.5787L21.937 23.9213ZM22.5 22.75L22.5 7L19.5 7L19.5 22.75L22.5 22.75Z"
                      fill="#FF6B3C"
                    />
                  </svg>
                </div>
                <div className={classes.stick}></div>
                <div className={classes.balance_bottom_right}>
                  <p>Withdrawal address</p>
                  <input
                    type="text"
                    placeholder={
                      account.withdrawalAddress
                        ? account.withdrawalAddress
                        : "ETH address"
                    }
                    id={"withdrawalAddress"}
                  />
                  <button
                    onClick={() => {
                      let address =
                        document.querySelector("#withdrawalAddress").value;
                      saveWallet(address);
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 7.11111C0 3.7589 0 2.0828 1.0414 1.0414C2.0828 0 3.7589 0 7.11111 0H10.4808C11.4497 0 11.9341 0 12.3697 0.180434C12.8053 0.360867 13.1479 0.703422 13.833 1.38853L14.6115 2.16703C15.2966 2.85213 15.6391 3.19469 15.8196 3.63029C16 4.0659 16 4.55034 16 5.51924V8.88889C16 12.2411 16 13.9172 14.9586 14.9586C14.4291 15.4881 13.7354 15.7484 12.7407 15.8763V14.2222L12.7407 14.1492C12.7408 13.374 12.7409 12.6774 12.6651 12.1136C12.5823 11.4981 12.3902 10.8666 11.8729 10.3493C11.3556 9.83205 10.7242 9.63989 10.1086 9.55714C9.54483 9.48134 8.84828 9.4814 8.07302 9.48148L8 9.48148H7.11111L7.0381 9.48148C6.26284 9.4814 5.56628 9.48134 5.00248 9.55714C4.38695 9.63989 3.75546 9.83205 3.2382 10.3493C2.72094 10.8666 2.52878 11.4981 2.44603 12.1136C2.37023 12.6774 2.37029 13.3739 2.37037 14.1492L2.37037 14.2222V15.7022C1.82592 15.548 1.39671 15.3139 1.0414 14.9586C0 13.9172 0 12.2411 0 8.88889V7.11111ZM10.3704 14.2222V15.9958C9.91643 16 9.42402 16 8.88889 16H7.11111C6.20551 16 5.42223 16 4.74074 15.9795V14.2222C4.74074 13.3507 4.74326 12.8162 4.79526 12.4294C4.84097 12.0895 4.90598 12.0327 4.91369 12.026L4.91431 12.0254L4.91487 12.0248C4.9216 12.0171 4.97836 11.9521 5.31833 11.9064C5.70511 11.8544 6.23955 11.8519 7.11111 11.8519H8C8.87156 11.8519 9.406 11.8544 9.79278 11.9064C10.1327 11.9521 10.1895 12.0171 10.1962 12.0248L10.1968 12.0254L10.1974 12.026C10.2051 12.0327 10.2701 12.0895 10.3159 12.4294C10.3679 12.8162 10.3704 13.3507 10.3704 14.2222ZM3.55556 3.25926C2.901 3.25926 2.37037 3.78989 2.37037 4.44444C2.37037 5.099 2.901 5.62963 3.55556 5.62963H8C8.65456 5.62963 9.18519 5.099 9.18519 4.44444C9.18519 3.78989 8.65456 3.25926 8 3.25926H3.55556Z"
                        fill="#0A0B10"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className={classes.subjects}>
              <div className={classes.subject}>
                <div>
                  <h3>{account.walletStolen ? account.walletStolen : 0.0}</h3>
                  <p>Wallet Stolen</p>
                </div>
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="35"
                    cy="35"
                    r="35"
                    fill="#FF6B3C"
                    fillOpacity="0.2"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.2119 20.8787C18.3333 21.7574 18.3333 23.1716 18.3333 26V44C18.3333 46.8284 18.3333 48.2426 19.2119 49.1213C20.0906 50 21.5048 50 24.3333 50H45.6666C48.495 50 49.9092 50 50.7879 49.1213C51.6666 48.2426 51.6666 46.8284 51.6666 44V43.3333H41.6666C40.7373 43.3333 40.2726 43.3333 39.8862 43.2565C38.2995 42.9408 37.0591 41.7005 36.7434 40.1137C36.6666 39.7273 36.6666 39.2626 36.6666 38.3333C36.6666 37.404 36.6666 36.9394 36.7434 36.553C37.0591 34.9662 38.2995 33.7258 39.8862 33.4102C40.2726 33.3333 40.7373 33.3333 41.6666 33.3333H51.6666V26C51.6666 23.1716 51.6666 21.7574 50.7879 20.8787C49.9092 20 48.495 20 45.6666 20H24.3333C21.5048 20 20.0906 20 19.2119 20.8787ZM26.6666 26.8333C25.8382 26.8333 25.1666 27.5049 25.1666 28.3333C25.1666 29.1618 25.8382 29.8333 26.6666 29.8333H31.6666C32.495 29.8333 33.1666 29.1618 33.1666 28.3333C33.1666 27.5049 32.495 26.8333 31.6666 26.8333H26.6666Z"
                    fill="#FF6B3C"
                  />
                  <path
                    d="M43.3334 38.3333H41.6667"
                    stroke="#FF6B3C"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className={classes.subject}>
                <div>
                  <h3>{account.tokenStolen ? account.tokenStolen : 0.0}</h3>
                  <p>Token Stolen</p>
                </div>
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="35"
                    cy="35"
                    r="35"
                    fill="#FF6B3C"
                    fillOpacity="0.2"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M33.5478 14.0248C31.6138 14.2173 30.5095 14.4187 29.0516 14.8449C25.7489 15.8105 22.8787 17.492 20.3752 19.9281C16.959 23.2524 14.9213 27.2024 14.1905 31.9167C13.9543 33.4399 13.9343 36.3417 14.1497 37.8282C14.7123 41.7103 16.2283 45.2114 18.645 48.2101C18.9927 48.6416 19.7713 49.4754 20.3752 50.0631C22.1004 51.7418 23.6891 52.8572 25.8155 53.8826C28.4004 55.1291 30.7181 55.7411 33.6506 55.9517C36.9098 56.1857 40.4561 55.5628 43.4381 54.2324C46.078 53.0546 48.0866 51.6408 50.1453 49.511C55.6644 43.8018 57.4537 35.4514 54.7746 27.9054C54.1138 26.044 52.9906 23.9742 51.7258 22.2867C50.962 21.2677 49.2259 19.4841 48.1686 18.6321C45.2495 16.2798 41.8058 14.7739 38.0655 14.214C37.0477 14.0616 34.3241 13.9476 33.5478 14.0248ZM36.4109 18.9877C40.3805 19.364 43.8611 21.0507 46.6197 23.9351C52.5455 30.131 52.5431 39.8598 46.6141 46.0618C44.1001 48.6914 41.1047 50.263 37.4048 50.8934C36.2473 51.0907 33.7706 51.0907 32.5722 50.8934C29.9193 50.4568 27.4344 49.4094 25.3168 47.8353C24.448 47.1894 22.7351 45.4633 22.0676 44.5609C20.5417 42.498 19.5346 40.0897 19.0805 37.4177C18.8864 36.276 18.8856 33.6984 19.079 32.5735C19.5405 29.8873 20.5428 27.4918 22.0676 25.4304C22.7351 24.528 24.448 22.8018 25.3168 22.156C28.5501 19.7525 32.5196 18.6189 36.4109 18.9877ZM33.8081 21.4558C30.4044 21.7363 27.0329 23.4388 24.7831 26.0132C19.3587 32.2197 20.5957 41.6963 27.4284 46.2791C34.2285 50.8399 43.4693 48.3869 47.1567 41.0419C48.7377 37.8927 49.0079 34.0749 47.887 30.7237C46.3588 26.155 42.5363 22.7203 37.8506 21.7056C37.1538 21.5547 35.2281 21.3484 34.7885 21.3777C34.6934 21.384 34.2523 21.4191 33.8081 21.4558ZM38.0657 31.9579L41.1041 34.9959L38.0447 38.054L34.9853 41.1122L31.9258 38.054L28.8665 34.9959L31.9049 31.9579C33.5761 30.287 34.9622 28.9198 34.9853 28.9198C35.0084 28.9198 36.3945 30.287 38.0657 31.9579Z"
                    fill="#FF6B3C"
                  />
                </svg>
              </div>
              <div className={classes.subject}>
                <div>
                  <h3>{account.nftStolen ? account.nftStolen : 0.0}</h3>
                  <p>NFT Stolen</p>
                </div>
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="35"
                    cy="35"
                    r="35"
                    fill="#FF6B3C"
                    fillOpacity="0.2"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M25.5752 20.0304L19.9982 23.2528C18.1428 24.3249 17 26.3051 17 28.4479L17 35.0006L17.0001 41.5487C17.0001 43.694 18.1455 45.6761 20.0043 46.7472L25.8598 50.1215L31.999 53.4673C33.7565 54.4251 35.8759 54.4435 37.6497 53.5163L44.2215 50.0812L49.9986 46.7478C51.8557 45.6762 52.9999 43.695 52.9999 41.5509V34.4529L53 28.4461C53 26.3042 51.8582 24.3247 50.0042 23.2523L44.434 20.0304L37.786 16.501C36.019 15.5629 33.9008 15.5672 32.1377 16.5123L25.5752 20.0304ZM25.4443 30.3841C25.6676 30.6009 25.9469 31.1684 26.7834 33.1047C27.3648 34.4505 27.8773 35.6124 27.9223 35.6868C27.9786 35.7799 28.0051 35.0519 28.007 33.3575C28.0096 31.0384 28.0194 30.8776 28.1714 30.6377C28.6665 29.8559 29.8337 29.8905 30.2648 30.6999C30.4473 31.0426 30.4477 31.0505 30.4477 35.0006C30.4477 38.9507 30.4473 38.9586 30.2648 39.3013C29.9823 39.8315 29.7115 39.9302 28.5388 39.9298C27.4473 39.9294 27.1705 39.8373 26.8801 39.3775C26.7963 39.245 26.2572 38.0453 25.6819 36.7116L24.636 34.2866L24.5954 36.7116C24.5568 39.0169 24.5464 39.1474 24.3847 39.3572C23.8112 40.1017 22.7696 40.1199 22.3005 39.3936C22.1166 39.109 22.1163 39.1024 22.0914 35.2745C22.0777 33.1657 22.0893 31.2893 22.1172 31.1046C22.1706 30.7509 22.5344 30.2692 22.8433 30.1431C22.9352 30.1056 23.4945 30.083 24.0862 30.0927L25.1621 30.1103L25.4443 30.3841ZM39.5316 30.2272C40.2761 30.6642 40.3136 31.7163 39.6022 32.2049C39.3569 32.3733 39.2722 32.3802 37.1737 32.4036L34.9994 32.4278V33.4404V34.4529L36.4422 34.453C37.6551 34.4531 37.9293 34.475 38.1636 34.59C38.6083 34.8082 38.779 35.0958 38.779 35.6266C38.779 36.1574 38.6083 36.4449 38.1636 36.6632C37.9293 36.7782 37.6551 36.8 36.4422 36.8001L34.9994 36.8003L34.9993 37.9152C34.9992 38.8206 34.9724 39.0814 34.857 39.3025C34.4199 40.1402 33.1405 40.1402 32.7034 39.3025C32.5736 39.0539 32.5612 38.681 32.5612 35.0006C32.5612 30.5087 32.5484 30.6174 33.1217 30.2488C33.3961 30.0722 33.4166 30.0711 36.3323 30.0715C39.117 30.0717 39.2802 30.0797 39.5316 30.2272ZM48.0058 30.2169C48.3963 30.4179 48.6055 30.7886 48.598 31.2663C48.5915 31.6821 48.4465 31.9361 48.0547 32.218C47.8673 32.3529 47.6856 32.3837 46.9462 32.4058L46.0618 32.4321L46.0374 35.7703C46.0133 39.0832 46.0117 39.1107 45.8289 39.3936C45.7276 39.5504 45.5209 39.7352 45.3696 39.8044C44.784 40.0719 44.0812 39.8927 43.7588 39.3936C43.576 39.1106 43.5745 39.0838 43.5511 35.7703L43.5275 32.4322L42.6424 32.4058C41.9021 32.3837 41.7205 32.3529 41.533 32.218C41.1347 31.9315 40.983 31.6667 40.983 31.2586C40.983 30.7897 41.1991 30.414 41.582 30.2169C41.8432 30.0825 42.0925 30.0711 44.7939 30.0711C47.4953 30.0711 47.7446 30.0825 48.0058 30.2169Z"
                    fill="#FF6B3C"
                  />
                </svg>
              </div>
              <div className={classes.subject}>
                <div>
                  <h3>{account.daysAlongTeam}</h3>
                  <p>Day in Team</p>
                </div>
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="35"
                    cy="35"
                    r="35"
                    fill="#FF6B3C"
                    fillOpacity="0.2"
                  />
                  <path
                    d="M35 23.5C35 23.2624 35 23.1436 35.0769 23.0698C35.1539 22.996 35.2692 23.0008 35.4999 23.0104C37.4328 23.091 39.3203 23.6379 41 24.6077C42.8242 25.6609 44.3391 27.1758 45.3923 29C46.4455 30.8242 47 32.8936 47 35C47 37.1064 46.4455 39.1758 45.3923 41C44.3391 42.8242 42.8242 44.3391 41 45.3923C39.1758 46.4455 37.1064 47 35 47C32.8936 47 30.8242 46.4455 29 45.3923C27.3203 44.4225 25.9029 43.0614 24.8667 41.4277C24.743 41.2327 24.6812 41.1353 24.7066 41.0317C24.7321 40.9282 24.8349 40.8688 25.0407 40.75L34.75 35.1443C34.872 35.0739 34.933 35.0387 34.9665 34.9807C35 34.9226 35 34.8522 35 34.7113V23.5Z"
                    fill="#FF6B3C"
                  />
                  <circle
                    cx="35"
                    cy="35"
                    r="17.5"
                    stroke="#FF6B3C"
                    strokeWidth="3"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className={classes.bottom}>
            <div className={classes.filtr}>
              <h3>Last Transactions</h3>
              <div>
                <button
                  className={filters === "All" ? classes.active : ""}
                  onClick={() => setFilters("All")}
                >
                  All
                </button>
                <button
                  className={filters === "Withdrawal" ? classes.active : ""}
                  onClick={() => setFilters("Withdrawal")}
                >
                  Withdrawal
                </button>
                <button
                  className={filters === "Income" ? classes.active : ""}
                  onClick={() => setFilters("Income")}
                >
                  Income
                </button>
              </div>
            </div>
            <div className={classes.titles}>
              <div className={classes.id}>
                <span>ID</span>
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.86603 7.5C5.48112 8.16667 4.51887 8.16667 4.13397 7.5L0.669873 1.5C0.284973 0.833333 0.766098 5.89981e-08 1.5359 1.26296e-07L8.4641 7.31979e-07C9.2339 7.99277e-07 9.71503 0.833334 9.33013 1.5L5.86603 7.5Z"
                    fill="#4C4E5E"
                  />
                </svg>
              </div>
              <div className={classes.transaction}>
                <span>Transaction</span>
              </div>
              <div className={classes.chainname}>
                <span>Chain name</span>
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.86603 7.5C5.48112 8.16667 4.51887 8.16667 4.13397 7.5L0.669873 1.5C0.284973 0.833333 0.766098 5.89981e-08 1.5359 1.26296e-07L8.4641 7.31979e-07C9.2339 7.99277e-07 9.71503 0.833334 9.33013 1.5L5.86603 7.5Z"
                    fill="#4C4E5E"
                  />
                </svg>
              </div>
              <div className={classes.date}>
                <span>Date</span>
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.86603 7.5C5.48112 8.16667 4.51887 8.16667 4.13397 7.5L0.669873 1.5C0.284973 0.833333 0.766098 5.89981e-08 1.5359 1.26296e-07L8.4641 7.31979e-07C9.2339 7.99277e-07 9.71503 0.833334 9.33013 1.5L5.86603 7.5Z"
                    fill="#4C4E5E"
                  />
                </svg>
              </div>
              <div className={classes.amount}>
                <span>Amount</span>
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.86603 7.5C5.48112 8.16667 4.51887 8.16667 4.13397 7.5L0.669873 1.5C0.284973 0.833333 0.766098 5.89981e-08 1.5359 1.26296e-07L8.4641 7.31979e-07C9.2339 7.99277e-07 9.71503 0.833334 9.33013 1.5L5.86603 7.5Z"
                    fill="#4C4E5E"
                  />
                </svg>
              </div>
              <div className={classes.status}>
                <span>Status</span>
              </div>
            </div>
            <div className={classes.data}>
              {transactionsLoading ? (
                <Loading size={0.7} />
              ) : (
                Prod.map((trans, idx) => {
                  return (
                    <div className={classes.data_item} key={idx}>
                      <div className={classes.data_item_div}>
                        <div className={classes.data_id}>
                          <span>{trans.id}</span>
                        </div>
                      </div>
                      <div className={classes.data_item_div}>
                        <div className={classes.data_transaction}>
                          {trans.transactionType === "Withdrawal" ? (
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.59653 17.5438L7.04067 15.4991C6.69053 16.4897 6.5 17.5556 6.5 18.6661C6.5 23.9128 10.7533 28.1661 16 28.1661C21.2467 28.1661 25.5 23.9128 25.5 18.6661C25.5 17.5556 25.3095 16.4897 24.9593 15.4991L22.4035 17.5438C22.4669 17.9084 22.5 18.2834 22.5 18.6661C22.5 22.2559 19.5899 25.1661 16 25.1661C12.4101 25.1661 9.5 22.2559 9.5 18.6661C9.5 18.2834 9.53308 17.9084 9.59653 17.5438Z"
                                fill="white"
                              />
                              <path
                                d="M16.0002 5.33337L15.0631 4.16207L16.0002 3.41244L16.9372 4.16207L16.0002 5.33337ZM17.5002 17.3334C17.5002 18.1618 16.8286 18.8334 16.0002 18.8334C15.1717 18.8334 14.5002 18.1618 14.5002 17.3334L17.5002 17.3334ZM8.39645 9.4954L15.0631 4.16207L16.9372 6.50468L10.2705 11.838L8.39645 9.4954ZM16.9372 4.16207L23.6039 9.4954L21.7298 11.838L15.0631 6.50468L16.9372 4.16207ZM17.5002 5.33337L17.5002 17.3334L14.5002 17.3334L14.5002 5.33337L17.5002 5.33337Z"
                                fill="white"
                              />
                            </svg>
                          ) : trans.transactionType === "Income" ? (
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.59653 17.5438L7.04067 15.4991C6.69053 16.4897 6.5 17.5556 6.5 18.6661C6.5 23.9128 10.7533 28.1661 16 28.1661C21.2467 28.1661 25.5 23.9128 25.5 18.6661C25.5 17.5556 25.3095 16.4897 24.9593 15.4991L22.4035 17.5438C22.4669 17.9084 22.5 18.2834 22.5 18.6661C22.5 22.2559 19.5899 25.1661 16 25.1661C12.4101 25.1661 9.5 22.2559 9.5 18.6661C9.5 18.2834 9.53308 17.9084 9.59653 17.5438Z"
                                fill="#1FD661"
                              />
                              <path
                                d="M16.0002 17.3334L15.0631 18.5047L16.0002 19.2543L16.9372 18.5047L16.0002 17.3334ZM17.5002 5.33338C17.5002 4.50495 16.8286 3.83338 16.0002 3.83338C15.1717 3.83338 14.5002 4.50495 14.5002 5.33338L17.5002 5.33338ZM8.39645 13.1713L15.0631 18.5047L16.9372 16.1621L10.2705 10.8287L8.39645 13.1713ZM16.9372 18.5047L23.6039 13.1713L21.7298 10.8287L15.0631 16.1621L16.9372 18.5047ZM17.5002 17.3334L17.5002 5.33338L14.5002 5.33338L14.5002 17.3334L17.5002 17.3334Z"
                                fill="#1FD661"
                              />
                            </svg>
                          ) : null}
                          <span>{trans.transactionType}</span>
                        </div>
                      </div>
                      <div className={classes.data_item_div}>
                        <div className={classes.data_name}>
                          <span>{trans.chain ? trans.chain : trans.coin}</span>
                        </div>
                      </div>
                      <div className={classes.data_item_div}>
                        <div className={classes.data_date}>
                          <span>{trans.date}</span>
                        </div>
                      </div>
                      <div className={classes.data_item_div}>
                        <div className={classes.data_amount}>
                          <span>
                            {trans.amount ? "+ " : "- "}$
                            {trans.amount ? trans.amount : trans.sum}
                          </span>
                        </div>
                      </div>
                      <div className={classes.data_item_div}>
                        <div className={classes.data_status}>
                          <span>{trans.status}</span>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
