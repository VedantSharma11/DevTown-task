import React from "react";
import styled from "styled-components";

const Box = styled.div`
  &:hover {
    transform: scale(1.05);
    transition: 0.2s;
  }
  box-shadow: rgba(202, 202, 203, 0.3) 0px 0px 4px 8px;
  background-color: white;
  width: 180px;
  height: 280px;
  padding: 10px;
  border-radius: 12px;
`;
const CardImg = styled.div`
  img {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 12px;
  }
`;
const CardInfo = styled.div`
  padding: 10px;
`;
const Para = styled.p`
  font-size: 10px;
  font-weight: bold;
`;
const Heading = styled.h4`
  margin: 0;
`;

const Card = ({ image, title, description, price }) => {
  return (
    <Box>
      <CardImg>
        <img src={image} alt={title} />
      </CardImg>
      <CardInfo>
        <Heading>{title.slice(0, 15)}</Heading>
        <Para>{description.slice(0, 40)}</Para>
        <Para>${price.toLocaleString()}</Para>
      </CardInfo>
    </Box>
  );
};

export default Card;
