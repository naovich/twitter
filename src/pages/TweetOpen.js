import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import Overlay from "../components/Overlay";
import { useStateValue } from "../data/StateProvider";
import Tweet, { TweetInfo } from "../components/Tweet";
import NavigateBack from "../components/NavigateBack";
import { useParams } from "react-router-dom";
import Status from "../components/Status";

function TweetOpen() {
  const [{ tweets, answers }, dispatch] = useStateValue();
  const { profil, tweetId, keyId, keyTab } = useParams();
  window.scrollTo(0, 0);

  function getAnswers() {
    dispatch({
      type: "answers",
      payload: {
        tweetId: tweets[keyId].id.id,
        userId: tweets[keyId].id.user,
      },
    });
  }

  useEffect(() => {
    getAnswers();
  }, []);

  return (
    <div className="center-page">
      <header>
        <div className="back">
          <NavigateBack />
          <h2>Tweet</h2>
        </div>
      </header>

      <Tweet
        keyTab={keyTab}
        userId={tweets[keyId].id.user}
        keyId={tweets[keyId].keyId}
        message={tweets[keyId].message}
        nickname={tweets[keyId].nickname}
        login={tweets[keyId].login}
        date={tweets[keyId].date}
        imgProfil={tweets[keyId].imgProfil}
        image={tweets[keyId].image}
        comment={tweets[keyId].comment}
        retweet={tweets[keyId].rt}
        like={tweets[keyId].like}
        likeOn={tweets[keyId].likeOn}
        rtOn={tweets[keyId].rtOn}
        id={tweets[keyId].id.id}
      />
      <Status placeholder="Tweeter votre réponse" />
      <div className="main ">
        {answers.length != 0 &&
          answers
            .slice(0)
            .reverse()
            .map((x, index) => (
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
              />
            ))}
      </div>
    </div>
  );
}

export default TweetOpen;
