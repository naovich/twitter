import React from "react";

function Centerpage() {
  return (
    <div className="center-page">
      <header>
        <h1>ACCUEIL</h1>
      </header>
      <div>
        <div className=" status">
          <img
            src="https://pbs.twimg.com/profile_images/1482759016535269379/m559Oniw_400x400.jpg"
            className="img-rounded "
          />
          <input placeholder="Quoi de neuf ?" className="status_input" />
          <div className="reponse">
            <span>Tout le monde peut répondre</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Centerpage;
