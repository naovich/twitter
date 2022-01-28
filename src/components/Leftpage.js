import React from "react";

function Leftpage() {
  return (
    <div className="left-page">
      <ul className="left-icon flex_v">
        <a href="#">
          <li className="logo">
            <i className="fab fa-twitter"></i>
          </li>
        </a>
        <a href="#">
          <li>
            <i className="fas fa-home"></i>
          </li>
        </a>

        <a className="smartphone" href="#">
          <li>
            <i className="fas fa-search"></i>
          </li>
        </a>
        <a href="#">
          <li>
            <i className="fas fa-bell"></i>
          </li>
        </a>
        <a href="#">
          <li>
            <i className="fas fa-envelope"></i>
          </li>
        </a>
        <a href="#">
          <li>
            <i className="fas fa-user"></i>
          </li>
        </a>
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
