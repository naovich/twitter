import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../data/StateProvider";

function Leftpage() {
  const [{ currentUser }, dispatch] = useStateValue();
  function gotoProfil() {
    dispatch({ type: "profil", payload: currentUser.userId });
    window.scrollTo(0, 0);
  }

  return (
    <div className="left-page">
      <ul className="left-icon flex_v">
        <li className="logo">
          <Link to="/">
            <i className="fab fa-twitter"></i>
          </Link>
        </li>

        <Link to="/">
          <li>
            <i className="fas fa-home"></i>
          </li>
        </Link>

        <div onClick={gotoProfil}>
          <Link to={`/${currentUser.login}`}>
            <li>
              <i className="fas fa-user"></i>
            </li>
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default Leftpage;
