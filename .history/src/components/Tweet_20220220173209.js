import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { k } from "../Tools/tools";
import Overlay from "./Overlay";
import { useStateValue } from "../data/StateProvider";

function Tweet({
  userId,
  question,
  type,
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
  keyTab,
  answers,
  response,
}) {
  const [{ userProfil }, dispatch] = useStateValue();

  function gotoProfil(userId) {
    dispatch({ type: "profil", payload: userId });
    window.scrollTo(0, 0);
  }

  function openImage() {
    dispatch({
      type: "overlay",
      payload: <img className="tweet_img pointer" src={image} />,
    });
  }
  return (
    <div className="tweetGlobal">
      <div className="tweet ">
        <div onClick={() => gotoProfil(userId)} className="tweet_nickLogin">
          <Link to={`/${login}`}>
            <img src={imgProfil} className="img-rounded pointer " />
          </Link>
        </div>

        <div className="flex">
          <div onClick={() => gotoProfil(userId)} className="tweet_nickLogin">
            <Link to={`/${login}`}>
              <span className="tweet_nickname pointer">{nickname}</span>
              <span className="tweet_loginame pointer"> @{login}</span>
            </Link>
          </div>
          <div className="">
            {response && (
              <>
                <span className="response">En réponse à : </span>
                <span onClick={() => gotoProfil(response.userId)}>
                  <Link to={`/${response}`}>
                    <span className="arobase">@{response.login}</span>
                  </Link>
                </span>
              </>
            )}
          </div>
          {type == 0 ? (
            <Link to={`/${login}/status/${id.id}/${keyId}`}>
              <div className="message">
                <span className="tweet_message pointer ">
                  {message && message}
                </span>
              </div>
            </Link>
          ) : (
            <div className="message">
              <span className="tweet_message">{message && message}</span>
            </div>
          )}

          {image && (
            <img
              onClick={openImage}
              className="tweet_img pointer"
              src={image}
            />
          )}
        </div>
      </div>

      <div className="tweetInfo">
        <TweetInfo
          comment={comment}
          retweet={retweet}
          like={like}
          id={id}
          keyId={keyId}
          likeOn={likeOn}
          rtOn={rtOn}
          link={`/${login}/status/${id.id}/${keyId}`}
          type={type}
        />
      </div>
    </div>
  );
}

export default Tweet;

export function TweetInfo({
  comment,
  retweet,
  like,
  id,
  keyId,
  likeOn,
  rtOn,
  link,
  type,
}) {
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
      {type == 0 ? (
        <Link to={link}>
          <span className="twitter_comment">
            <i className="far fa-comment"></i>
            <span className="pointer">{k(comment)}</span>
          </span>
        </Link>
      ) : (
        <span className="">
          <i className="far fa-comment"></i>
          <span className="pointer">{k(comment)}</span>
        </span>
      )}

      <span onClick={onRT} className="twitter_retweet">
        {rtOn ? (
          <>
            <i className="fas fa-retweet twitter_rted pointer"></i>{" "}
            <span className="twitter_rted pointer">{k(retweet)}</span>
          </>
        ) : (
          <>
            <i className="fas fa-retweet pointer "></i>
            <span className="pointer">{k(retweet)}</span>
          </>
        )}
      </span>

      <span onClick={onLike} className="twitter_like">
        {likeOn ? (
          <>
            <i className="fas fa-heart twitter_liked pointer "></i>
            <span className="twitter_liked pointer"> {k(like)}</span>
          </>
        ) : (
          <>
            <i className="far fa-heart pointer"></i>
            <span className="pointer"> {k(like)}</span>
          </>
        )}
      </span>

      <span className="twitter_comment pointer">
        <i className="far fa-share-square pointer"></i>
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
