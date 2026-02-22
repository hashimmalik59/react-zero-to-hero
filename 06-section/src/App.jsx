import React from "react";

// CSS
import "./App.css";

// Component
import Guide from "./components/Guide";

const App = () => {
  return (
    <>
      <Guide step={1} message="Learn React" />
    </>
  );
};

export default App;
