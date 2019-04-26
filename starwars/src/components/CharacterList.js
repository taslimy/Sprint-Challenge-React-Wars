import React from "react";
import "./StarWars.css";
import Characters from "./Characters";

// This is grabbing the information passed through my PROP and mapping the information.
const CharacterList = (props) => {
  return (
    <div>
      <div id="list-container">
        {props.CharacterInfo.map(item => (
          <Characters className="character-comp" objInfo={item} />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
