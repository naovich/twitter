import React from "react";

function Rightpage() {
  return (
    <div className="right-page flex_v">
      <div className="input-icons">
        <i className="fas fa-search icon"> </i>
        <input type="text" placeholder="Rechercher" />
      </div>
      <div className="trends flex_v">
        <div className="flex_h">
          <h2>Tendances: France</h2>
          <a href="#">
            {" "}
            <i className="fas fa-cog setting"></i>{" "}
          </a>
        </div>

        <div>
          <ul className="trend_item">
            <li className="categorie">1. Categorie</li>
            <li className="hashtag">#Categorie</li>
            <li className="tweet_number">21,6k Tweets</li>
          </ul>
        </div>

        <div>
          <ul className="trend_item">
            <li className="categorie">2. Categorie</li>
            <li className="hashtag">#Categorie</li>
            <li className="tweet_number">21,6k Tweets</li>
          </ul>
        </div>

        <div>
          <ul className="trend_item">
            <li className="categorie">3. Categorie</li>
            <li className="hashtag">#Categorie</li>
            <li className="tweet_number">21,6k Tweets</li>
          </ul>
        </div>

        <div>
          <ul className="trend_item">
            <li className="categorie">1. Categorie</li>
            <li className="hashtag">#Categorie</li>
            <li className="tweet_number">21,6k Tweets</li>
          </ul>
        </div>

        <div>
          <ul className="trend_item">
            <li className="categorie trend_more">Voir plus</li>
          </ul>
        </div>
      </div>

      <div className="trends flex_v">
        <h2>Suggestions</h2>
      </div>
    </div>
  );
}

export default Rightpage;
