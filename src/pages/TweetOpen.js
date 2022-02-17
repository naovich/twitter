import React, { useEffect, useState } from "react";

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
  const [answers2, setAnswers2] = useState([]);
  // window.scrollTo(0, 0);

  function getAnswers() {
    dispatch({
      type: "answers",
      payload: {
        tweetId: tweets[keyId].id.id,
        userId: tweets[keyId].id.user,
      },
    });
  }

  /* function getAnswers2() {
    dispatch({
      type: "answers2",
      payload: keyId,
    });
  }*/

  /*function getAnswers2(keyId) {
    tweets.filter((x) => {
      return x.question && x.question.keyId == keyId;
    });
  }*/

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setAnswers2(
      tweets.filter((x) => {
        return (
          x.question &&
          x.question.userId == tweets[keyId].id.user &&
          x.question.tweetId == tweets[keyId].id.id
        );
      })
    );
  }, [tweets, answers]);

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
      <Status placeholder="Tweeter votre réponse" keyId={keyId} />
      <div className="main ">
        {answers2.length != 0 &&
          answers2
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
                response={x.response}
              />
            ))}
      </div>
    </div>
  );
}

export default TweetOpen;
