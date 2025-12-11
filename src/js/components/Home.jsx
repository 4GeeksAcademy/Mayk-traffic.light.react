import React, { useState, useEffect } from "react";

function TrafficLight() {
  const [color, setColor] = useState("red");
  const [hasPurple, setHasPurple] = useState(false);
  
  useEffect(() => {
    const colors = ["red", "yellow", "green", "purple"];
    const index = colors.indexOf(color);
    const nextColor = colors[(index + 1) % colors.length];

    const id = setTimeout(() => setColor(nextColor), 3000);
    return () => setTimeout(id);
  }, []);

  
  const handleClick = (newColor) => {
    setColor(newColor);
  };

  const handleAddPurple = () => {
    setHasPurple(true); 
    setColor("purple");
  };

  return (
    <div id="app">
      <div className="traffic-top">
        <div className="traffic-body">
             <div
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
        Add Purple Light
      </button>
    </div>
  );
}

export default TrafficLight;
