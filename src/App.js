import {} from "react-router-dom";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Dashboard from "./pages/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import LogOut from "./components/LogOut/LogOut";
import Withdrawal from "./components/Withdrawal/Withdrawal";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import Logs from "./pages/Logs/Logs";
import Domains from "./pages/Domains/Domains";
import Profile from "./pages/Profile/Profile";
import Links from "./pages/Links/Links";
import AddContent from "./components/AddContent/AddContent";
import UsersAndResults from "./pages/UsersAndResults/UsersAndResults";
import Moderation from "./pages/Moderation/Moderation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import AddContentDomain from "./components/AddContent/AddContentDomain";

function App() {
  let [account, setAccount] = useState({});

  const [url, setUrl] = useState("");
  const [toggle, setToggle] = useState(true);
  const [logOutToggle, setLogOutToggle] = useState(false);
  const [withdrawalToggle, setWithdrawalToggle] = useState(false);
  const [addContentToggle, setAddContentToggle] = useState(false);
  const [addContentDomainsToggle, setAddContentDomainsToggle] = useState(false);
  const [changePasswordToggle, setChangePasswordToggle] = useState(false);

  const GetUrl = async () => {
    setUrl(window.location.pathname.split("/")[1].toLowerCase());
    if (
      window.location.pathname.split("/")[1].toLowerCase() ===
      "Users%20&%20Results".toLowerCase()
    ) {
      setUrl("Users & Results");
    }
  };
  useEffect(() => {
    axios.get("https://owl-panel.com/api/v2/getUser").then(function (resp) {
      setAccount(resp.data);
    });
  }, []);
  useEffect(() => {
    GetUrl();
  }, []);

  return (
    <div className="OWLTeam">
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {url === "auth" || (
        <Navbar
          account={account}
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
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              account={account}
              GetUrl={GetUrl}
              setWithdrawalToggle={setWithdrawalToggle}
              toggle={toggle}
              setToggle={setToggle}
            />
          }
        />
        <Route
          path="/logs"
          element={
            <Logs toggle={toggle} setToggle={setToggle} GetUrl={GetUrl} />
          }
        />
        <Route
          path="/domains"
          element={
            <Domains
              GetUrl={GetUrl}
              toggle={toggle}
              setToggle={setToggle}
              setAddContentDomainsToggle={setAddContentDomainsToggle}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile
              account={account}
              GetUrl={GetUrl}
              toggle={toggle}
              setWithdrawalToggle={setWithdrawalToggle}
            />
          }
        />
        <Route
          path="/links"
          element={
            <Links
              GetUrl={GetUrl}
              toggle={toggle}
              setWithdrawalToggle={setWithdrawalToggle}
              setAddContentToggle={setAddContentToggle}
            />
          }
        />
        <Route
          path="/usersResult"
          element={
            <UsersAndResults
              GetUrl={GetUrl}
              toggle={toggle}
              setAddContentToggle={setAddContentToggle}
            />
          }
        />
        <Route
          path="/admin"
          element={
            <Moderation
              GetUrl={GetUrl}
              toggle={toggle}
              setAddContentToggle={setAddContentToggle}
            />
          }
        />
        <Route path="/*" element={<Navigate to="/dashboard" />} />
      </Routes>

      {logOutToggle ||
      withdrawalToggle ||
      changePasswordToggle ||
      addContentToggle ||
      addContentDomainsToggle ? (
        <div
          className={"LogOutBackgound"}
          onClick={() => {
            setLogOutToggle(false);
            setWithdrawalToggle(false);
            setChangePasswordToggle(false);
            setAddContentToggle(false);
            setAddContentDomainsToggle(false);
          }}
        ></div>
      ) : (
        ""
      )}
      {logOutToggle && <LogOut setLogOutToggle={setLogOutToggle} />}
      {withdrawalToggle && (
        <Withdrawal
          account={account}
          setWithdrawalToggle={setWithdrawalToggle}
        />
      )}
      {changePasswordToggle && (
        <ChangePassword setChangePasswordToggle={setChangePasswordToggle} />
      )}
      {addContentToggle && (
        <AddContent GetUrl={url} setAddContentToggle={setAddContentToggle} />
      )}
      {addContentDomainsToggle && (
        <AddContentDomain
          GetUrl={url}
          setAddContentDomainsToggle={setAddContentDomainsToggle}
        />
      )}
    </div>
  );
}

export default App;
