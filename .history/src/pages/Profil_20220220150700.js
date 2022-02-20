import React, { useEffect, useState } from "react";
import { useStateValue } from "../data/StateProvider";
import NavigateBack from "../components/NavigateBack";
import Tweet, { Retweet } from "../components/Tweet";
import { useParams } from "react-router-dom";

function Profil() {
  const { profil } = useParams();
  const [user, setUser] = useState();
  const [{ tweets, userProfil, currentUser }, dispatch] = useStateValue();

  //gotoProfil(1);

  function gotoProfil(userId) {
    dispatch({ type: "profil", payload: userId });
    window.scrollTo(0, 0);
  }

  function follow(userId) {
    dispatch({ type: "follow", payload: userId });
    // console.log("follow:" + currentUser.subscriptions);
  }

  function unfollow(userId) {
    dispatch({ type: "unfollow", payload: userId });
    // console.log("unfollow" + currentUser.subscriptions);
  }

  function openImage(image) {
    dispatch({
      type: "overlay",
      payload: <img className="tweet_img pointer" src={image} />,
    });
  }

  const [activeClassTweet, setActiveClassTweet] = useState(
    "profil_tab_span_active"
  );
  const [activeClassReponse, setActiveClassReponse] = useState("");
  const [activeClassMedia, setActiveClassMedia] = useState("");
  const [activeClassLike, setActiveClassLike] = useState("");
  // const [activeClass, setActiveClass] = useState("tweets");
  //const [activeRender, setActiveRender] = useState(showTw);

  // ------------- SHOW TWEET -----------------

  function showTweets() {
    setActiveClassTweet("profil_tab_span_active");
    setActiveClassReponse("");
    setActiveClassMedia("");
    setActiveClassLike("");

    //setActiveRender(showTw);
    // setActiveClass("tweets");
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
              type={x.type}
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
              response={x.response}
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
    //setActiveClass("reponse");
    // setActiveRender(showRe);
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
    // setActiveRender(showMe);
    // setActiveClass("media");
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
              response={x.response}
            />
          )
      );
  }

  function showRe() {
    return tweets
      .slice(0)
      .reverse()
      .map(
        (x, index) =>
          x.login == userProfil.login && (
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
              response={x.response}
            />
          )
      );
  }

  function showLike() {
    return tweets
      .slice(0)
      .reverse()
      .map(
        (x, index) =>
          userProfil.userId == 0 &&
          x.likeOn && (
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
              response={x.response}
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
    // setActiveClass("like");
    // setActiveRender(showLi);
  }

  function showLi() {
    return <></>;
  }

  //useEffect(() => {
  //   window.scrollTo(0, 0);
  //}, []);
  //window.scrollTo(0,é
  return (
    <div className="center-page">
      <header>
        <div className="back">
          <NavigateBack />
          <h2>{userProfil.nickname}</h2>
        </div>
      </header>

      <div className="cover">
        <img
          className="pointer"
          onClick={() => openImage(userProfil.imgBanner)}
          src={userProfil.imgBanner}
        />
      </div>
      <div className="cover_info">
        <img
          className="pointer"
          onClick={() => openImage(userProfil.imgProfil)}
          src={userProfil.imgProfil}
        />
        {currentUser.userId == userProfil.userId ? (
          <button className="white-btn">Éditer le profil</button>
        ) : currentUser.subscriptions.find(
            (element) => element === userProfil.userId
          ) > 0 ? (
          <button
            onClick={() => unfollow(userProfil.userId)}
            className="white-btn"
          >
            Abonné
          </button>
        ) : (
          <button
            onClick={() => follow(userProfil.userId)}
            className="black-btn"
          >
            Suivre
          </button>
        )}

        <div>
          <h3 className="bold">{userProfil.nickname}</h3>
          <span className="tweet_loginame">@{userProfil.login}</span>

          {currentUser.subscriptions.find(
            (element) => element === userProfil.userId
          ) > 0 && <span className="vousuit"> vous suit</span>}
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
            Tweets et réponses
          </span>
          <span onClick={showMedias} className={activeClassMedia}>
            Médias
          </span>
          <span onClick={showLikes} className={activeClassLike}>
            J'aime
          </span>
        </div>
      </div>

      <div className="main ">
        {activeClassMedia == "profil_tab_span_active" && showMe()}
        {activeClassTweet == "profil_tab_span_active" && showTw()}
        {activeClassReponse == "profil_tab_span_active" && showRe()}
        {activeClassLike == "profil_tab_span_active" && showLike()}
      </div>
    </div>
  );
}

export default Profil;
