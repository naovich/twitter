import React, { useEffect, useReducer, useState } from "react";
import Status from "./Status";
import Tweet, { Retweet } from "./Tweet";
//import reducer, { initialState } from "../data/reducer";
import { useStateValue } from "../data/StateProvider";

const msg =
  "avec mon mari on était sur l’autoroute ma phobie est arrivé : le capot s’est ouvert je sais pas si vous vous rendez compte on est dans gta là ? الحمد لله j’ai épousé un pilote";
const imgsrc =
  "https://pbs.twimg.com/media/FKV64sKWUAIMslK?format=jpg&name=medium";

function Centerpage() {
  const [{ tweets, userId, init }, dispatch] = useStateValue();

  function getTweet() {
    dispatch({
      type: "wall",
      payload: userId,
    });
  }

  useEffect(() => {
    if (!init) getTweet();
    console.log("init:" + init);
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
