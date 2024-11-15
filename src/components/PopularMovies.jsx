import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${
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
      <h1 className="mb-5 text-[#000] font-bold text-[2rem] text-center ">
        Popular Movies
      </h1>
      <div className="flex flex-wrap justify-evenly">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className=" bg-[#40f840] m-5 shadow-xl w-[350px] rounded-[20px]"
          >
            <figure>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
                className="rounded-[20px]"
              />
            </figure>
            <div className="card-body text-[#000]">
              <h2 className="card-title">{movie.original_title}</h2>
              <p className="line-clamp-3">{movie.overview}</p>
              <p>
                {" "}
                <span className="font-semibold">Release:</span>{" "}
                {movie.release_date}
              </p>
              <div className="card-actions justify-end">
                <Link to={`/movie/${movie.id}`}>
                  <button className="btn btn-active text-[#fff]">
                    See Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PopularMovies;
