import React from "react";
import classes from "./Logs.module.css";
import { Link } from "react-router-dom";
function Logs({ toggle }) {

  const nft = [
    {
      id: 251,
      link: "example.web.site.com",
      chain: "Dollar USD",
      amount: "200.43",
      date: "2023.06.02 4:27",
      status: true,
    },
    {
      id: 2451,
      link: "example.web.site.com",
      chain: "Dollar USD",
      amount: "200.43",
      date: "2023.06.02 4:27",
      status: true,
    },
    {
      id: 2451,
      link: "example.web.site.com",
      chain: "Dollar USD",
      amount: "200.43",
      date: "2023.06.02 4:27",
      status: true,
    },
    {
      id: 2451,
      link: "example.web.site.com",
      chain: "Dollar USD",
      amount: "200.43",
      date: "2023.06.02 4:27",
      status: true,
    },
    {
      id: 2451,
      link: "example.web.site.com",
      chain: "Dollar USD",
      amount: "200.43",
      date: "2023.06.02 4:27",
      status: true,
    },
    {
      id: 2451,
      link: "example.web.site.com",
      chain: "Dollar USD",
      amount: "200.43",
      date: "2023.06.02 4:27",
      status: true,
    },
    {
      id: 2451,
      link: "example.web.site.com",
      chain: "Dollar USD",
      amount: "200.43",
      date: "2023.06.02 4:27",
      status: true,
    },
    {
      id: 2451,
      link: "example.web.site.com",
      chain: "Dollar USD",
      amount: "200.43",
      date: "2023.06.02 4:27",
      status: true,
    },
    {
      id: 2451,
      link: "example.web.site.com",
      chain: "Dollar USD",
      amount: "200.43",
      date: "2023.06.02 4:27",
      status: false,
    },
    {
      id: 2451,
      link: "example.web.site.com",
      chain: "Dollar USD",
      amount: "200.43",
      date: "2023.06.02 4:27",
      status: true,
    },
    {
      id: 2451,
      link: "example.web.site.com",
      chain: "Dollar USD",
      amount: "200.43",
      date: "2023.06.02 4:27",
      status: true,
    },
    {
      id: 2451,
      link: "example.web.site.com",
      chain: "Dollar USD",
      amount: "200.43",
      date: "2023.06.02 4:27",
      status: true,
    },
    {
      id: 2451,
      link: "example.web.site.com",
      chain: "Dollar USD",
      amount: "200.43",
      date: "2023.06.02 4:27",
      status: false,
    },
    {
      id: 2451,
      link: "example.web.site.com",
      chain: "Dollar USD",
      amount: "200.43",
      date: "2023.06.02 4:27",
      status: true,
    },
    {
      id: 2451,
      link: "example.web.site.com",
      chain: "Dollar USD",
      amount: "200.43",
      date: "2023.06.02 4:27",
      status: true,
    },
    {
      id: 2451,
      link: "example.web.site.com",
      chain: "Dollar USD",
      amount: "200.43",
      date: "2023.06.02 4:27",
      status: false,
    },
    {
      id: 2451,
      link: "example.web.site.com",
      chain: "Dollar USD",
      amount: "200.43",
      date: "2023.06.02 4:27",
      status: true,
    },
    {
      id: 2451,
      link: "example.web.site.com",
      chain: "Dollar USD",
      amount: "200.43",
      date: "2023.06.02 4:27",
      status: true,
    },
    {
      id: 2451,
      link: "example.web.site.com",
      chain: "Dollar USD",
      amount: "200.43",
      date: "2023.06.02 4:27",
      status: false,
    },
    {
      id: 2451,
      link: "example.web.site.com",
      chain: "Dollar USD",
      amount: "200.43",
      date: "2023.06.02 4:27",
      status: true,
    },
  ]

  return (
    <div className={classes.Logs}>
      <div className={toggle ? "container_On" : "container_Off"}>
        <div className={classes.LogsList}>
          <div className={classes.header}>
            <h3>Logs list</h3>

            <div className={classes.header_right_bttons}>
              <button className={classes.active}>NFT</button>
              <button>Tokens</button>
              <button>Transactions</button>
            </div>
          </div>
          <div className={classes.section}>
            <div className={classes.navbar}>
              <div className={classes.LinksAndOthers}>
                <div className={classes.ID}>
                  <span>ID</span>
                </div>
                <div className={classes.Link}>
                  <span>Link</span>
                </div>
                <div className={classes.chainName}>
                  <h4>Chain name</h4>
                </div>
                <div className={classes.Amount}>
                  <h4>
                    Amount
                  </h4>
                </div>
                <div className={classes.Date}>
                  <span> Date</span>
                </div>
              </div>
              <div className={classes.status}>
                <span>Status</span>
              </div>
            </div>
            <div className={classes.products}>
              {nft.map((item, index) => (
                <div className={classes.product}
                  key={index}
                >
                  <div className={classes.LinksAndOthers}>
                    <div className={classes.ID}>
                      <span>{item.id}</span>
                    </div>
                    <div className={classes.Link}>
                      <button>{item.link}</button>
                    </div>
                    <div className={classes.chainName}>
                      <h4>{item.chain}</h4>
                    </div>
                    <div className={classes.Amount}>
                      <h4>
                        $ {item.amount}
                      </h4>
                    </div>
                    <div className={classes.Date}>
                      <span> {item.date}</span>
                    </div>
                  </div>
                  <div className={classes.status}>
                    {item.status ? <button className={classes.Done}>Done</button> : <button className={classes.Waiting}>Waiting</button>}

                  </div>
                </div>
              ))}

            </div>
            <div className={classes.showBtn}>
              <Link to={"/logs"}>Show more logs</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logs;
