import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Trends from "./pages/Trends";
import "./css/style.css";
import Leftpage from "./components/Leftpage";
import Rightpage from "./components/Rightpage";
import Overlay from "./components/Overlay";
import Profil from "./pages/Profil";
import Error404 from "./pages/Error404";
import Message from "./pages/Message";
import Notifications from "./pages/Notifications";

function App() {
  return (
    <BrowserRouter>
      <div className="flex_h master">
        <Leftpage />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/message" element={<Message />} />
          <Route path="/notification" element={<Notifications />} />
          <Route path="/Trends" element={<Trends />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Rightpage />
      </div>
    </BrowserRouter>
  );
}

export default App;
