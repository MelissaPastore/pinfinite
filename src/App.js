import "./App.css";
import React, { useEffect, useState } from "react";
import HeaderBar from "./components/HeaderBar";
import PinBoard from "./components/PinBoard";

function App() {
  const [pins, setPins] = useState([]);

  const getPins = async () => {
    if (pins.length >= 5000) return;
    const response = await fetch("nyc_ttp_pins.json", {
      headers: {
        "Content-Type": "application.json",
        Accept: "application/json",
      },
    });
    const newPins = await response.json();
    setPins([...pins, ...newPins]);
  };

  useEffect(() => {
    getPins();
  }, [pins]);

  return (
    <div className="App">
      <header className="App-header">
        <HeaderBar />
        <PinBoard pins={pins} getMorePins={getPins} />
      </header>
    </div>
  );
}

export default App;
