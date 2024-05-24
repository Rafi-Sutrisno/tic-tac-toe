import { useState } from "react";
import Motivation from "./fetch_motivation";
import React from "react";

export default function Square() {
  const [showMotivation, setShowMotivation] = useState(false);

  function handleClick() {
    setShowMotivation(!showMotivation);
  }
  return (
    <>
      <button onClick={handleClick}>
        {showMotivation ? "Hide Motivation" : "Show Motivation"}
      </button>
      <div>{showMotivation && <Motivation />}</div>
    </>
  );
}
