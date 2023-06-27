import React, { useState, useEffect } from "react";
import classes from "./Logs.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading/Loading";

function Logs({ toggle, GetUrl }) {
  const [filters, setFilters] = useState("NFT");
  const [transactions, setTransactions] = useState([]);
  const [transactionsLoading, setTransactionsLoading] = useState(true);

  useEffect(() => {
    getTransactions(0);
  }, []);

  function FilterFunct(fillName) {
    if (fillName === "NFT") {
      return transactions.filter((item) => item.type === "nft");
    } else if (fillName === "Tokens") {
      return transactions.filter((item) => item.type === "token");
    } else {
      return transactions.filter((item) => item.type === "coin");
    }
  }

  function getTransactions(startIndex) {
    setTransactionsLoading(true);
    axios
      .get(
        "https://owl-panel.com/api/v2/getTransactions?paginationStart=" +
          startIndex
      )
      .then(function (resp) {
        let tempTrans = resp.data;
        if (transactions.length > 0) {
          tempTrans = transactions;
          if (resp.data.length > 0) {
            for (let i = 0; i < 0; i++) {
              tempTrans.push(resp.data[i]);
            }
          } else {
            document.getElementById("showMoreLogsButton").remove();
          }
        }
        setTransactions(tempTrans);
        setTransactionsLoading(false);
      });
  }

  let Prod = FilterFunct(filters);

  GetUrl();

  return (
    <div className={classes.Logs}>
      <div className={toggle ? "container_On" : "container_Off"}>
        <div className={classes.LogsList}>
          <div className={classes.header}>
            <h3>Logs list</h3>

            <div className={classes.header_right_bttons}>
              <button
                onClick={() => setFilters("NFT")}
                className={`${filters === "NFT" && classes.active}`}>
                NFT
              </button>
              <button
                onClick={() => setFilters("Tokens")}
                className={`${filters === "Tokens" && classes.active}`}>
                Tokens
              </button>
              <button
                onClick={() => setFilters("Transactions")}
                className={`${filters === "Transactions" && classes.active}`}>
                Transactions
              </button>
            </div>
          </div>
          <div className={classes.section}>
            <div className={classes.navbar}>
              <div
                className={`${classes.LinksAndOthers} ${
                  filters !== "NFT" && classes.notNFT
                }`}>
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
                  <h4>Amount</h4>
                </div>
                <div className={classes.Date}>
                  <span>Date</span>
                </div>
                {filters === "NFT" && (
                  <div className={classes.nftName}>
                    <span>NFT Name</span>
                  </div>
                )}
                {filters === "NFT" && (
                  <div className={classes.status}>
                    <span>Status</span>
                  </div>
                )}
              </div>
            </div>
            <div
              className={`${classes.products} ${
                transactionsLoading && classes.transactionLoadingDiv
              }`}>
              {transactionsLoading ? (
                <Loading size={0.6} />
              ) : (
                Prod.map((item, index) => (
                  <div className={classes.product} key={index}>
                    <div
                      className={`${classes.LinksAndOthers} ${
                        filters !== "NFT" && classes.notNFT
                      }`}>
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
                        <h4>$ {item.amount}</h4>
                      </div>
                      <div className={classes.Date}>
                        <span> {item.date}</span>
                      </div>
                      {item.nftName && (
                        <div className={classes.nftName}>
                          <span> {item.nftName}</span>
                        </div>
                      )}
                      {item.status === "Sold" && (
                        <div className={classes.status}>
                          <button className={classes.Done}>Sold</button>
                        </div>
                      )}
                      {item.status === "Selling" && (
                        <div className={classes.status}>
                          <button className={classes.Waiting}>Selling</button>
                        </div>
                      )}
                      {item.status === "Not sold" && (
                        <div className={classes.status}>
                          <button className={classes.NotDone}>Not sold</button>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
            {Prod.length % 10 === 0 && (
              <div
                className={classes.showBtn}
                id={"showMoreLogsButton"}
                onClick={() => {
                  getTransactions(Prod.length);
                }}>
                <Link to={"/logs"}>Show more logs</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logs;
