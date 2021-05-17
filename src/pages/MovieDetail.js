import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

const MovieDetailBaseUrl = "https://api.themoviedb.org/3/movie/";
const apiKey = process.env.REACT_APP_API_KEY;

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
    <div>
      <h1>{movieDetails?.original_title}</h1>
      <p>{movieDetails?.overview}</p>
      <h2>{movieDetails?.release_date}</h2>
    </div>
  );
};

export default MovieDetail;
