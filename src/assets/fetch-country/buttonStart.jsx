import { useState } from "react";
import Country from "./fetchCountry";
import React from "react";

export default function Square() {
  const [showCountry, setShowCountry] = useState(false);

  function handleClick() {
    setShowCountry(!showCountry);
  }
  return (
    <>
      <button onClick={handleClick}>
        {showCountry ? "Hide Country" : "Show Country"}
      </button>
      <div>{showCountry && <Country />}</div>
    </>
  );
}
