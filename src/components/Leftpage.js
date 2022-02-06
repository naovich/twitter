import React from "react";
import { Link } from "react-router-dom";

function Leftpage() {
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

        <a className="smartphone" href="#">
          <li>
            <i className="fas fa-search"></i>
          </li>
        </a>
        <Link to="/notification">
          <li>
            <i className="fas fa-bell"></i>
          </li>
        </Link>
        <Link to="/message">
          <li>
            <i className="fas fa-envelope"></i>
          </li>
        </Link>
        <Link to="/profil">
          <li>
            <i className="fas fa-user"></i>
          </li>
        </Link>
        <a href="#">
          <li>
            <i className="fas fa-ellipsis-h"></i>
          </li>
        </a>
      </ul>
    </div>
  );
}

export default Leftpage;
