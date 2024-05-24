import React from "react";
import { useState, useEffect } from "react";

const fetchMotivation = () => {
  const [motivation, setMotivation] = useState(null);

  function handlefetch() {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const randomQuote = data[Math.floor(Math.random() * data.length)];
        setMotivation(randomQuote);
      });
  }

  useEffect(() => {
    handlefetch();
  }, []);

  return (
    <>
      <button onClick={() => handlefetch()}>Change</button>
      {motivation ? (
        <div>
          <h1>{motivation.text}</h1>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default fetchMotivation;
