import React from "react";
import "./Gogboard.css";

const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

export default function Gogboard() {
  let gameboard = [];

  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      if (j < verticalAxis.length / 2) {
        gameboard.push(
          <div className="gameboardtile black-tile">
            [{horizontalAxis[i]}
            {verticalAxis[j]}]
          </div>
        );
      } else {
        gameboard.push(
          <div className="gameboardtile white-tile">
            [{horizontalAxis[i]}
            {verticalAxis[j]}]
          </div>
        );
      }
    }
  }
  return <div id="gogboard">{gameboard}</div>;
}
