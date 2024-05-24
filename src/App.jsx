import { useState } from "react";
// import './App.css'
import Board from "./assets/board/board";
import ButtonCountry from "./assets/fetch-country/buttonStart";
// import ButtonMotiv from "./assets/fetch_motivation/buttonStart";
import Motivation from "./assets/fetch_motivation/fetch_motivation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Motivation />

      <Board />

      <ButtonCountry />
    </>
  );
}

export default App;
