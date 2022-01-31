import React, { useState } from "react";
import { useReducer, useRef } from "react";
import { produce } from "immer";
import reducer, { initialState } from "../data/reducer";

function Status() {
  const inputStatus = useRef();
  const buttonStatus = useRef();
  const [state, dispatch] = useReducer(reducer, initialState);

  function postTweet() {
    dispatch({ type: "post", payload: { messagea: "Message", time: "17h30" } });
    console.log("rf");
  }

  return (
    <div className=" status">
      <img src={state.imgProfil} className="img-rounded " />
      <input
        onChange={() =>
          inputStatus.current.value != ""
            ? (buttonStatus.current.disabled = false)
            : (buttonStatus.current.disabled = true)
        }
        placeholder="Quoi de neuf ?"
        className="status_input"
        ref={inputStatus}
      />
      <div className="reponse">
        <span>
          <a href="">
            <i className="fas fa-globe-africa"></i> Tout le monde peut répondre
          </a>
        </span>
        <div className="iconstatus">
          <i className="fas fa-image"></i>
          <i className="fas fa-smile"></i>
          <button onClick={() => console.log("ok")} ref={buttonStatus} disabled>
            Tweeter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Status;
