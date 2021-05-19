import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationComp = ({
  totalPosts,
  postsPerPage,
  paginate,
  prevPage,
  nextPage,
}) => {
  const pageNumber = [];
  console.log("pp", pageNumber);
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <Pagination
      style={{ justifyContent: "center", position: "static", margin: 10 }}
    >
      <Pagination.Prev onClick={() => prevPage()} />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />
      {pageNumber.map((num, index) => (
        <Pagination.Item onClick={() => paginate(num)} key={index}>
          {num}
        </Pagination.Item>
      ))}
      <Pagination.Ellipsis />
      <Pagination.Item>{totalPosts}</Pagination.Item>
      <Pagination.Next onClick={() => nextPage()} />
    </Pagination>
  );
};

export default PaginationComp;
