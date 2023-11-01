import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Pagination from "./components/Pagination";
import Filter from "./components/Filter";
import ProductList from "./components/ProductList";

function App() {
  const [ProductData, setProductData] = useState([]);
  const [dummy, setDummy] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/products"
        );
        setProductData(response.data);
        setDummy(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = dummy.slice(firstPostIndex, lastPostIndex);

  return (
    <Box>
      <Filter ProductData={ProductData} setDummy={setDummy} />
      <ProductList productdata={currentPosts} />
      <Pagination
        totalPosts={dummy.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </Box>
  );
}

const Box = styled.div`
  ${"" /* overflow-x:hidden; */}
  padding: 10px;
  height: 100vh;
`;

export default App;
