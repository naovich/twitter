import React from "react";
import Status from "./Status";
import Tweet, { Retweet } from "./Tweet";

const msg =
  "avec mon mari on était sur l’autoroute ma phobie est arrivé : le capot s’est ouvert je sais pas si vous vous rendez compte on est dans gta là ? الحمد لله j’ai épousé un pilote";
const imgsrc =
  "https://pbs.twimg.com/media/FKV64sKWUAIMslK?format=jpg&name=medium";

function Centerpage() {
  return (
    <div className="center-page">
      <header>
        <h1>ACCUEIL</h1>
      </header>

      <Status />

      <div className="main ">
        <Tweet
          message={msg}
          nickname="sarah2563"
          login="ela452"
          image={imgsrc}
        />
        <Retweet author="naovich" />
      </div>
    </div>
  );
}

export default Centerpage;
