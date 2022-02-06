import React, { useState } from "react";
import NavigateBack from "../components/NavigateBack";
import { useStateValue } from "../data/StateProvider";

function Search() {
  const [{ search }, dispatch] = useStateValue();
  const [activeClassUne, setActiveClassUne] = useState(
    "profil_tab_span_active"
  );
  const [activeClassRecent, setActiveClassRecent] = useState("");
  const [activeClassPersonnes, setActiveClassPersonnes] = useState("");
  const [activeClassPhoto, setActiveClassPhoto] = useState("");

  function une() {
    setActiveClassUne("profil_tab_span_active");
    setActiveClassRecent("");
    setActiveClassPersonnes("");
    setActiveClassPhoto("");
  }

  function recent() {
    setActiveClassUne("");
    setActiveClassRecent("profil_tab_span_active");
    setActiveClassPersonnes("");
    setActiveClassPhoto("");
  }

  function personnes() {
    setActiveClassUne("");
    setActiveClassRecent("");
    setActiveClassPersonnes("profil_tab_span_active");
    setActiveClassPhoto("");
  }

  function photo() {
    setActiveClassUne("");
    setActiveClassRecent("");
    setActiveClassPersonnes("");
    setActiveClassPhoto("profil_tab_span_active");
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
        <span onClick={recent} className={activeClassRecent}>
          Récent
        </span>
        <span onClick={personnes} className={activeClassPersonnes}>
          Personnes
        </span>
        <span onClick={photo} className={activeClassPhoto}>
          Photos
        </span>
      </div>
    </div>
  );
}

export default Search;
