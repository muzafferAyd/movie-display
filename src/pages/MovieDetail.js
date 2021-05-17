import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DetailedCard from "../component/DetailedCard/DetailedCard";

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

const MovieDetailBaseUrl = "https://api.themoviedb.org/3/movie/";
const apiKey = process.env.REACT_APP_API_KEY;
const ImgUrl = "https://image.tmdb.org/t/p/w500";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  useEffect(() => {
    axios
      .get(MovieDetailBaseUrl + id, {
        params: {
          api_key: apiKey,
        },
      })
      .then((res) => setMovieDetails(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(movieDetails);

  return (
    <DetailedCard
      movieDetails={movieDetails}
      posterImg={ImgUrl + movieDetails?.poster_path}
      backdropImg={ImgUrl + movieDetails?.backdrop_path}
    />
  );
};

export default MovieDetail;
