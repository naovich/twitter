import React from "react";
import { useStateValue } from "../data/StateProvider";
import NavigateBack from "../components/NavigateBack";

function Profil() {
  const [
    { nickname, imgProfil, login, subscription, subscriber, bio },
    dispatch,
  ] = useStateValue();
  return (
    <div className="center-page">
      <header>
        <div className="back">
          <NavigateBack />
          <h2>{nickname}</h2>
        </div>
      </header>

      <div className="cover"></div>
      <div className="cover_info">
        <img src={imgProfil} />
        <button>Éditer le profil</button>
        <div>
          <h3 className="bold">{nickname}</h3>
          <span className="tweet_loginame">@{login}</span>
        </div>
        <div className="bio">
          <p>{bio}</p>
          <span className="bold">{subscription} </span>
          <span>abonnements</span>

          <span className="bold margeLeft20"> {subscriber} </span>
          <span>abonnés</span>
        </div>
        <div className="flex_h profil_tab">
          <span className="profil_tab_span_active">Tweets</span>
          <span>Réponses</span>
          <span>Médias</span>
          <span>J'aime</span>
        </div>
      </div>
    </div>
  );
}

export default Profil;
