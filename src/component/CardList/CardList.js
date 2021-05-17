import Card from "../Card/Card";


const CardList = ({ movieData, ImgUrl }) => {

  return (
    <>
      {movieData &&
        movieData.map((movie) => {
          return (
            <Card
              key={movie.id}
              title={movie.title}
              posterImg={ImgUrl + movie.poster_path}
              rating={movie.vote_average}
              releasedData={movie.release_date}
              id={movie.id}
            />
          );
        })}
    </>
  );
};

export default CardList;
