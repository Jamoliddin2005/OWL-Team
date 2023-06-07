import React, { useState } from "react";
import classes from "./Auth.module.css";
import { Link } from "react-router-dom";

function Auth() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const SubmitHandler = () => {
    console.log("Login: ", login);
    console.log("Password: ", password);
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

          <button>Continue</button>
        </form>
      </div>
    </div>
  );
}

export default Auth;
