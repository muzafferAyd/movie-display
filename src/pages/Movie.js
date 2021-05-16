import CardList from "../component/CardList/CardList";
import AllCardList from "../component/AllCardList/AllMovies";
import { StyledCardList } from "../component/CardList/CardList.style";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Jumbotron from "../component/Jumbotron/Jumbotron";
import { StyledCardTitle } from "../component/CardList/CardList.style";

/* POPULAR MOVIES API
      https://api.themoviedb.org/3/movie/popular?api_key=API_KEY&language=en-US&page=1
*/

// ALL POPULAR MOVIES API
/* https://api.themoviedb.org/3/discover/movie?api_key=API_KEY&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate
 */

// IMAGE API
//    https://image.tmdb.org/t/p/w500

const baseUrl = "https://api.themoviedb.org/3/movie/popular";
const allMovieBaseUrl = "https://api.themoviedb.org/3/discover/movie";
const ImgUrl = "https://image.tmdb.org/t/p/w500";
const apiKey = process.env.REACT_APP_API_KEY;

const Movie = () => {
  const [movieData, setMovieData] = useState([]);
  const [allMovieData, setAllMovieData] = useState([]);

  useEffect(() => {
    axios
      .get(baseUrl, {
        params: {
          api_key: apiKey,
          page: 1,
        },
      })
      .then((res) => setMovieData(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(allMovieBaseUrl, {
        params: {
          api_key: apiKey,
          page: 1,
        },
      })
      .then((res) => setAllMovieData(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Jumbotron />
      <StyledCardTitle>Popular Movies</StyledCardTitle>
      <StyledCardList>
        <CardList movieData={movieData} ImgUrl={ImgUrl} />
      </StyledCardList>
      <StyledCardTitle>All Movies</StyledCardTitle>
      <StyledCardList>
        <AllCardList allMovieData={allMovieData} ImgUrl={ImgUrl} />
      </StyledCardList>
    </>
  );
};

export default Movie;
