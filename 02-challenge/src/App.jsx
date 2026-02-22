import React from "react";

// CSS
import "./App.css";

// Components
import Card from "./components/Card";

// Images
import CardProfile from "../public/flag.jpeg";

const App = () => {
  return (
    <div>
      <Card
        image={CardProfile}
        name="Hashim Malik"
        bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit cupiditate voluptatibus cum ratione id? Libero doloremque accusamus nihil velit sed!"
      />
    </div>
  );
};

export default App;
