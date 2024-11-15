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
        console.log(`Error occurred while fetching the movie: ${error}`);
        setIsloading(false);
      }
    };
    fetchMovie();
  }, [id]);

  return (
    <div className="w-full min-h-screen bg-[#fff]">
      <Header />
      <div className="container mx-auto px-4 py-8">
        {movie ? (
          <div className="flex flex-col lg:flex-row m-4 bg-[#40f840] shadow-lg rounded-lg overflow-hidden">
            
            <figure className="w-full lg:w-[300px] h-auto overflow-hidden mb-4 lg:mb-0">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
                className="w-full h-auto object-cover rounded-lg"
              />
            </figure>
            {/* Movie Details */}
            <div className="p-4 text-black flex-1">
              <h1 className="text-2xl lg:text-3xl font-bold mb-2">
                <span className="font-bold">Name of the Movie: </span>
                {movie.original_title}
              </h1>
              <p className="text-lg mb-2">
                <span className="font-semibold">Tagline: </span>
                {movie.tagline}
              </p>
              <p className="text-lg mb-2">
                <span className="font-semibold">Overview: </span>
                <span className="line-clamp-3">{movie.overview}</span>
              </p>
              <p className="text-lg mb-2">
                <span className="font-semibold">Release Date: </span>
                {movie.release_date}
              </p>
              <p className="text-lg mb-2">
                <span className="font-semibold">Movie Status: </span>
                {movie.status}
              </p>
              <p className="text-lg mb-2">
                <span className="font-semibold">Revenue: </span>
                ${movie.revenue.toLocaleString()}
              </p>
              <p className="text-lg mb-2">
                <span className="font-semibold">Runtime: </span>
                {movie.runtime} minutes
              </p>
            </div>
          </div>
        ) : (
          <h1 className="text-center text-[#000] text-[2.5rem] font-bold">Not getting the movie data</h1>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
