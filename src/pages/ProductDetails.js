import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import products from "../assets/data/products";
import "../style/home.css";
import "../style/product-details.css";
import CommonSection from "../components/UI/CommonSection";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { add } from "../redux/slices/cartSlices";
const ProductDetails = () => {
  const dispatch = useDispatch();

  const { id: productId } = useParams();
  const SingleProduct = products.find((item) => item.id === productId);
  console.log(SingleProduct);

  const { imgUrl, avgRating, price, productName, shortDesc, reviews } =
    SingleProduct;

  const handleAdd = (data) => {
    dispatch(add(data));
  };

  return (
    <>
      <Helmet title={productName}>
        <CommonSection title="Product Details" />
        <section className="pt-0">
          <Container>
            <Row>
              <Col lg="6">
                <img src={imgUrl} alt={productName} />
              </Col>
              <Col lg="6">
                <div className="product__details">
                  <h2>{productName}</h2>
                  <div className="product__rating d-flex align-item-center gap-5 mb-3">
                    <div>
                      <span>
                        <i className="ri-star-fill"></i>
                      </span>
                      <span>
                        <i className="ri-star-fill"></i>
                      </span>
                      <span>
                        <i className="ri-star-fill"></i>
                      </span>
                      <span>
                        <i className="ri-star-fill"></i>
                      </span>
                      <span>
                        <i className="ri-star-half-fill"></i>
                      </span>
                    </div>
                    <p>
                      <span>{avgRating}</span>(rating)
                    </p>
                  </div>
                  <span className="product__price">Rs. {price}</span>
                  <p className="mt-3">{shortDesc}</p>
                  <motion.button
                    whileTap={{ scale: 1.2 }}
                    className="shop_btn"
                    onClick={() => handleAdd(SingleProduct)}
                  >
                    Add To Cart
                  </motion.button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container>
            <Row>
              <Col lg="12">
                <div className="tab__wrapper d-flex align-items-center gap-5">
                  <h6>Description</h6>
                  <h6>Reviews ({reviews?.length})</h6>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default ProductDetails;
