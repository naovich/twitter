import React, { useState } from "react";
import NavigateBack from "../components/NavigateBack";
import { useStateValue } from "../data/StateProvider";
import { useParams } from "react-router-dom";
import Tweet, { Retweet } from "../components/Tweet";

function Search() {
  const { search } = useParams();
  window.scroll(0, 0);
  const find = new RegExp(search, "i"); // correct way
  //const find = /`${search}`/i; //+ "/i";
  const [{ tweets }, dispatch] = useStateValue();

  const [activeClassUne, setActiveClassUne] = useState(
    "profil_tab_span_active"
  );
  const [activeClassRecent, setActiveClassRecent] = useState("");
  const [activeClassPerson, setActiveClassPerson] = useState("");
  const [activeClassPhoto, setActiveClassPhoto] = useState("");

  function une() {
    setActiveClassUne("profil_tab_span_active");
    setActiveClassRecent("");
    setActiveClassPerson("");
    setActiveClassPhoto("");
  }

  function recent() {
    setActiveClassUne("");
    setActiveClassRecent("profil_tab_span_active");
    setActiveClassPerson("");
    setActiveClassPhoto("");
  }

  function personnes() {
    setActiveClassUne("");
    setActiveClassRecent("");
    setActiveClassPerson("profil_tab_span_active");
    setActiveClassPhoto("");
  }

  function photo() {
    setActiveClassUne("");
    setActiveClassRecent("");
    setActiveClassPerson("");
    setActiveClassPhoto("profil_tab_span_active");
  }

  function showUne() {
    tweets
      .slice(0)
      .reverse()
      .map(
        (x, index) =>
          x.type === 0 &&
          (x.message.match(find) ||
            x.nickname.match(find) ||
            x.login.match(find)) && (
            <Tweet
              key={index}
              type={x.type}
              keyTab={index}
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
              answers={x.answers}
              question={x.question}
              response={x.response}
            />
          )
      );
  }

  return (
    <div className="center-page">
      <header>
        <div className="back">
          <NavigateBack />
          {search}
        </div>
      </header>
      <div className="flex_h profil_tab">
        <span onClick={une} className={activeClassUne}>
          A la une
        </span>

        <span onClick={personnes} className={activeClassPerson}>
          Personnes
        </span>
        <span onClick={photo} className={activeClassPhoto}>
          Photos
        </span>
      </div>
      <div className="main">
        {activeClassUne === "profil_tab_span_active" &&
          tweets
            .slice(0)
            .reverse()
            .map(
              (x, index) =>
                x.type === 0 &&
                (x.message.match(find) ||
                  x.nickname.match(find) ||
                  x.login.match(find)) && (
                  <Tweet
                    key={index}
                    type={x.type}
                    keyTab={index}
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
                    answers={x.answers}
                    question={x.question}
                    response={x.response}
                  />
                )
            )}

        {activeClassPhoto === "profil_tab_span_active" &&
          tweets
            .slice(0)
            .reverse()
            .map(
              (x, index) =>
                x.type === 0 &&
                (x.message.match(find) ||
                  x.nickname.match(find) ||
                  x.login.match(find)) &&
                x.image && (
                  <Tweet
                    key={index}
                    type={x.type}
                    keyTab={index}
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
                    answers={x.answers}
                    question={x.question}
                    response={x.response}
                  />
                )
            )}

        {activeClassPerson === "profil_tab_span_active" &&
          tweets
            .slice(0)
            .reverse()
            .map(
              (x, index) =>
                x.type === 0 &&
                (x.nickname.match(find) || x.login.match(find)) && (
                  <Tweet
                    key={index}
                    type={x.type}
                    keyTab={index}
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
                    answers={x.answers}
                    question={x.question}
                    response={x.response}
                  />
                )
            )}
      </div>
    </div>
  );
}

export default Search;
