import CardList from "../component/CardList/CardList";
import AllCardList from "../component/AllCardList/AllMovies";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Jumbotron from "../component/Jumbotron/Jumbotron";
import {
  StyledCardTitle,
  StyledCardList,
} from "../component/CardList/CardList.style";
import {
  StyledAllMovies,
  StyledAllMoviesTitle,
} from "../component/AllCardList/AllMovies.style";
import PaginationComp from "../component/Pagination/Pagination"

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

  //PAGINATION
  const [currentPage, setCurrentPage] =useState(1);
  const [postsPerPage, setPostsPerPage] =useState(5);

const IndexOfLastPage = currentPage * postsPerPage
const IndexOfFirstPage = IndexOfLastPage - postsPerPage
const currentPosts = allMovieData.slice(IndexOfFirstPage,IndexOfLastPage)
console.log("cuuu",currentPosts)
console.log("IndexOfLastPage",IndexOfLastPage)
console.log("IndexOfFirstPage",IndexOfFirstPage)
const paginate= (pageNum) =>setCurrentPage(pageNum)
const nextPage= () =>setCurrentPage(currentPage+1)
const prevPage= () =>setCurrentPage(currentPage-1)
  // getPopuparMovies
  useEffect(() => {
    axios
      .get(baseUrl, {
        params: {
          api_key: apiKey,
          page: currentPage,
        },
      })
      .then((res) => setMovieData(res?.data?.results))
      .catch((err) => console.log(err));
  }, []);

    // getAllMovies
  useEffect(() => {
    axios
      .get(allMovieBaseUrl, {
        params: {
          api_key: apiKey,
          page: currentPage,
        },
      })
      .then((res) => setAllMovieData(res?.data?.results))
      .catch((err) => console.log(err));
  }, [currentPage]);

  return (
    <>
      <Jumbotron />
      {/* <StyledCardList>
        <StyledCardTitle>Popular Movies</StyledCardTitle>
        <CardList movieData={movieData} ImgUrl={ImgUrl} />
      </StyledCardList> */}
      <StyledAllMoviesTitle>Popular Movies</StyledAllMoviesTitle>
      <StyledAllMovies>
        <AllCardList allMovieData={currentPosts} ImgUrl={ImgUrl} />
      </StyledAllMovies>
      <PaginationComp prevPage={prevPage} nextPage={nextPage} paginate={paginate} postsPerPage={postsPerPage} totalPosts={allMovieData.length}/>

  
    </>
  );
};

export default Movie;
