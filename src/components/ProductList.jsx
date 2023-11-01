import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Box = styled.div`
  gap: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProductList = ({ productdata }) => {
  return (
    <Box>
      {productdata?.map((item, idx) => {
        return (
          <Card
            key={idx}
            image={item?.images[0]}
            title={item?.title}
            description={item?.description}
            price={item?.price}
          />
        );
      })}
    </Box>
  );
};

export default ProductList;
