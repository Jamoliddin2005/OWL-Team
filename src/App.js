import {} from "react-router-dom";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Dashboard from "./pages/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import LogOut from "./components/LogOut/LogOut";
import Withdrawal from "./components/Withdrawal/Withdrawal";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import Logs from "./pages/Logs/Logs";
import Domains from "./pages/Domains/Domains";

function App() {
  const [url, setUrl] = useState("");
  const [toggle, setToggle] = useState(true);
  const [logOutToggle, setLogOutToggle] = useState(false);
  const [withdrawalToggle, setWithdrawalToggle] = useState(false);
  const [changePasswordToggle, setChangePasswordToggle] = useState(false);

  const GetUrl = () => {
    setUrl(window.location.pathname.split("/")[1]);
    if (window.location.pathname.split("/")[1] === "Users%20&%20Results") {
      setUrl("Users & Results");
    }
  };
  useEffect(() => {
    GetUrl();
  }, []);

  return (
    <div className="OWLTeam">
      {url === "auth" || (
        <Navbar
          setChangePasswordToggle={setChangePasswordToggle}
          GetUrl={GetUrl}
          url={url}
          setLogOutToggle={setLogOutToggle}
          toggle={toggle}
          setToggle={setToggle}
        />
      )}
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              setWithdrawalToggle={setWithdrawalToggle}
              toggle={toggle}
              setToggle={setToggle}
            />
          }
        />
        <Route
          path="/logs"
          element={
            <Logs 
              toggle={toggle}
              setToggle={setToggle}
            />
          }
        />
        <Route
          path="/domains"
          element={
            <Domains 
              toggle={toggle}
              setToggle={setToggle}
            />
          }
        />
      </Routes>

      {logOutToggle || withdrawalToggle || changePasswordToggle ? (
        <div
          className={"LogOutBackgound"}
          onClick={() => {
            setLogOutToggle(false);
            setWithdrawalToggle(false);
            setChangePasswordToggle(false);
          }}
        ></div>
      ) : (
        ""
      )}
      {logOutToggle && <LogOut setLogOutToggle={setLogOutToggle} />}
      {withdrawalToggle && (
        <Withdrawal setWithdrawalToggle={setWithdrawalToggle} />
      )}
      {changePasswordToggle && (
        <ChangePassword setChangePasswordToggle={setChangePasswordToggle} />
      )}
    </div>
  );
}

export default App;
