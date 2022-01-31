import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Trends from "./pages/Trends";
import "./css/style.css";
import Leftpage from "./components/Leftpage";
import Rightpage from "./components/Rightpage";

function App() {
  return (
    <BrowserRouter>
      <div className="flex_h master">
        <Leftpage />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Trends" element={<Trends />} />
        </Routes>
        <Rightpage />
      </div>
    </BrowserRouter>
  );
}

export default App;
