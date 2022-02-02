import React from "react";
import Trend from "../components/Trend";
import { initialState } from "../data/reducer";
import { k } from "../Tools/tools";
import Suggestion from "./Suggestion";

function Rightpage() {
  return (
    <div className="right-page ">
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

        {initialState.trends.map((x, key) => (
          <Trend
            key={x.id}
            id={x.id}
            categorie={x.categorie}
            hashtag={x.hashtag}
            rt={k(x.rt)}
          />
        ))}

        <div>
          <ul className="trend_item">
            <li className="categorie trend_more">Voir plus</li>
          </ul>
        </div>
      </div>

      <div className=" suggestion flex_v">
        <h2>Suggestions</h2>

        {initialState.suggestions.map((x) => (
          <Suggestion
            key={x.id}
            nickname={x.nickname}
            login={x.login}
            imgProfil={x.imgProfil}
          />
        ))}
      </div>
    </div>
  );
}

export default Rightpage;
