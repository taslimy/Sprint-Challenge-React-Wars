import React from "react";
import "./StarWars.css";
import Characters from "./Characters";

// This is grabbing the information passed through my PROP and mapping the information(array).
const CharacterList = props => {
  return (
    <div className="character-container">
      {props.CharacterInfo.map(item => (
        <Characters objInfo={item} />
      ))}
    </div>
  );
};

export default CharacterList;
