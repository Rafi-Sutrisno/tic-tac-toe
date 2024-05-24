import React from "react";
import { useState, useEffect } from "react";

const fetchMotivation = () => {
  const [motivation, setMotivation] = useState(null);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const randomQuote = data[Math.floor(Math.random() * data.length)];
        setMotivation(randomQuote);
        // setMotivation(data);
      });
  }, []);

  return (
    <>
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
