import { useState } from "react";
// import './App.css'
import Board from "./assets/board/board";
import ButtonCountry from "./assets/FetchCountry/buttonStart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Board />

      <ButtonCountry />
    </>
  );
}

export default App;
