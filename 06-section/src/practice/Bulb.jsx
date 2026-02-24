import React, { useState } from "react";

const Bulb = () => {
  const [light, setLight] = useState(false);

  function handleLight() {
    setLight(!light);
  }

  return (
    <>
      <div className="light">
        <span
          className="bulb"
          style={{ backgroundColor: light ? "yellow" : "" }}
        >
          {light}
        </span>
        <button onClick={handleLight}>{light ? "OFF" : "ON"}</button>
      </div>
    </>
  );
};

export default Bulb;
