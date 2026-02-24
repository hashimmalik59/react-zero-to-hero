import React, { useState } from "react";

const Bulb = () => {
  const [isLightOn, setIsLightOn] = useState(false);

  return (
    <>
      <div className="light">
        <span
          className="bulb"
          style={{ background: isLightOn ? "yellow" : "" }}
        >
          {isLightOn}
        </span>
        <button onClick={() => setIsLightOn((prevLight) => !prevLight)}>
          {isLightOn ? "OFF" : "ON"}
        </button>
      </div>
    </>
  );
};

export default Bulb;
gi;
