import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DetailedCard from "../component/DetailedCard/DetailedCard";

// GET MOVIE DETAIL
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

// GET MOVIE VIDEO
// https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US

const MovieDetailBaseUrl = "https://api.themoviedb.org/3/movie/";
const apiKey = process.env.REACT_APP_API_KEY;
const ImgUrl = "https://image.tmdb.org/t/p/w500";
const videos = "/videos";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [videoKeyData, setVideoKeyData] = useState("");

  //get Movie Details
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

   //get Video Details
  useEffect(() => {
    axios
      .get(MovieDetailBaseUrl + id + videos, {
        params: {
          api_key: apiKey,
        },
      })
      .then((respon) => setVideoKeyData(respon.data.results[0].key))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <DetailedCard
      movieDetails={movieDetails}
      posterImg={ImgUrl+ movieDetails?.poster_path}
      backdropImg={ImgUrl+  movieDetails?.backdrop_path}
      videoKey={videoKeyData}
    />
  );
};

export default MovieDetail;
