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
import Search from "./pages/Search";
import TweetOpen from "./pages/TweetOpen";
import { useStateValue } from "./data/StateProvider";

function App() {
  const [{ overlay }, dispatch] = useStateValue();

  return (
    <BrowserRouter>
      <div className="flex_h master">
        <Overlay>{overlay}</Overlay>
        <Leftpage />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/:profil" element={<Profil />} />
          <Route
            path="/:profil/status/:tweetId/:keyId"
            element={<TweetOpen />}
          />
          <Route path="/message" element={<Message />} />
          <Route path="/notification" element={<Notifications />} />
          <Route path="/trends" element={<Trends />} />
          <Route path="/search/:search" element={<Search />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Rightpage />
      </div>
    </BrowserRouter>
  );
}

export default App;
