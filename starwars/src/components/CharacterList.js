import React from "react";
import "./StarWars.css";
import Characters from "./Characters";

// This is grabbing the information passed through my PROP and mapping the information.
const CharacterList = (props) => {
  return (
    <div>
        {props.CharacterInfo.map(item => (
          <Characters objInfo={item} />
        ))}
    </div>
  );
};

export default CharacterList;
