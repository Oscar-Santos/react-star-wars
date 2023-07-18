

import React, { useEffect, useState } from "react";

export default function Card({ data }) {
  const [starShips, setStarShips] = useState([]);

  async function fetchingData() {
    // const response = await fetch("https://swapi.dev/api/starships/");
    // const data = await response.json();
    // console.log(data);
    const url = "https://swapi.dev/api/starships/";
    const response = await fetch(url);
    const data = await response.json();

    // console.log(data.results);
    setStarShips(data.results);
  }

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <div className="container">
      {starShips.map((element) => (
        <div className="card" key={element.name}>
          <h1>{element.name}</h1>
        </div>
      ))}
    </div>
  );
}
