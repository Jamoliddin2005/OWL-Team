import React, { useState } from "react";
import classes from "./UsersAndResults.module.css";
import Checkbox from "../../components/Checkbox/Checkbox";

function UsersAndResults({ toggle, setAddContentToggle }) {
  const [allChecker, setAllChecker] = useState(false);

  const usersList = [
    {
      check: {
        id: 0,
        check: false
      },
      id: 2451,
      telegramID: "example.web.site.com",
      userName: "admin-zero",
      imp: {
        id: 11111,
        imp: true
      },
      eth: "0287asd3450287asd345",
      usd: 300.25,
      staff: {
        id: 1,
        staff: false
      },
      active: {
        id: 2,
        active: false
      },
      superUser: {
        id: 3,
        superUser: false
      },
    },
    {
      check: {
        id: 4,
        check: true
      },
      id: 2451,
      telegramID: "example.web.site.com",
      userName: "admin-zero",
      imp: {
        id: 20222,
        imp: true
      },
      eth: "0287asd3450287asd345",
      usd: 300.25,
      staff: {
        id: 5,
        staff: true
      },
      active: {
        id: 6,
        active: true
      },
      superUser: {
        id: 7,
        superUser: true
      },
    },
    {
      check: {
        id: 8,
        check: false
      },
      id: 2451,
      telegramID: "example.web.site.com",
      userName: "admin-zero",
      imp: {
        id: 33333,
        imp: true
      },
      eth: "0287asd3450287asd345",
      usd: 300.25,
      staff: {
        id: 9,
        staff: false
      },
      active: {
        id: 10,
        active: false
      },
      superUser: {
        id: 11,
        superUser: false
      },
    },
  ]

  return (
    <div className={classes.UsersAndResults}>
      <div className={toggle ? "container_On" : "container_Off"}>
        <div className={classes.row}>
          <div className={classes.bottom}>
            <div className={classes.filtr}>
              <h3>Users list</h3>
              <div>
                <button
                  className={classes.addNew}
                  onClick={() => {
                    setAddContentToggle(true);
                  }}
                >
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
            <div className={classes.searchAndDeletes}>
              <div className={classes.search}>
                <input type="text" placeholder="Search in cloudflares" />
                <span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8.25" cy="8.25" r="5.25" stroke="#4C4E5D" strokeWidth="2" />
                    <path d="M15 15L12.75 12.75" stroke="#4C4E5D" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </div>
              <div className={classes.rightDeletes}>
                <span>1 of 2 selected</span>
                <button>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17 4H1V6.6C1.98184 6.6 2.77778 7.39594 2.77778 8.37778V11C2.77778 13.8284 2.77778 15.2426 3.65646 16.1213C4.53514 17 5.94935 17 8.77777 17H9.22222C12.0506 17 13.4649 17 14.3435 16.1213C15.2222 15.2426 15.2222 13.8284 15.2222 11V8.37778C15.2222 7.39594 16.0182 6.6 17 6.6V4ZM8 8C8 7.44772 7.55228 7 7 7C6.44772 7 6 7.44772 6 8V13C6 13.5523 6.44772 14 7 14C7.55228 14 8 13.5523 8 13V8ZM12 8C12 7.44772 11.5523 7 11 7C10.4477 7 10 7.44772 10 8V13C10 13.5523 10.4477 14 11 14C11.5523 14 12 13.5523 12 13V8Z" fill="#E23147" />
                    <path d="M7.06815 1.37059C7.1821 1.26427 7.43319 1.17033 7.78248 1.10332C8.13177 1.03632 8.55973 1 9 1C9.44027 1 9.86823 1.03632 10.2175 1.10332C10.5668 1.17033 10.8179 1.26427 10.9319 1.37059" stroke="#E23147" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  Delete
                </button>
              </div>

            </div>
            <div className={classes.titles}>
              <div className={classes.AllCheck}>
                <Checkbox
                  allChecker={allChecker}
                  setAllChecker={setAllChecker}
                />
              </div>
              <div className={classes.ID}>
                <span>ID</span>
              </div>
              <div className={classes.TelegramID}>
                <span>Telegram ID</span>
              </div>
              <div className={classes.Username}>
                <span>Username</span>
              </div>
              <div className={classes.IMP}>
                <span>IMP drainer</span>
              </div>
              <div className={classes.ETH}>
                <span>ETH address</span>
              </div>
              <div className={classes.USD}>
                <span>USD balance</span>
              </div>
              <div className={classes.Staff}>
                <span>Staff</span>
              </div>
              <div className={classes.Active}>
                <span>Active</span>
              </div>
              <div className={classes.Superuser}>
                <span>Superuser</span>
              </div>
            </div>

            <div className={`${classes.data}`}>
              {usersList.map((product, idx) => {
                return <div className={classes.listsProducts} key={idx}>
                  <div className={classes.checkProd}>
                    <div className={classes.checkboxDiv}>


                      <input type="checkbox" id={`checkBox${product.check.id}`} />
                      <label htmlFor={`checkBox${product.check.id}`} className={classes.check}>
                        <div
                          className={classes.checked}
                        >
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15 4.5L6.75 12.75L3 9"
                              stroke="#0A0B10"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className={classes.ID}>
                    <span>{product.id}</span>
                  </div>
                  <div className={classes.TelegramIDProd}>
                    <span>{product.telegramID}</span>
                  </div>
                  <div className={classes.userNameProd}>
                    <span>{product.userName}</span>
                  </div>
                  <div className={classes.IMPProd}>
                    <div className={classes.checkboxDiv}>
                      <input type="checkbox" id={`checkBox${product.imp.id}`} />
                      <label htmlFor={`checkBox${product.imp.id}`} className={classes.check}>
                        <div
                          className={classes.checked}
                          onClick={() => {
                            if (allChecker) {
                              setAllChecker(false);
                            } else {
                              setAllChecker(true);
                            }
                          }}
                        >
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15 4.5L6.75 12.75L3 9"
                              stroke="#0A0B10"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className={classes.ETHAddressProd}>
                    <span>{product.eth.slice(0, 10) + "..."}</span>
                  </div>
                  <div className={classes.USDBalanceProd}>
                    <span>{product.usd}</span>
                  </div>
                  <div className={classes.staffProd}>
                    <div className={classes.checkboxDiv}>
                      <input type="checkbox" id={`checkBox${product.staff.id}`} />
                      <label htmlFor={`checkBox${product.staff.id}`} className={classes.check}>
                        <div
                          className={classes.checked}
                          onClick={() => {
                            if (allChecker) {
                              setAllChecker(false);
                            } else {
                              setAllChecker(true);
                            }
                          }}
                        >
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15 4.5L6.75 12.75L3 9"
                              stroke="#0A0B10"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className={classes.ActiveProd}>
                    <div className={classes.checkboxDiv}>
                      <input type="checkbox" id={`checkBox${product.active.id}`} />
                      <label htmlFor={`checkBox${product.active.id}`} className={classes.check}>
                        <div
                          className={classes.checked}
                          onClick={() => {
                            if (allChecker) {
                              setAllChecker(false);
                            } else {
                              setAllChecker(true);
                            }
                          }}
                        >
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15 4.5L6.75 12.75L3 9"
                              stroke="#0A0B10"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className={classes.superUserProd}>
                    <div className={classes.checkboxDiv}>
                      <input type="checkbox" id={`checkBox${product.superUser.id}`} />
                      <label htmlFor={`checkBox${product.superUser.id}`} className={classes.check}>
                        <div
                          className={classes.checked}
                          onClick={() => {
                            if (allChecker) {
                              setAllChecker(false);
                            } else {
                              setAllChecker(true);
                            }
                          }}
                        >
                          <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15 4.5L6.75 12.75L3 9"
                              stroke="#0A0B10"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>;
              })}
            </div>
          </div>
          <div className={classes.usersRight}>
            <ul>
              <li className={classes.active}>
                <span>Users</span>
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M18 9.5C18 14.4706 13.9706 18.5 9 18.5C4.02944 18.5 0 14.4706 0 9.5C0 4.52944 4.02944 0.5 9 0.5C13.9706 0.5 18 4.52944 18 9.5ZM9 14.5C8.44771 14.5 8 14.0523 8 13.5V10.5H5C4.44772 10.5 4 10.0523 4 9.5C4 8.94771 4.44772 8.5 5 8.5H8V5.5C8 4.94771 8.44771 4.5 9 4.5C9.55228 4.5 10 4.94771 10 5.5V8.5H13C13.5523 8.5 14 8.94771 14 9.5C14 10.0523 13.5523 10.5 13 10.5H10V13.5C10 14.0523 9.55229 14.5 9 14.5Z" fill="#999CB1" />
                </svg>


              </li>
              <li>
                <span>Users</span>
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M18 9.5C18 14.4706 13.9706 18.5 9 18.5C4.02944 18.5 0 14.4706 0 9.5C0 4.52944 4.02944 0.5 9 0.5C13.9706 0.5 18 4.52944 18 9.5ZM9 14.5C8.44771 14.5 8 14.0523 8 13.5V10.5H5C4.44772 10.5 4 10.0523 4 9.5C4 8.94771 4.44772 8.5 5 8.5H8V5.5C8 4.94771 8.44771 4.5 9 4.5C9.55228 4.5 10 4.94771 10 5.5V8.5H13C13.5523 8.5 14 8.94771 14 9.5C14 10.0523 13.5523 10.5 13 10.5H10V13.5C10 14.0523 9.55229 14.5 9 14.5Z" fill="#999CB1" />
                </svg>


              </li>
              <li>
                <span>Users</span>
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M18 9.5C18 14.4706 13.9706 18.5 9 18.5C4.02944 18.5 0 14.4706 0 9.5C0 4.52944 4.02944 0.5 9 0.5C13.9706 0.5 18 4.52944 18 9.5ZM9 14.5C8.44771 14.5 8 14.0523 8 13.5V10.5H5C4.44772 10.5 4 10.0523 4 9.5C4 8.94771 4.44772 8.5 5 8.5H8V5.5C8 4.94771 8.44771 4.5 9 4.5C9.55228 4.5 10 4.94771 10 5.5V8.5H13C13.5523 8.5 14 8.94771 14 9.5C14 10.0523 13.5523 10.5 13 10.5H10V13.5C10 14.0523 9.55229 14.5 9 14.5Z" fill="#999CB1" />
                </svg>


              </li>
              <li>
                <span>Users</span>
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M18 9.5C18 14.4706 13.9706 18.5 9 18.5C4.02944 18.5 0 14.4706 0 9.5C0 4.52944 4.02944 0.5 9 0.5C13.9706 0.5 18 4.52944 18 9.5ZM9 14.5C8.44771 14.5 8 14.0523 8 13.5V10.5H5C4.44772 10.5 4 10.0523 4 9.5C4 8.94771 4.44772 8.5 5 8.5H8V5.5C8 4.94771 8.44771 4.5 9 4.5C9.55228 4.5 10 4.94771 10 5.5V8.5H13C13.5523 8.5 14 8.94771 14 9.5C14 10.0523 13.5523 10.5 13 10.5H10V13.5C10 14.0523 9.55229 14.5 9 14.5Z" fill="#999CB1" />
                </svg>


              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersAndResults; 