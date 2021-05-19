import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationComp = ({
  totalPosts,
  postsPerPage,
  paginate,
  prevPage,
  nextPage,
  currentPage,
}) => {
  const pageNumber = [];
  for (let i = 1; i <= totalPosts; i++) {
    pageNumber.push(i);
  }
   const filteredList =pageNumber.filter(item => item < currentPage +3  &&   item  > currentPage - 3 )
  return (
    <Pagination size="sm"
      style={{ justifyContent: "center", position: "static", margin:10 }}
    >
      <Pagination.Prev onClick={() => prevPage()} />
      <Pagination.Item onClick={() => paginate(1)}>{1}</Pagination.Item>
      <Pagination.Ellipsis />
      {filteredList.map((num, index) => (
        
        <Pagination.Item
          active={num === currentPage ? true : false}
          disabled={(num>currentPage+3 || num<currentPage-3 )?true:false}
          onClick={() => paginate(num)}
          key={index}
        >
          {num}
        </Pagination.Item>
      ))}
      <Pagination.Ellipsis />
      <Pagination.Item onClick={() => paginate(totalPosts)}>
        {totalPosts}
      </Pagination.Item>
      <Pagination.Next onClick={() => nextPage()} />
    </Pagination>
  );
};

export default PaginationComp;
