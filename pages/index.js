import Head from "next/head";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "c2aef405352f016e0b20433b2836cf20";

export default function Home() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    (async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
      const { results } = await response.json();
      setMovie(results);
    })();
  }, []);
  return (
    <div>
      <Seo title='Home' />
      {!movie && <h4>Loading ...</h4>}
      {movie?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
