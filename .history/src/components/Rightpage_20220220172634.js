import React, { useRef } from "react";
import Trend from "../components/Trend";
import { k } from "../Tools/tools";
import Suggestion from "./Suggestion";
import { useStateValue } from "../data/StateProvider";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Rightpage() {
  const [{ trends, suggestions, tweets }, dispatch] = useStateValue();
  const { search } = useParams();
  let navigate = useNavigate();
  const searchValue = useRef();

  function onKeyPress(event) {
    if (event.key === "Enter") {
      let reg = `${searchValue.current.value}`;
      navigate(`/search/${reg}`);
    }
  }

  return (
    <div className="right-page ">
      <div className="input-icons">
        <i className="fas fa-search icon"> </i>
        <input
          ref={searchValue}
          onKeyPress={onKeyPress}
          type="text"
          placeholder="Rechercher"
        />
      </div>
      <div className="trends flex_v">
        <div className="flex_h">
          <h2>Tendances: France</h2>
        </div>

        {trends.map((x, key) => (
          <Trend
            key={x.id}
            id={x.id}
            categorie={x.categorie}
            hashtag={x.hashtag}
            rt={k(x.rt)}
          />
        ))}
      </div>
    </div>
  );
}

export default Rightpage;
