import React from "react";
import { k } from "../Tools/tools";

function Trend({ id, categorie, hashtag, rt }) {
  let cat = id + " · ";
  categorie ? (cat = cat + categorie + " · ") : (cat = cat);
  cat = cat + "  Tendances";
  return (
    <div className=" trends_bloc">
      <ul className="trend_item">
        <li className="categorie">{cat}</li>
        <li className="hashtag">{hashtag}</li>
        <li className="tweet_number">{k(rt) + " "} Tweets</li>
      </ul>
    </div>
  );
}

export default Trend;
