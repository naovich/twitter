import React from "react";

function Suggestion({ nickname, login, imgProfil }) {
  return (
    <div className=" suggestion_item pointer">
      <div className=" suggestion_item_child suggestion_img_nickname">
        <img src={imgProfil} className="img-rounded pointer " />
        <div className="suggestion_nicklogin">
          <span className="tweet_nickname pointer">{nickname}</span>
          <span className="tweet_loginame pointer"> @{login}</span>
        </div>
      </div>

      <button className="suggestion_item_child"> Suivre</button>
    </div>
  );
}

export default Suggestion;
