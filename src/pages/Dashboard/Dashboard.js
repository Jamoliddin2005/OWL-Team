import React, { useState } from "react";
import classes from "./Dashboard.module.css";
import { Link } from "react-router-dom";

function Dashboard({ toggle }) {
  // const [logs,setLogs] = useState([""]);

  const logs = [
    {
      id: 2451,
      link: "example.web.site.com",
      chainName: "Dollar USD",
      amount: "$ 200.43",
      date: "2023.06.02 4:27",
      status: true,
    },
    {
      id: 2451,
      link: "example.web.site.com",
      chainName: "Dollar USD",
      amount: "$ 200.43",
      date: "2023.06.02 4:27",
      status: false,
    },
    {
      id: 2451,
      link: "example.web.site.com",
      chainName: "Dollar USD",
      amount: "$ 200.43",
      date: "2023.06.02 4:27",
      status: true,
    },
    {
      id: 2451,
      link: "example.web.site.com",
      chainName: "Dollar USD",
      amount: "$ 200.43",
      date: "2023.06.02 4:27",
      status: false,
    },
    {
      id: 2451,
      link: "example.web.site.com",
      chainName: "Dollar USD",
      amount: "$ 200.43",
      date: "2023.06.02 4:27",
      status: true,
    },
    {
      id: 2451,
      link: "example.web.site.com",
      chainName: "Dollar USD",
      amount: "$ 200.43",
      date: "2023.06.02 4:27",
      status: false,
    },
    {
      id: 2451,
      link: "example.web.site.com",
      chainName: "Dollar USD",
      amount: "$ 200.43",
      date: "2023.06.02 4:27",
      status: true,
    },
    {
      id: 2451,
      link: "example.web.site.com",
      chainName: "Dollar USD",
      amount: "$ 200.43",
      date: "2023.06.02 4:27",
      status: false,
    },
  ];

  const transactions = [
    {
      Income: true,
      money: "-$ 200.43",
      kurs: "Dollar USD",
    },
    {
      Income: false,
      money: "+$ 200.43",
      kurs: "Dollar USD",
    },
    {
      Income: true,
      money: "-$ 200.43",
      kurs: "Dollar USD",
    },
    {
      Income: false,
      money: "+$ 200.43",
      kurs: "Dollar USD",
    },
    {
      Income: true,
      money: "-$ 200.43",
      kurs: "Dollar USD",
    },
    {
      Income: false,
      money: "+$ 200.43",
      kurs: "Dollar USD",
    },
    {
      Income: true,
      money: "-$ 200.43",
      kurs: "Dollar USD",
    },
    {
      Income: false,
      money: "+$ 200.43",
      kurs: "Dollar USD",
    },
  ];

  return (
    <div className={classes.Dashboard}>
      <div className={toggle ? "container_On" : "container_Off"}>
        <div className={`row ${classes.row}`}>
          <div className={classes.dashboardLeft}>
            <div className={classes.dashboardLeftTop}>
              <h2>
                Good evening, <span>user</span>
              </h2>

              <h3>
                22:32<span>:00</span>
              </h3>
            </div>
            <div className={classes.dashboardStolen}>
              <div className={classes.stolen}>
                <div className={classes.stolenLeft}>
                  <h3>24,220</h3>
                  <span>Wallet Stolen</span>
                </div>
                <div className={classes.stolenRight}>
                  <img src="/uploads/icons/cash.svg" alt="" />
                </div>
              </div>
              <div className={classes.stolen}>
                <div className={classes.stolenLeft}>
                  <h3>24,220</h3>
                  <span>Token Stolen</span>
                </div>
                <div className={classes.stolenRight}>
                  <img src="/uploads/icons/1.svg" alt="" />
                </div>
              </div>
              <div className={classes.stolen}>
                <div className={classes.stolenLeft}>
                  <h3>24,220</h3>
                  <span>NFS Stolen</span>
                </div>
                <div className={classes.stolenRight}>
                  <img src="/uploads/icons/nft.svg" alt="" />
                </div>
              </div>
            </div>
            <div className={classes.lastLogs}>
              <div className={classes.logs_top}>
                <h4>Last logs</h4>
                <Link to={"/logs"}>
                  See all
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0.292583 6.79519L8.74123 0.881139C9.27145 0.509984 10 0.889306 10 1.53652V12.4635C10 13.1107 9.27145 13.49 8.74123 13.1189L0.292583 7.20481C0.150404 7.10528 0.150403 6.89472 0.292583 6.79519Z"></path>
                  </svg>
                </Link>
              </div>
              <div className={classes.logs_nav}>
                <li>ID</li>
                <li>Link</li>
                <li>Chain name</li>
                <li>Amount</li>
                <li>Date</li>
                <li>Status</li>
              </div>
              <div className={classes.products}>
                {logs.map((item, index) => (
                  <div className={classes.product} key={index}>
                    <div className={classes.productId}>
                      <span>{item.id}</span>
                    </div>
                    <div className={classes.productLink}>
                      <span>{item.link}</span>
                    </div>
                    <div className={classes.productChainName}>
                      <h4>{item.chainName}</h4>
                    </div>
                    <div className={classes.productAmount}>
                      <span>{item.amount}</span>
                    </div>
                    <div className={classes.productDate}>
                      <span>{item.date}</span>
                    </div>
                    <div className={classes.button}>
                      {item.status ? (
                        <button className={classes.success}>Done</button>
                      ) : (
                        <button className={classes.waiting}>Waiting</button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className={classes.showBtn}>
                <Link to={"/logs"}>Show more logs</Link>
              </div>
            </div>
          </div>
          <div className={classes.dashboardRight}>
            <div className={classes.RightBalance}>
              <p>Balance</p>
              <h2>
                <span>$</span> 300.25
              </h2>
              <button>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.34494 13.0402L4.64426 11.6797C4.36545 12.5093 4.21436 13.3975 4.21436 14.321C4.21436 18.8971 7.924 22.6067 12.5001 22.6067C17.0761 22.6067 20.7858 18.8971 20.7858 14.321C20.7858 13.3975 20.6347 12.5093 20.3559 11.6797L18.6552 13.0402C18.7408 13.4537 18.7858 13.8821 18.7858 14.321C18.7858 17.7925 15.9716 20.6067 12.5001 20.6067C9.02857 20.6067 6.21436 17.7925 6.21436 14.321C6.21436 13.8821 6.25934 13.4537 6.34494 13.0402Z"
                    fill="#0A0B10"
                  />
                  <path
                    d="M12.5 2L11.8989 1.20082L12.5 0.748716L13.1011 1.20082L12.5 2ZM13.5 13C13.5 13.5523 13.0523 14 12.5 14C11.9477 14 11.5 13.5523 11.5 13L13.5 13ZM5.39891 6.08971L11.8989 1.20082L13.1011 2.79918L6.60109 7.68807L5.39891 6.08971ZM13.1011 1.20082L19.6011 6.08971L18.3989 7.68807L11.8989 2.79918L13.1011 1.20082ZM13.5 2L13.5 13L11.5 13L11.5 2L13.5 2Z"
                    fill="#0A0B10"
                  />
                </svg>
                Withdrawal
              </button>
              <div className={classes.balanceBottom}>
                <div className={classes.leftB}>
                  <span>Income all time</span>
                  <h2>$ 20,451.25</h2>
                </div>
                <div className={classes.rightB}>
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
                      d="M12.181 22.6947L9.62949 20.6536C9.2213 21.8608 9 23.1542 9 24.4993C9 31.1267 14.3726 36.4993 21 36.4993C27.6274 36.4993 33 31.1267 33 24.4993C33 23.1542 32.7787 21.8608 32.3705 20.6536L29.819 22.6947C29.9377 23.2778 30 23.8813 30 24.4993C30 29.4699 25.9706 33.4993 21 33.4993C16.0294 33.4993 12 29.4699 12 24.4993C12 23.8813 12.0623 23.2778 12.181 22.6947Z"
                    />
                    <path d="M21 22.75L20.063 23.9213L21 24.6709L21.937 23.9213L21 22.75ZM22.5 7C22.5 6.17157 21.8284 5.5 21 5.5C20.1716 5.5 19.5 6.17157 19.5 7L22.5 7ZM11.313 16.9213L20.063 23.9213L21.937 21.5787L13.187 14.5787L11.313 16.9213ZM21.937 23.9213L30.687 16.9213L28.813 14.5787L20.063 21.5787L21.937 23.9213ZM22.5 22.75L22.5 7L19.5 7L19.5 22.75L22.5 22.75Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className={classes.transactions}>
              <div className={classes.transactionsTop}>
                <h4>Transactions</h4>
                <Link to={"/logs"}>
                  See all
                  <svg
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0.292583 6.79519L8.74123 0.881139C9.27145 0.509984 10 0.889306 10 1.53652V12.4635C10 13.1107 9.27145 13.49 8.74123 13.1189L0.292583 7.20481C0.150404 7.10528 0.150403 6.89472 0.292583 6.79519Z"></path>
                  </svg>
                </Link>
              </div>
              <div className={classes.transactionsItem}>
                {transactions.map((item, index) => (
                  <div
                    className={`${classes.transaction} ${
                      item.Income && classes.IncomeClass
                    }`}
                    key={index}
                  >
                    <div className={classes.transactionLeft}>
                      <div className={`${classes.transactionIcon}`}>
                        {item.Income ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="42"
                            height="42"
                            viewBox="0 0 42 42"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12.181 22.6947L9.62949 20.6536C9.2213 21.8608 9 23.1542 9 24.4993C9 31.1267 14.3726 36.4993 21 36.4993C27.6274 36.4993 33 31.1267 33 24.4993C33 23.1542 32.7787 21.8608 32.3705 20.6536L29.819 22.6947C29.9377 23.2778 30 23.8813 30 24.4993C30 29.4699 25.9706 33.4993 21 33.4993C16.0294 33.4993 12 29.4699 12 24.4993C12 23.8813 12.0623 23.2778 12.181 22.6947Z"
                              fill="#1FD661"
                            />
                            <path
                              d="M21 22.75L20.063 23.9213L21 24.6709L21.937 23.9213L21 22.75ZM22.5 7C22.5 6.17157 21.8284 5.5 21 5.5C20.1716 5.5 19.5 6.17157 19.5 7L22.5 7ZM11.313 16.9213L20.063 23.9213L21.937 21.5787L13.187 14.5787L11.313 16.9213ZM21.937 23.9213L30.687 16.9213L28.813 14.5787L20.063 21.5787L21.937 23.9213ZM22.5 22.75L22.5 7L19.5 7L19.5 22.75L22.5 22.75Z"
                              fill="#1FD661"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="42"
                            height="42"
                            viewBox="0 0 42 42"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12.181 22.6947L9.62949 20.6536C9.2213 21.8608 9 23.1542 9 24.4993C9 31.1267 14.3726 36.4993 21 36.4993C27.6274 36.4993 33 31.1267 33 24.4993C33 23.1542 32.7787 21.8608 32.3705 20.6536L29.819 22.6947C29.9377 23.2778 30 23.8813 30 24.4993C30 29.4699 25.9706 33.4993 21 33.4993C16.0294 33.4993 12 29.4699 12 24.4993C12 23.8813 12.0623 23.2778 12.181 22.6947Z"
                              fill="white"
                            />
                            <path
                              d="M21 7L20.063 5.8287L21 5.07906L21.937 5.8287L21 7ZM22.5 22.75C22.5 23.5784 21.8284 24.25 21 24.25C20.1716 24.25 19.5 23.5784 19.5 22.75L22.5 22.75ZM11.313 12.8287L20.063 5.8287L21.937 8.1713L13.187 15.1713L11.313 12.8287ZM21.937 5.8287L30.687 12.8287L28.813 15.1713L20.063 8.1713L21.937 5.8287ZM22.5 7L22.5 22.75L19.5 22.75L19.5 7L22.5 7Z"
                              fill="white"
                            />
                          </svg>
                        )}
                      </div>
                      <div className={classes.transactionTitle}>
                        <h4>{item.Income ? "Income" : "Withdrawal"}</h4>
                        <p>{item.kurs}</p>
                      </div>
                    </div>
                    <div className={classes.transactionMonkey}>
                      <span>{item.money}</span>
                    </div>
                  </div>
                ))}
              </div>
                <div className={classes.showTransactions}>
                  <Link to={"/"}>Show all transactions</Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
