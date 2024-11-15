import Footer from "./Footer";
import Header from "./Header";
import NowPlayingMovies from "./NowPlayingMovies";
import PopularMovies from "./PopularMovies";
import TopRatedMovies from "./TopRatedMovies";
import UpcomingMovies from "./UpcomingMovies";

const Movies = () => {
  return (
    <div className="w-[100%] h-[full] bg-[#fff] ">
      <Header />
      <div>
        <NowPlayingMovies />
        <PopularMovies />
        <TopRatedMovies />
        <UpcomingMovies />
        <Footer />
      </div>
    </div>
  );
};
export default Movies;
