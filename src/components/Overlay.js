import React, { Children, useEffect, useState } from "react";
import { useStateValue } from "../data/StateProvider";

function Overlay({ children, isOpen = false }) {
  const [show, setShow] = useState(isOpen);

  const [show4, setShow4] = useState("allo");
  const [{ isOverlayOpened }, dispatch] = useStateValue();

  /*useEffect(() => {
    console.log("ok");
  }, [show]);
*/

  return (
    <div
      className={`overlayOff" ${isOverlayOpened ? "overlay" : "overlayOff"}`}
    >
      <li>
        <i
          className="fas fa-close pointer"
          onClick={() => {
            console.log(show4);
            setShow(false);
            setShow4("à l'huile");
            console.log(show4);

            dispatch({
              type: "closeOverlay",
            });
          }}
        ></i>
      </li>
      {children}
    </div>
  );
}

export default Overlay;
