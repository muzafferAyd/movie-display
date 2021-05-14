import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import axios from "axios";



// https://api.themoviedb.org/3/movie/popular?api_key=API_KEY&language=en-US&page=1

const baseUrl = "https://api.themoviedb.org/3/movie/popular";
const apiKey = process.env.REACT_APP_API_KEY
console.log("env: ",apiKey);
const CardList = () => {

  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    axios
      .get(baseUrl, {
        params: {
          api_key: apiKey,
          page: 1,
        
        }
      })
      .then((res) => setMovieData(res.data.results))
      .catch((err) => console.log(err));
  }, []);
  console.log(movieData);

  return (
    <>
      {movieData && movieData.map(movie=>{
          return(
               <Card key={movie.id}
               title={movie.title}/>
          )
      })}
     
    </>
  );
};

export default CardList;
