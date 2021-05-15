import React, { useEffect, useState } from "react";
import axios from "axios";
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

const BaseMovieDetailUrl = "https://api.themoviedb.org/3/movie"
const apiKey = process.env.REACT_APP_API_KEY;


const MovieDetail = () => {

    useEffect(() => {
        axios
          .get(BaseMovieDetailUrl, {
            params: {
              api_key: apiKey,
            },
          })
          .then()
          .catch((err) => console.log(err));
      }, []);

    return (
        <div>
            Detail Page
        </div>
    )
}

export default MovieDetail
