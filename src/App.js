import "./App.css";
import HeaderBar from "./components/HeaderBar";
import PinBoard from "./components/PinBoard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderBar />
        <PinBoard></PinBoard>
      </header>
    </div>
  );
}

export default App;
