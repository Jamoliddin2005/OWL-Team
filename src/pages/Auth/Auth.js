import React, { useState } from "react";
import classes from "./Auth.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import {HandleResponse} from "../utils"

// const submitButton = document.querySelector("#submitButton");

function MakeAuth(json) {
  // submitButton.setAttribute("disabled", true);
  HandleResponse(json);
  if (json.success) {
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  } else if (!json.success) {
    // submitButton.removeAttribute("disabled");
  }
}

function Auth() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const SubmitHandler = () => { 
    let data = {
      username: login,
      password: password,
    };
    axios
      .post("/auth", data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then(function (resp) { 
        MakeAuth(resp.data);
      });
  };

  return (
    <div className={classes.Auth}>
      <div className={classes.auth_container}>
        <Link to="/auth" className={classes.logo}>
          <img src="/uploads/logos/logo_login_page.png" alt="" />
        </Link>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            SubmitHandler();
          }}
        >
          <h3>Welcome back</h3>
          <p>Please enter your details to sign in.</p>
          <div className={`${classes.input} `}>
            <input
              type="text"
              placeholder="Enter login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>
          <div className={classes.input}>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button id="submitButton">Continue</button>
        </form>
      </div>
    </div>
  );
}

export default Auth;
