import React, { useState } from "react";
import { useReducer, useRef } from "react";
import { produce } from "immer";
import { useStateValue } from "../data/StateProvider";

function Status({ placeholder, keyId }) {
  const inputStatus = useRef();
  const [buttonEnabled, setButtonEnabled] = useState(true);
  const [{ currentUser, tweets }, dispatch] = useStateValue();
  //console.log(keyId);
  function postTweet() {
    keyId
      ? dispatch({
          type: "response",
          payload: {
            type: 1,
            question: {
              userId: tweets[keyId].id.user,
              tweetId: tweets[keyId].id.id, //parseInt(keyId), //tweets[keyId].id.id,
            },
            id: {
              user: currentUser.userId,
              id: tweets.length,
            },
            // id: currentUser.userId + "-" + tweets.length,
            userId: currentUser.userId,
            keyId: tweets.length,
            nickname: currentUser.nickname,
            login: currentUser.login,
            imgProfil: currentUser.imgProfil,
            date: Date.now(),
            message: inputStatus.current.value,
            comment: 0,
            rt: 0,
            like: 0,
            likeOn: false,
            rtOn: false,
            likes: [],
            rts: [],
            comments: [],
            answers: [],
            parentKeyId: keyId,
          },
        })
      : dispatch({
          type: "post",
          payload: {
            type: 0,
            id: {
              user: currentUser.userId,
              id: tweets.length,
            },
            // id: currentUser.userId + "-" + tweets.length,
            userId: currentUser.userId,
            keyId: tweets.length,
            nickname: currentUser.nickname,
            login: currentUser.login,
            imgProfil: currentUser.imgProfil,
            date: Date.now(),
            message: inputStatus.current.value,
            comment: 0,
            rt: 0,
            like: 0,
            likeOn: false,
            rtOn: false,
            likes: [],
            rts: [],
            comments: [],
            answers: [],
          },
        });

    inputStatus.current.value = "";
    setButtonEnabled(true);
  }

  return (
    <div className=" status">
      <img src={currentUser.imgProfil} className="img-rounded " />
      <input
        onChange={() =>
          inputStatus.current.value != ""
            ? setButtonEnabled(false)
            : setButtonEnabled(true)
        }
        placeholder={placeholder}
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
