import React, { useState } from "react";
import { useReducer, useRef } from "react";
import { produce } from "immer";
import { useStateValue } from "../data/StateProvider";

function Status() {
  const inputStatus = useRef();
  const [buttonEnabled, setButtonEnabled] = useState(true);
  const [{ userId, imgProfil, nickname, login, tweets }, dispatch] =
    useStateValue();

  function postTweet() {
    dispatch({
      type: "post",
      payload: {
        type: 0,
        id: userId + "-" + tweets.length,
        keyId: tweets.length,
        nickname: nickname,
        login: login,
        imgProfil: imgProfil,
        date: Date.now(),
        message: inputStatus.current.value,
        comment: 0,
        rt: 0,
        like: 0,
      },
    });
    inputStatus.current.value = "";
    setButtonEnabled(true);
  }

  return (
    <div className=" status">
      <img src={imgProfil} className="img-rounded " />
      <input
        onChange={() =>
          inputStatus.current.value != ""
            ? setButtonEnabled(false)
            : setButtonEnabled(true)
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
          <button onClick={postTweet} disabled={buttonEnabled}>
            Tweeter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Status;
