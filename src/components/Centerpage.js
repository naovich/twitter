import React, { useReducer, useState } from "react";
import Status from "./Status";
import Tweet, { Retweet } from "./Tweet";
//import reducer, { initialState } from "../data/reducer";
import { useStateValue } from "../data/StateProvider";

const msg =
  "avec mon mari on était sur l’autoroute ma phobie est arrivé : le capot s’est ouvert je sais pas si vous vous rendez compte on est dans gta là ? الحمد لله j’ai épousé un pilote";
const imgsrc =
  "https://pbs.twimg.com/media/FKV64sKWUAIMslK?format=jpg&name=medium";

function Centerpage() {
  //const [state, dispatch] = useStateValue();
  const [{ tweets }, dispatch] = useStateValue();

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
          .map((x, key) =>
            x.type == 0 ? (
              <Tweet
                key={x.id}
                message={x.message}
                nickname={x.nickname}
                login={x.login}
                imgProfil={x.imgProfil}
                image={x.image}
                comment={x.comment}
                retweet={x.rt}
                like={x.like}
                id={x.id}
              />
            ) : (
              <Retweet
                author={x.nickname}
                key={tweets[x.tweetId].id}
                message={tweets[x.tweetId].message}
                nickname={tweets[x.tweetId].nickname}
                login={tweets[x.tweetId].login}
                imgProfil={tweets[x.tweetId].imgProfil}
                image={tweets[x.tweetId].image}
                comment={tweets[x.tweetId].comment}
                retweet={tweets[x.tweetId].rt}
                like={tweets[x.tweetId].like}
                id={tweets[x.tweetId].id}
              />
            )
          )}
      </div>
    </div>
  );
}

export default Centerpage;
