import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${
            import.meta.env.VITE_MOVIES_API_KEY
          }`
        );
        const movieData = response.data;
        console.log(movieData);
        setMovie(movieData);
        setIsloading(false);
      } catch (error) {
        console.log(`Error occue while fetching the movie ${error}`);
        setIsloading(false);
      }
    };
    fetchMovie();
  }, [id]);

  return (
    <div className="w-[100%] h-[100vh] bg-[#fff] ">
      <Header />
      <div>
        <div>
          {movie ? (
            <div className="m-[4rem]">
              <div className="card card-side bg-[#40f840] shadow-xl">
                <figure className="max-w-[300px] max-h-[400px] overflow-hidden">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.original_title}
                    className="w-[900px] h-full object-cover rounded-[20px]"
                  />
                </figure>
                <div className="p-[2rem] text-[#000] ">
                  <h1 className=" text-[1.8rem] mb-2">
                    <span className="font-bold">Name of the Movie:[ </span>
                    {movie.original_title} <span className="font-bold">]</span>
                  </h1>
                  <p className="text-[1rem] mb-2">
                    <span className="font-bold">Tagline:[ </span>{movie.tagline}
                    <span className="font-bold"> ]</span>
                  </p>
                  <p className="text-[1rem] mb-2">
                    <span className="font-bold ">Overview:[ </span>{movie.overview}
                    <span className="font-bold"> ]</span>
                  </p>
                  <p className="text-[1rem] mb-2">
                    <span className="font-bold">Release Date:[ </span>{movie.release_date}
                    <span className="font-bold"> ]</span>
                  </p>
                  <p className="text-[1rem] mb-2">
                    <span className="font-bold">Movie Status:[ </span>{movie.status}
                    <span className="font-bold"> ]</span>
                  </p>
                  <p className="text-[1rem] mb-2">
                    <span className="font-bold">Revenue:[ </span>${movie.revenue}
                    <span className="font-bold"> ]</span>
                  </p>
                  <p className="text-[1rem] mb-2">
                    <span className="font-bold">Runtime:[ </span>{movie.runtime} minutes
                    <span className="font-bold"> ]</span>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <h1>not getting the movie data</h1>
          )}
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;
