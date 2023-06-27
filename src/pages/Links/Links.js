import React, { useState, useEffect } from "react";
import classes from "../Profile/Profile.module.css";
import clses from "./Links.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

function Links({ toggle, setAddContentToggle, GetUrl }) {
  const [linksProducts, setLinks] = useState([]);
  const [linksLoading, setLinksLoading] = useState(true);

  function getLinks(startIndex) {
    setLinksLoading(true);
    axios
      .get(
        "https://owl-panel.com/api/v2/getLinks?paginationStart=" + startIndex
      )
      .then(function (resp) {
        let tempLinks = resp.data;
        if (linksProducts.length > 0) {
          tempLinks = linksProducts;
          if (resp.data.length > 0) {
            for (let i = 0; i < 0; i++) {
              tempLinks.push(resp.data[i]);
            }
          } else {
            document.getElementById("showMoreLinksButton").remove();
          }
        }
        setLinks(tempLinks);
        setLinksLoading(false);
      });
  }

  useEffect(() => {
    getLinks(0);
  }, []);

  GetUrl();

  const DeleteButtonClickHandler = () => {
    alert("Delete");
  };

  return (
    <div className={classes.classes}>
      <div className={toggle ? "container_On" : "container_Off"}>
        <div className={classes.row}>
          <div className={classes.bottom}>
            <div className={classes.filtr}>
              <h3>Links list</h3>
              <div>
                <button
                  className={classes.addNew}
                  onClick={() => {
                    setAddContentToggle(true);
                  }}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
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
            <div className={classes.titles}>
              <div className={classes.id}>
                <span>ID</span>
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.86603 7.5C5.48112 8.16667 4.51887 8.16667 4.13397 7.5L0.669873 1.5C0.284973 0.833333 0.766098 5.89981e-08 1.5359 1.26296e-07L8.4641 7.31979e-07C9.2339 7.99277e-07 9.71503 0.833334 9.33013 1.5L5.86603 7.5Z"
                    fill="#4C4E5E"
                  />
                </svg>
              </div>
              <div className={classes.transaction}>
                <span>Link</span>
              </div>
              <div className={classes.chainname}>
                <span>Template</span>
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.86603 7.5C5.48112 8.16667 4.51887 8.16667 4.13397 7.5L0.669873 1.5C0.284973 0.833333 0.766098 5.89981e-08 1.5359 1.26296e-07L8.4641 7.31979e-07C9.2339 7.99277e-07 9.71503 0.833334 9.33013 1.5L5.86603 7.5Z"
                    fill="#4C4E5E"
                  />
                </svg>
              </div>
              <div className={classes.date}>
                <span>Statistic</span>
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.86603 7.5C5.48112 8.16667 4.51887 8.16667 4.13397 7.5L0.669873 1.5C0.284973 0.833333 0.766098 5.89981e-08 1.5359 1.26296e-07L8.4641 7.31979e-07C9.2339 7.99277e-07 9.71503 0.833334 9.33013 1.5L5.86603 7.5Z"
                    fill="#4C4E5E"
                  />
                </svg>
              </div>
              <div className={clses.Date}>
                <span>Date</span>
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.86603 7.5C5.48112 8.16667 4.51887 8.16667 4.13397 7.5L0.669873 1.5C0.284973 0.833333 0.766098 5.89981e-08 1.5359 1.26296e-07L8.4641 7.31979e-07C9.2339 7.99277e-07 9.71503 0.833334 9.33013 1.5L5.86603 7.5Z"
                    fill="#4C4E5E"
                  />
                </svg>
              </div>
              <div className={` ${clses.statusLink} `}>
                <span>Cloacking Enabled</span>
              </div>
              <div className={clses.Delete}></div>
            </div>
            <div className={`${classes.data} ${classes.LinkData}`}>
              {linksLoading ? (
                <Loading size={0.7} />
              ) : (
                linksProducts.map((trans, idx) => {
                  return (
                    <div className={classes.data_item} key={idx}>
                      <div className={classes.data_item_div}>
                        <div className={classes.data_id}>
                          <span>{trans.id}</span>
                        </div>
                      </div>
                      <div
                        className={`${classes.data_item_div} ${classes.linksButton}`}>
                        <div className={classes.data_transaction}>
                          <span>{trans.link}</span>
                        </div>
                      </div>
                      <div
                        className={`${classes.data_item_div} ${classes.linksButton}`}>
                        <div className={classes.data_name}>
                          <span className={classes.data_name_dark}>
                            <span>{trans.template}</span>
                          </span>
                        </div>
                      </div>
                      <div className={classes.data_item_div}>
                        <div className={classes.statisticDiv}>
                          <span>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2.97924 10.2709C4.36454 8.19808 7.26851 5 12 5C16.7314 5 19.6354 8.19808 21.0207 10.2709C21.4855 10.9665 21.718 11.3143 21.6968 11.9569C21.6757 12.5995 21.4088 12.9469 20.8752 13.6417C19.2861 15.7107 16.1129 19 12 19C7.88699 19 4.71384 15.7107 3.12471 13.6417C2.59106 12.9469 2.32424 12.5995 2.30308 11.9569C2.28193 11.3143 2.51436 10.9665 2.97924 10.2709ZM11.9999 16C14.2091 16 15.9999 14.2091 15.9999 12C15.9999 9.79086 14.2091 8 11.9999 8C9.79081 8 7.99995 9.79086 7.99995 12C7.99995 14.2091 9.79081 16 11.9999 16Z"
                                fill="white"
                              />
                            </svg>
                            {trans.clicks}
                          </span>
                          <span>
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10.0001 20C15.5229 20 20.0001 15.5228 20.0001 10C20.0001 4.47715 15.5229 0 10.0001 0C4.98703 0 0.835542 3.68874 0.111816 8.5H8.37875L5.93941 6.06066C5.35362 5.47487 5.35362 4.52513 5.93941 3.93934C6.52519 3.35355 7.47494 3.35355 8.06073 3.93934L13.0607 8.93934L14.1214 10L13.0607 11.0607L8.06073 16.0607C7.47494 16.6464 6.52519 16.6464 5.93941 16.0607C5.35362 15.4749 5.35362 14.5251 5.93941 13.9393L8.37875 11.5H0.111816C0.835542 16.3113 4.98703 20 10.0001 20Z"
                                fill="white"
                              />
                            </svg>

                            {trans.logins}
                          </span>
                          <span>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.51669 4.79611C5.84343 6.0911 4 8.83027 4 12C4 12.1969 4.00711 12.3921 4.0211 12.5854L10.1629 10.9398L8.51669 4.79611ZM11.4148 4.02106L13.1901 10.6463L13.2017 10.6896C13.2517 10.8754 13.3222 11.1373 13.3532 11.3775C13.3922 11.6802 13.4014 12.159 13.1197 12.6469C12.838 13.1348 12.4188 13.3662 12.1371 13.4838C11.9136 13.5771 11.6515 13.647 11.4657 13.6965L11.4223 13.7081L4.79626 15.4836C6.0913 18.1567 8.83039 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58171 16.4183 3.99998 12 3.99998C11.8032 3.99998 11.6081 4.00709 11.4148 4.02106Z"
                                fill="white"
                              />
                              <path
                                d="M9.92945 4.27259C9.67849 3.33602 9.55302 2.86773 9.12083 2.67286C8.68865 2.47799 8.30723 2.66782 7.54439 3.04748C6.97028 3.33321 6.42361 3.67419 5.91239 4.06647C4.87054 4.8659 3.99636 5.86272 3.33975 7C2.68314 8.13728 2.25696 9.39275 2.08555 10.6947C2.00144 11.3336 1.97948 11.9775 2.01909 12.6176C2.07171 13.4681 2.09803 13.8933 2.48288 14.1701C2.86773 14.447 3.33602 14.3215 4.27259 14.0706L10.0681 12.5176C10.9788 12.2736 11.4342 12.1516 11.6413 11.7929C11.8484 11.4342 11.7264 10.9788 11.4824 10.0681L9.92945 4.27259Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className={clses.Date}>
                        <div className={classes.data_amount}>
                          <span>{trans.date}</span>
                        </div>
                      </div>
                      <div className={clses.statusLink}>
                        <div className={classes.data_status}>
                          {trans.cloackingEnabled ? (
                            <button>Yes</button>
                          ) : (
                            <button className={classes.NoBTN}>No</button>
                          )}
                        </div>
                      </div>
                      <div className={classes.delete}>
                        <div className={clses.Delete}>
                          <button onClick={() => DeleteButtonClickHandler()}>
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
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
                    </div>
                  );
                })
              )}
            </div>
            {linksLoading ||
              (linksProducts.length % 10 === 0 && (
                <div
                  className={classes.show}
                  id={"showMoreLinksButton"}
                  onClick={() => {
                    getLinks(linksProducts.length);
                  }}>
                  <Link to={"/links"}>Show more domains</Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Links;
