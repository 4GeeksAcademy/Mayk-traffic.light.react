import React, { useState, useEffect } from "react";

function TrafficLight() {
  const [color, setColor] = useState("red");
  const [hasPurple, setHasPurple] = useState(false);

  // your existing auto-cycle or cycle button logic can stay as-is

  const handleAddPurple = () => {
    setHasPurple(true);              // once clicked, purple appears
    setColor("purple");              // optional: immediately select purple
  };

  return (
    <div id="app">
      <div className="traffic-top">
        <div className="traffic-body">
          <div className={`light red ${color === "red" ? "on red-glow" : ""}`}></div>
          <div className={`light yellow ${color === "yellow" ? "on yellow-glow" : ""}`}></div>
          <div className={`light green ${color === "green" ? "on green-glow" : ""}`}></div>

          {hasPurple && (
            <div
              className={`light purple ${
                color === "purple" ? "on purple-glow" : ""
              }`}
            ></div>
          )}
        </div>
      </div>

      <button onClick={handleAddPurple} className="add-purple-btn">
        Add purple light
      </button>
    </div>
  );
}

export default TrafficLight;

/*    <div
          className={`light red ${color === "red" ? "on red-glow" : ""}`}
          onClick={() => handleClick("red")}
          ></div>

          <div
          className={`light yellow ${color === "yellow" ? "on yellow-glow" : ""}`}
          onClick={() => handleClick("yellow")}
          ></div>

          <div
          className={`light green ${color === "green" ? "on green-glow" : ""}`}
          onClick={() => handleClick("green")}
          ></div>
*/

   