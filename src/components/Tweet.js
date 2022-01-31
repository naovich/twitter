import React from "react";
import { k } from "../Tools/tools";

function Tweet({
  nickname,
  login,
  message,
  imgProfil,
  image,
  comment,
  retweet,
  like,
}) {
  return (
    <div className="tweet pointer">
      <img src={imgProfil} className="img-rounded pointer " />

      <div className="flex">
        <div className="tweet_nickLogin">
          <span className="tweet_nickname pointer">{nickname}</span>
          <span className="tweet_loginame pointer"> @{login}</span>
        </div>
        <span className="tweet_message ">{message && message}</span>
        {image && <img className="tweet_img" src={image} />}

        <TweetInfo comment={comment} retweet={retweet} like={like} />
      </div>
    </div>
  );
}

export default Tweet;

function TweetInfo({ comment, retweet, like }) {
  return (
    <div className="flex_h tweet_iconInfo">
      <span className="twitter_comment">
        <i className="far fa-comment"></i>
        <span>{k(comment)}</span>
      </span>
      <span className="twitter_retweet">
        <i className="fas fa-retweet "></i>
        {k(retweet)}
      </span>
      <span className="twitter_like">
        <i className="far fa-heart "></i>
        {k(like)}
      </span>
      <span className="twitter_comment">
        <i className="far fa-share-square "></i>
      </span>
    </div>
  );
}

export function Retweet({ author }) {
  return (
    <div className="retweet">
      <span className="tweet_nickname pointer grey">
        <i className="fas fa-retweet "></i> {author}
      </span>

      <Tweet message="My retweet" nickname="Postmaster" login="Postmaster25" />
    </div>
  );
}
