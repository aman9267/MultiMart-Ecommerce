import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = (props) => {
  return (
    <>
      {props.data.map((item) => {
        return <ProductCard data={item} />;
      })}
    </>
  );
};

export default ProductsList;
