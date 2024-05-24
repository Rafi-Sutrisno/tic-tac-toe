import { useState } from "react";
// import './App.css'
import Board from "./assets/board/board";
import Country from "./assets/FetchTest/fetchTest";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Board />

      <Country />
    </>
  );
}

export default App;
