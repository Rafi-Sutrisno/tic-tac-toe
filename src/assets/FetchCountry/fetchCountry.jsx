import React from "react";
import { useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function fetchTest() {
  const {
    data: countries,
    error,
    isValidating,
  } = useSWR("https://restcountries.com/v2/all", fetcher);

  if (error) return <div className="failed">failed to load</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;

  return (
    <>
      {countries &&
        countries.map((country, index) => (
          <img key={index} src={country.flags.png} alt="flag" width={100} />
        ))}
    </>
  );
}
