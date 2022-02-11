import React, { useEffect, useReducer, useState } from "react";
import Status from "./Status";
import Tweet, { Retweet } from "./Tweet";
//import reducer, { initialState } from "../data/reducer";
import { useStateValue } from "../data/StateProvider";

function Centerpage() {
  const [{ tweets, currentUser, init }, dispatch] = useStateValue();

  function getTweet() {
    dispatch({
      type: "wall",
      payload: currentUser.userId,
    });
  }

  useEffect(() => {
    if (!init) getTweet();
  }, []);

  return (
    <div className="center-page">
      <header>
        <h1>ACCUEIL</h1>
      </header>

      <Status />

      <div className="main ">
        {tweets
          .slice(0)
          .reverse()
          .map((x, index) => (
            <Tweet
              key={index}
              userId={x.userId}
              keyId={x.keyId}
              message={x.message}
              nickname={x.nickname}
              login={x.login}
              date={x.date}
              imgProfil={x.imgProfil}
              image={x.image}
              comment={x.comment}
              retweet={x.rt}
              like={x.like}
              likeOn={x.likeOn}
              rtOn={x.rtOn}
              id={x.id}
            />
          ))}
      </div>
    </div>
  );
}

export default Centerpage;
