import React from "react";
import "./StarWars.css";
import Characters from "./Characters";

// This is grabbing the information passed through my PROP and mapping the information.
const CharacterList = (props) => {
  return (
    <div>
      <div id="list-container">
        {props.CharacterInfo.map(item => {
          // not getting style on classname
          return (<Characters className="character-comps" objInfo={item} />);
        })}
      </div>
    </div>
  );
};

export default CharacterList;
