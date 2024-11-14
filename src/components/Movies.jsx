import Header from "./Header";
import NowPlayingMovies from "./NowPlayingMovies";

const Movies = () => {
  return (
    <div className="w-[100%] h-[full] bg-[#fff] ">
      <Header />
      <div>
        <NowPlayingMovies />
      </div>
    </div>
  );
};
export default Movies;
