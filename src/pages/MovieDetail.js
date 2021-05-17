import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

const BaseMovieDetailUrl = "https://api.themoviedb.org/3/movie/";
const apiKey = process.env.REACT_APP_API_KEY;

const MovieDetail = () => {
  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState([]);
  useEffect(() => {
    axios
      .get(BaseMovieDetailUrl + id, {
        params: {
          api_key: apiKey,
        },
      })
      .then((data) => setMovieDetails(data.data))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(movieDetails);

  return <div>hello Detail Page</div>;
};

export default MovieDetail;
