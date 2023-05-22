import React from "react";
import "../../style/product-card.css";
import { Col } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  return (
    <>
      <Col lg="3" md="4" className="mb-2">
        <div className="product__card">
          <div className="product__img">
            <motion.img
              whileHover={{ scale: 0.9 }}
              src={data?.imgUrl}
              alt="product"
            />
          </div>
          <div className="p-2 product__info">
            <h3 className="Product__name">
              <Link to={`/shop/${data?.id}`}>{data?.productName}</Link>
            </h3>
            <span>{data?.category}</span>
            <div className="product__card-bottom d-flex text-align-center justify-content-between">
              <span className="price">Rs. {data?.price}</span>
              <motion.span whileTap={{ scale: 1.2 }}>
                <i className="ri-add-line"></i>
              </motion.span>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};
export default ProductCard;