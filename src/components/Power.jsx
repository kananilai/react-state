import React, { useState } from "react";
export const Power = () => {
  const [power, setPower] = useState(false);
  return (
    <div>
      <h1>電源{power ? "on" : "off"}</h1>
      <button onClick={() => setPower((prevState) => !prevState)}>
        ON/OFF
      </button>
    </div>
  );
};
