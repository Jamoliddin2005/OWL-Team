import React, { useState, useEffect } from "react";
import classes from "./Domain.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { HandleResponse } from "../utils";
import Loading from "../../components/Loading/Loading";

function Domains({ toggle, setAddContentDomainsToggle, GetUrl }) {
  const [domains, setDomains] = useState([]);
  const [domainsLoading, setDomainsLoading] = useState(true);

  function getDomains(startIndex) {
    setDomainsLoading(true);
    axios
      .get(
        "https://owl-panel.com/api/v2/getDomains?paginationStart=" + startIndex
      )
      .then(function (resp) {
        let tempDomains = resp.data;
        if (domains.length > 0) {
          tempDomains = domains;
          if (resp.data.length > 0) {
            for (let i = 0; i < 0; i++) {
              tempDomains.push(resp.data[i]);
            }
          } else {
            document.getElementById("showMoreDomainsButton").remove();
          }
        }
        setDomains(tempDomains);
        setDomainsLoading(false);
      });
  }

  const deleteDomain = (index) => {
    axios
      .post(
        "https://owl-panel.com/api/v2/domains",
        {
          do: "deleteDomain",
          id: domains[index].id,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then(function (resp) {
        HandleResponse(resp.data);
      });
    domains.splice(index, 1);
    setDomains(domains);
  };

  useEffect(() => {
    getDomains(0);
  }, []);

  GetUrl();
  return (
    <div className={classes.classes}>
      <div className={toggle ? "container_On" : "container_Off"}>
        <div className={classes.LogsList}>
          <div className={classes.header}>
            <h3>Domains list</h3>
            <div className={classes.header_right_bttons}>
              <button onClick={() => setAddContentDomainsToggle(true)}>
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
                    d="M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM9 14C8.44771 14 8 13.5523 8 13V10H5C4.44772 10 4 9.55229 4 9C4 8.44771 4.44772 8 5 8H8V5C8 4.44771 8.44771 4 9 4C9.55228 4 10 4.44771 10 5V8H13C13.5523 8 14 8.44771 14 9C14 9.55229 13.5523 10 13 10H10V13C10 13.5523 9.55229 14 9 14Z"
                    fill="#0A0B10"
                  />
                </svg>
                Add new
              </button>
            </div>
          </div>
          <div className={classes.section}>
            <div className={classes.navbar}>
              <div className={classes.LinksAndOthers}>
                <div className={classes.ID}>
                  <span>ID</span>
                </div>
                <div className={classes.Link}>
                  <span>Domain</span>
                </div>
                <div className={classes.chainName}>
                  <h4>NS</h4>
                </div>
                <div className={classes.Amount}>
                  <h4>Google Ban</h4>
                </div>
                <div className={classes.Date}>
                  <span> Date</span>
                </div>
                <div className={classes.status}>
                  <span>Status</span>
                </div>
                <div className={classes.Delete}></div>
              </div>
            </div>
            <div
              className={`${classes.products} ${
                domainsLoading && classes.LoadingDiv
              }`}
            >
              {domainsLoading ? (
                <Loading size={0.7} />
              ) : (
                domains.map((item, index) => (
                  <div className={classes.product} key={index}>
                    <div className={classes.ID}>
                      <span>{item.id}</span>
                    </div>
                    <div className={classes.Domain}>
                      <span>{item.name}</span>
                    </div>
                    <div className={classes.NS}>
                      {item.NS.map(
                        (item2, index2) =>
                          index2 < 2 && (
                            <div className={classes.nsLinks} key={index2}>
                              <button>{item2.name}</button>
                            </div>
                          )
                      )}
                      <div className={classes.countNS}>
                        {item.NS.length > 2 && (
                          <button>+{item.NS.length - 2}</button>
                        )}
                      </div>
                    </div>
                    <div className={classes.Google}>
                      <button
                        className={item.google ? classes.true : classes.false}
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.6345 7.78641L16.5551 7.44926H9.22711V10.5507H13.6055C13.1509 12.7093 11.0415 13.8456 9.31852 13.8456C8.06484 13.8456 6.74332 13.3182 5.86863 12.4706C5.40715 12.0163 5.03981 11.4754 4.78765 10.8789C4.53548 10.2824 4.40345 9.64197 4.3991 8.99437C4.3991 7.68797 4.98621 6.38121 5.84051 5.52164C6.6948 4.66207 7.98504 4.18113 9.26789 4.18113C10.7371 4.18113 11.79 4.96125 12.1838 5.31703L14.3877 3.12469C13.7412 2.55656 11.9651 1.125 9.19688 1.125C7.06113 1.125 5.01328 1.94309 3.51633 3.43512C2.03906 4.9043 1.27441 7.02879 1.27441 9C1.27441 10.9712 1.99793 12.9895 3.42949 14.4703C4.95914 16.0495 7.12547 16.875 9.35613 16.875C11.3857 16.875 13.3095 16.0798 14.6805 14.637C16.0284 13.2166 16.7256 11.2514 16.7256 9.19125C16.7256 8.32395 16.6384 7.80891 16.6345 7.78641Z"
                            fill="#C2E5CE"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className={classes.Date}>
                      <span>{item.date}</span>
                    </div>
                    <div className={classes.status}>
                      {item.status ? (
                        <button className={classes.Linked}>Linked</button>
                      ) : (
                        <button className={(classes.Linked, classes.waiting)}>
                          <span>Waiting</span>
                        </button>
                      )}
                    </div>
                    <div className={classes.Delete}>
                      <button onClick={() => deleteDomain(index)}>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            filluule="evenodd"
                            clipuule="evenodd"
                            d="M17 4H1V6.6C1.98184 6.6 2.77778 7.39594 2.77778 8.37778V11C2.77778 13.8284 2.77778 15.2426 3.65646 16.1213C4.53514 17 5.94935 17 8.77777 17H9.22222C12.0506 17 13.4649 17 14.3435 16.1213C15.2222 15.2426 15.2222 13.8284 15.2222 11V8.37778C15.2222 7.39594 16.0182 6.6 17 6.6V4ZM8 8C8 7.44772 7.55228 7 7 7C6.44772 7 6 7.44772 6 8V13C6 13.5523 6.44772 14 7 14C7.55228 14 8 13.5523 8 13V8ZM12 8C12 7.44772 11.5523 7 11 7C10.4477 7 10 7.44772 10 8V13C10 13.5523 10.4477 14 11 14C11.5523 14 12 13.5523 12 13V8Z"
                            fill="#E23147"
                          />
                          <path
                            d="M7.06815 1.37059C7.1821 1.26427 7.43319 1.17033 7.78248 1.10332C8.13177 1.03632 8.55973 1 9 1C9.44027 1 9.86823 1.03632 10.2175 1.10332C10.5668 1.17033 10.8179 1.26427 10.9319 1.37059"
                            stroke="#E23147"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
            {domains.length % 10 === 0 && (
              <div
                className={classes.showBtn}
                id={"showMoreDomainsButton"}
                onClick={() => {
                  getDomains(domains.length);
                }}
              >
                <Link to={"/domains"}>Show more domains</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Domains;
