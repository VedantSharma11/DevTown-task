import React from "react";
import styled from "styled-components";

const Box = styled.div`
  margin: 20px 0;
  gap: 10px;
  display: flex;
  justify-content: center;
`;
const Select = styled.select`
 box-shadow: rgb(201, 201, 201) 0px 1px 5px;
 color: white;
  background-color: #232d3f;
  padding: 5px 15px;
  border-radius: 8px;
  font-weight: bold;
  border: none;
`;

const Filter = ({ ProductData, setDummy }) => {
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    let filteredItems = ProductData; 
    if (selectedCategory) {
      filteredItems = ProductData?.filter(
        (item) =>
          item.category.name.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    setDummy(filteredItems);
  };

  const handlePriceChange = (e) => {
    const selectedPriceRange = e.target.value;
    let filteredItems = ProductData;
    if (selectedPriceRange) {
      const [minPrice, maxPrice] = selectedPriceRange.split("-").map(Number);
      filteredItems = ProductData?.filter(
        (item) => item.price >= minPrice && item.price <= maxPrice
      );
    }
    setDummy(filteredItems);
  };

  return (
    <Box>
      <Select name="category" id="category" onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        <option value="Furniture">Furniture</option>
        <option value="Clothes">Clothes</option>
        <option value="Shoes">Shoes</option>
        <option value="Electronics">Electronics</option>
        <option value="Others">Others</option>
      </Select>
      <Select name="price" id="price" onChange={handlePriceChange}>
        <option value="">All Prices</option>
        <option value="0-200">0-200</option>
        <option value="200-400">200-400</option>
        <option value="400-600">400-600</option>
        <option value="600-800">600-800</option>
        <option value="800-1000">800-1000</option>
      </Select>
    </Box>
  );
};

export default Filter;
