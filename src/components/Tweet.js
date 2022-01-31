import React from "react";

function Tweet({ nickname, login, message, image }) {
  return (
    <div className="tweet pointer">
      <img
        src="https://pbs.twimg.com/profile_images/1482759016535269379/m559Oniw_400x400.jpg"
        className="img-rounded pointer "
      />

      <div className="flex">
        <div className="tweet_nickLogin">
          <span className="tweet_nickname pointer">{nickname}</span>
          <span className="tweet_loginame pointer"> @{login}</span>
        </div>
        <span className="tweet_message ">{message && message}</span>
        {image && (
          <img
            className="tweet_img"
            src="https://pbs.twimg.com/media/FKV64sKWUAIMslK?format=jpg&name=medium"
          />
        )}

        <TweetInfo comment={10} retweet={52} like={205} />
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
        <span>{comment}</span>
      </span>
      <span className="twitter_retweet">
        <i className="fas fa-retweet "></i>
        {retweet}
      </span>
      <span className="twitter_like">
        <i className="far fa-heart "></i>
        {like}
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
