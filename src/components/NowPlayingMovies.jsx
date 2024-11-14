import axios from "axios";
import { useState, useEffect } from "react";

const NowPlayingMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${
            import.meta.env.VITE_MOVIES_API_KEY
          }&page=1`
        );

        const movies = response.data.results;
        console.log(movies);
        setMovies(movies);
      } catch (error) {
        console.log(`Error occue while fetching the movies ${error}`);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="m-[1rem] ">
      <h1 className="mb-5 text-[#000] font-bold text-[2rem] ">Now Playing</h1>
      <div className="flex flex-wrap justify-evenly">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className=" bg-[#40f840] m-5 shadow-xl w-[350px] rounded-[20px]"
        >
            <figure>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="Movie"
                className="rounded-[20px]"
              />
            </figure>
            <div className="card-body text-[#000]">
              <h2 className="card-title">{movie.original_title}</h2>
              <p className="line-clamp-3">{movie.overview}</p>
              <p> <span className="font-semibold">Release:</span> {movie.release_date}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-active text-[#fff]">Watch</button>
              </div>
            </div>
          
        </div>
      ))}
      </div>
    </div>
  );
};
export default NowPlayingMovies;
