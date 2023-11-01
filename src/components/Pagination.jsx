import React from "react";
import styled from "styled-components";

const Box = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .active {
    background-color: white;
    color: black;
    box-shadow: none;
  }
`;
const Btn = styled.button`
  &:hover {
    background-color: black;
  }
  border: none;
  font-weight: bold;
  cursor: pointer;
  margin: 8px 10px;
  border-radius: 8px;
  padding: 10px;
  color: white;
  background-color: #232d3f;
  box-shadow: rgb(201, 201, 201) 0px 2px 5px;
`;

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <Box>
      {pages.map((page, idx) => {
        return (
          <Btn
            key={idx}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? "active" : ""}
          >
            {page}
          </Btn>
        );
      })}
    </Box>
  );
};

export default Pagination;
