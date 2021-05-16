import Card from "../Card/Card";




const AllMovies = ({allMovieData, ImgUrl}) => {

  return (
    <>
    
      {allMovieData &&
        allMovieData.map((movie) => {
          return (
            <Card
              key={movie.id}
              title={movie.title}
              posterImg={ImgUrl + movie.poster_path}
              rating = {movie.vote_average}
              releasedData={movie.release_date}
            />
          );
        })}
    </>
  );
};

export default AllMovies;
