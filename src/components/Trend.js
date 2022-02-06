import React from "react";
import { k } from "../Tools/tools";
import { Link } from "react-router-dom";
import { useStateValue } from "../data/StateProvider";

function Trend({ id, categorie, hashtag, rt }) {
  let cat = id + " · ";
  categorie ? (cat = cat + categorie + " · ") : (cat = cat);
  cat = cat + "  Tendances";
  const [{ search }, dispatch] = useStateValue();

  function onSerach() {
    dispatch({ type: "search", payload: hashtag });
  }

  return (
    <div onClick={onSerach} className=" trends_bloc">
      <Link to="/search">
        <ul className="trend_item">
          <li className="categorie">{cat}</li>
          <li className="hashtag">{hashtag}</li>
          <li className="tweet_number">{k(rt) + " "} Tweets</li>
        </ul>
      </Link>
    </div>
  );
}

export default Trend;
