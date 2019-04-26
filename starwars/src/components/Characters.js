import React from "react";
import "./StarWars.css";

const Characters = props => {
  return (
    <section className="characters-info">
      <div className="info-attributes">
        <h3>Character Name </h3>
        <span>{props.objInfo.name}</span>
      </div>

      <div className="info-attributes">
        <h3>Dath Of Birth </h3>
        <span>{props.objInfo.birth_year}</span>
      </div>

      <div className="info-attributes">
        <h3>Eye Color </h3>
        <span>{props.objInfo.eye_color}</span>
      </div>

      <div className="info-attributes">
        <h3>Gender </h3>
        <span>{props.objInfo.gender}</span>
      </div>

      <div className="info-attributes">
        <h3>Hair Color </h3> <span>{props.objInfo.hair_color}</span>
      </div>

      <div className="info-attributes">
        <h3>Height </h3>
        <span>{props.objInfo.height}</span>
      </div>

      <div className="info-attributes">
        <h3>Mass </h3>
        <span>{props.objInfo.mass}</span>
      </div>

      <div className="info-attributes">
        <h3>Skin Type </h3>
        <span>{props.objInfo.skin_color}</span>
      </div>
    </section>
  );
};

export default Characters;
