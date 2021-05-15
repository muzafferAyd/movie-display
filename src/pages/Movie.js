import CardList from "../component/CardList/CardList";
import {StyledCardList} from "../component/CardList/CardList.style";
import React, { useEffect, useState } from "react";
import axios from "axios";

// https://api.themoviedb.org/3/movie/popular?api_key=API_KEY&language=en-US&page=1
// https://image.tmdb.org/t/p/w500

const baseUrl = "https://api.themoviedb.org/3/movie/popular";
const ImgUrl = "https://image.tmdb.org/t/p/w500"
const apiKey = process.env.REACT_APP_API_KEY;


const Movie = () => {
  const [movieData, setMovieData] = useState([]);

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

  return (
    <StyledCardList>
      <CardList movieData={movieData} ImgUrl={ImgUrl}/>
    </StyledCardList>
  );
};

export default Movie;
