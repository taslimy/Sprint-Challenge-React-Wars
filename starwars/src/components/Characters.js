import React from "react";
import "./StarWars.css";

const Characters = props => {
  return (
    <section>
      <section>
        <h3>Character Name: </h3> <span>{props.objInfo.name}</span>
        <h3>Dath Of Birth: </h3> <span>{props.objInfo.birth_year}</span>
        <h3>Eye Color: </h3> <span>{props.objInfo.eye_color}</span>
        <h3>Gender: </h3> <span>{props.objInfo.gender}</span>
        <h3>Hair Color: </h3> <span>{props.objInfo.hair_color}</span>
        <h3>Height: </h3> <span>{props.objInfo.height}</span>
        <h3>Mass: </h3> <span>{props.objInfo.mass}</span>
        <h3>Skin Type: </h3> <span>{props.objInfo.skin_color}</span>
      </section>
    </section>
  );
};

export default Characters;
