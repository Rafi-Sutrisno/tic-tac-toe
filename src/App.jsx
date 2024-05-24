import { useState } from "react";
import Board from "./assets/board/board";
import ButtonCountry from "./assets/fetch-country/buttonStart";
import Motivation from "./assets/fetch-motivation/fetch-motivation";

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
