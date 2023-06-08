import {} from "react-router-dom";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Dashboard from "./pages/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import LogOut from "./components/LogOut/LogOut";

function App() {
  const [url, setUrl] = useState("");
  const [toggle, setToggle] = useState(true);
  const [logOutToggle, setLogOutToggle] = useState(true);

  useEffect(() => {
    setUrl(window.location.pathname.split("/")[1]);
  }, []);

  return (
    <div className="OWLTeam">
      {url === "auth" || <Navbar setLogOutToggle={setLogOutToggle} toggle={toggle} setToggle={setToggle} />}

      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/dashboard"
          element={<Dashboard toggle={toggle} setToggle={setToggle} />}
        />
      </Routes>

      {logOutToggle && (
        <div
          className={"LogOutBackgound"}
          onClick={() => {
            setLogOutToggle(false);
          }}
        ></div>
      )}
      {logOutToggle && <LogOut setLogOutToggle={setLogOutToggle} />}
    </div>
  );
}

export default App;
