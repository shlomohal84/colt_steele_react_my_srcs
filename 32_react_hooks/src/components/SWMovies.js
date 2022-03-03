import { useState, useEffect } from "react";
import axios from "axios";

function SWMovies() {
  const [number, setNumber] = useState(1);
  const [movie, setMovie] = useState("");
  const [year, setYear] = useState(0);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `https://swapi.dev/api/films/${number}/`
      );
      setMovie(response.data);
      setYear(response.data.release_date.slice(0, 4));
    }
    getData();
  }, [number, year]);
  return (
    <div>
      <h1>Pick Your Movie</h1>
      <h4>
        You Chose: {movie.title} {year}
      </h4>
      <p>{movie.opening_crawl}</p>
      <select value={number} onChange={(evt) => setNumber(evt.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
    </div>
  );
}

export default SWMovies;
