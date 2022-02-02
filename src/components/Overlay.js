import React, { useState } from "react";

function Overlay({ img }) {
  const [show, setShow] = useState("overlayOff");
  return (
    <div className={show}>
      <li>
        <i
          className="fas fa-close"
          onClick={() => {
            setShow("overlayOff");
          }}
        ></i>
      </li>
      <img src={img} />
    </div>
  );
}

export default Overlay;
