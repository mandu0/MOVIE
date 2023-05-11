import { useState, useEffect } from "react";
import Movie from "../components/Movie"
import styles from "./Home.module.css"

function Home () {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
  const response = 
      await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
  const json = await response.json()
  setMovies(json.data.movies);  //Json에서 받아온 정보들
  setLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, [])
  return (
    <div>
      {loading ? <h1>Loading...</h1> : 
      <div>
      <h1 className={styles.main_name}>THE MOVIE</h1>
      <div className={styles.container}>
      {movies.map((movie) => 
      <Movie 
        key = {movie.id}
        id = {movie.id}
        coverImg={movie.medium_cover_image}
        title={movie.title} 
        summary={movie.summary} 
        genres={movie.genres} />
      )}
      </div>
      </div>}
    </div>
  );
}

export default Home;