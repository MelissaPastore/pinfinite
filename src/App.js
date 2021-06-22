import "./App.css";
import React, { useEffect, useState } from "react";
import HeaderBar from "./components/HeaderBar";
import PinBoard from "./components/PinBoard";

function App() {
  const [pins, setPins] = useState([]);

  const getPins = async () => {
    const response = await fetch("nyc_ttp_pins.json", {
      headers: {
        "Content-Type": "application.json",
        Accept: "application/json",
      },
    });
    const newPins = await response.json();
    setPins([...pins, ...newPins]);
  };

  const getMorePins = () => {
    if (pins.length > 750) return;
    getPins();
  };

  useEffect(() => {
    getPins();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <HeaderBar />
        <PinBoard pins={pins} getMorePins={getMorePins} />
      </header>
    </div>
  );
}

export default App;
