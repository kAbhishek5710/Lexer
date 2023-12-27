import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "../src/components/Dashboard/Dashboard";
import Liquidity from "./components/Liquidity/Liquidity";
import LexStake from "./components/LexStake/Lexstake";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Liquidity" element={<Liquidity />} />
        <Route path="/stake" element={<LexStake />} />
      </Routes>
    </Router>
  );
}

export default App;
