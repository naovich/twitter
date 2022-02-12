import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { k } from "../Tools/tools";
import Overlay from "./Overlay";
import { useStateValue } from "../data/StateProvider";

function Tweet({
  userId,
  nickname,
  login,
  message,
  date,
  imgProfil,
  image,
  comment,
  retweet,
  like,
  id,
  keyId,
  likeOn,
  rtOn,
}) {
  const [{ userProfil }, dispatch] = useStateValue();

  function gotoProfil(userId) {
    dispatch({ type: "profil", payload: userId });
    window.scrollTo(0, 0);
  }
  return (
    <div className="tweet pointer">
      <Overlay />
      <img src={imgProfil} className="img-rounded pointer " />

      <div className="flex">
        <div onClick={() => gotoProfil(userId)} className="tweet_nickLogin">
          <Link to="/profil">
            <span className="tweet_nickname pointer">{nickname}</span>
            <span className="tweet_loginame pointer"> @{login}</span>
          </Link>
        </div>
        <span className="tweet_message ">{message && message}</span>
        {image && <img className="tweet_img" src={image} />}

        <TweetInfo
          comment={comment}
          retweet={retweet}
          like={like}
          id={id}
          keyId={keyId}
          likeOn={likeOn}
          rtOn={rtOn}
        />
      </div>
    </div>
  );
}

export default Tweet;

function TweetInfo({ comment, retweet, like, id, keyId, likeOn, rtOn }) {
  const [{ tweets }, dispatch] = useStateValue();

  function onLike() {
    dispatch({
      type: "like",
      payload: {
        id: id,
        keyId: keyId,
      },
    });
  }

  function onRT() {
    dispatch({
      type: "rt",
      payload: {
        id: id,
        keyId: keyId,
      },
    });
  }

  return (
    <div className="flex_h tweet_iconInfo">
      <span className="twitter_comment">
        <i className="far fa-comment"></i>
        <span>{k(comment)}</span>
      </span>

      <span onClick={onRT} className="twitter_retweet">
        {rtOn ? (
          <>
            <i className="fas fa-retweet twitter_rted "></i>{" "}
            <span className="twitter_rted">{k(retweet)}</span>
          </>
        ) : (
          <>
            <i className="fas fa-retweet "></i>
            <span>{k(retweet)}</span>
          </>
        )}
      </span>

      <span onClick={onLike} className="twitter_like">
        {likeOn ? (
          <>
            <i className="fas fa-heart twitter_liked "></i>
            <span className="twitter_liked"> {k(like)}</span>
          </>
        ) : (
          <>
            <i className="far fa-heart "></i>
            <span> {k(like)}</span>
          </>
        )}
      </span>
      <span className="twitter_comment">
        <i className="far fa-share-square "></i>
      </span>
    </div>
  );
}

export function Retweet({
  author,
  nickname,
  login,
  message,
  imgProfil,
  image,
  comment,
  retweet,
  like,
  id,
}) {
  //const [{ tweets, nickname }, dispatch] = useStateValue();

  return (
    <div className="retweet">
      <span className="tweet_nickname pointer grey">
        <i className="fas fa-retweet "></i> {author}
      </span>
      <Tweet
        message={message}
        nickname={nickname}
        imgProfil={imgProfil}
        login={login}
        image={image}
        comment={comment}
        retweet={retweet}
        like={like}
        id={id}
      />
    </div>
  );
}
