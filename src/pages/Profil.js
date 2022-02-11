import React, { useState } from "react";
import { useStateValue } from "../data/StateProvider";
import NavigateBack from "../components/NavigateBack";
import Tweet, { Retweet } from "../components/Tweet";

function Profil() {
  const [{ tweets, userProfil, currentUser }, dispatch] = useStateValue();

  const [activeClassTweet, setActiveClassTweet] = useState(
    "profil_tab_span_active"
  );
  const [activeClassReponse, setActiveClassReponse] = useState("");
  const [activeClassMedia, setActiveClassMedia] = useState("");
  const [activeClassLike, setActiveClassLike] = useState("");

  const [activeRender, setActiveRender] = useState(showTw);

  // ------------- SHOW TWEET -----------------

  function showTweets() {
    setActiveClassTweet("profil_tab_span_active");
    setActiveClassReponse("");
    setActiveClassMedia("");
    setActiveClassLike("");

    setActiveRender(showTw);
  }

  function showTw() {
    return tweets
      .slice(0)
      .reverse()
      .map(
        (x, index) =>
          x.type == 0 &&
          x.login == userProfil.login && (
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
          )
      );
  }

  // ------------- SHOW REPONSES -----------------

  function showReponses() {
    setActiveClassTweet("");
    setActiveClassReponse("profil_tab_span_active");
    setActiveClassMedia("");
    setActiveClassLike("");

    setActiveRender(showRe);
  }

  function showRe() {
    return <></>;
  }

  // ------------- SHOW MEDIA -----------------

  function showMedias() {
    setActiveClassTweet("");
    setActiveClassReponse("");
    setActiveClassMedia("profil_tab_span_active");
    setActiveClassLike("");

    setActiveRender(showMe);
  }

  function showMe() {
    return tweets
      .slice(0)
      .reverse()
      .map(
        (x, index) =>
          x.type == 0 &&
          x.login == userProfil.login &&
          x.image && (
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
          )
      );
  }

  // ------------- SHOW LIKE -----------------

  function showLikes() {
    setActiveClassTweet("");
    setActiveClassReponse("");
    setActiveClassMedia("");
    setActiveClassLike("profil_tab_span_active");

    setActiveRender(showLi);
  }

  function showLi() {
    return <></>;
  }
  window.scrollTo(0, 0);
  return (
    <div className="center-page">
      <header>
        <div className="back">
          <NavigateBack />
          <h2>
            {userProfil.nickname} {userProfil.userId}
          </h2>
        </div>
      </header>

      <div className="cover"></div>
      <div className="cover_info">
        <img src={userProfil.imgProfil} />
        {currentUser.userId == userProfil.userId && (
          <button>Éditer le profil</button>
        )}

        <div>
          <h3 className="bold">{userProfil.nickname}</h3>
          <span className="tweet_loginame">@{userProfil.login}</span>
        </div>
        <div className="bio">
          <p>{userProfil.bio}</p>
          <span className="bold">{userProfil.subscription} </span>
          <span>abonnements</span>

          <span className="bold margeLeft20"> {userProfil.subscriber} </span>
          <span>abonnés</span>
        </div>
        <div className="flex_h profil_tab">
          <span onClick={showTweets} className={activeClassTweet}>
            Tweets
          </span>
          <span onClick={showReponses} className={activeClassReponse}>
            Réponses
          </span>
          <span onClick={showMedias} className={activeClassMedia}>
            Médias
          </span>
          <span onClick={showLikes} className={activeClassLike}>
            J'aime
          </span>
        </div>
      </div>

      <div className="main ">{activeRender}</div>
    </div>
  );
}

export default Profil;
