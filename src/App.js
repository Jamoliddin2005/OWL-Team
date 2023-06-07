import {} from "react-router-dom";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Dashboard from "./pages/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="OWLTeam">
      <Navbar />
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
