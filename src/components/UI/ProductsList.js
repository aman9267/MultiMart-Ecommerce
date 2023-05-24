import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = (props) => {
  return (
    <>
      {props.data.map((item, index) => {
        return <ProductCard data={item} key={index} />;
      })}
    </>
  );
};

export default ProductsList;
