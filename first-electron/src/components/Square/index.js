import React, { useState } from "react";

//Styles
import { Red, Blue } from "./styles";

const Square = ({ player, setPlayer }) => {
  const [box, setBox] = useState("");

  const click = () => {
    setPlayer(player === "x" ? "o" : "x");
    setBox(player);
  };

  return (
    <div onClick={() => click()}>
      {player === "x" ? <Blue>{box}</Blue> : <Red>{box}</Red>}
    </div>
  );
};

export default Square;
