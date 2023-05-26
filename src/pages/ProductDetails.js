import React, { useState } from "react";
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
import ProductsList from "../components/UI/ProductsList";
const ProductDetails = () => {
  const dispatch = useDispatch();

  const [tab, setTab] = useState("desc");
  const { id: productId } = useParams();
  const SingleProduct = products.find((item) => item.id === productId);

  const {
    imgUrl,
    avgRating,
    price,
    productName,
    category,
    shortDesc,
    reviews,
    description,
  } = SingleProduct;

  const handleAdd = (data) => {
    dispatch(add(data));
  };

  const RelatedProduct = products?.filter((item) => item.category === category);

  const handleSubmit = (e) => {
    e.preventDefault();
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
                  <div className="d-flex text-align-center gap-5">
                    <span className="product__price">Rs. {price}</span>
                    <span>Category: {category}</span>
                  </div>
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
                  <h6
                    className={`${tab === "desc" ? "active__tab" : ""}`}
                    onClick={() => {
                      setTab("desc");
                    }}
                  >
                    Description
                  </h6>
                  <h6
                    className={`${tab === "desc" ? "" : "active__tab"}`}
                    onClick={() => {
                      setTab("rev");
                    }}
                  >
                    Reviews ({reviews?.length})
                  </h6>
                </div>
                {tab === "desc" ? (
                  <div className="tab__content mt-4">
                    <p>{description}</p>
                  </div>
                ) : (
                  <div className="product__review mt-5">
                    <div className="review__wrapper">
                      <ul>
                        {reviews?.map((item, index) => {
                          console.log(item);
                          return (
                            <li key={index} className="mb-4">
                              <h6>Mohd Aman</h6>
                              <span>{item.rating} (average rating )</span>
                              <p>{item.text}</p>
                            </li>
                          );
                        })}
                      </ul>
                      <div className="review__form">
                        <h4>Leave Your experience</h4>
                        <form action="" onSubmit={handleSubmit}>
                          <div className="form__group">
                            <input placeholder="Enter Name" type="text" />
                          </div>
                          <div className="form__group d-flex text-align-center gap-5">
                            <span>
                              1 <i className="ri-star-fill"></i>
                            </span>
                            <span>
                              2 <i className="ri-star-fill"></i>
                            </span>
                            <span>
                              3 <i className="ri-star-fill"></i>
                            </span>
                            <span>
                              4 <i className="ri-star-fill"></i>
                            </span>
                            <span>
                              5 <i className="ri-star-fill"></i>
                            </span>
                          </div>
                          <div className="form__group">
                            <textarea
                              rows={4}
                              placeholder="Review Message........."
                              type="text"
                            />
                          </div>
                          <motion.button
                            whileTap={{ scale: 1.2 }}
                            type="submit"
                            className="shop_btn mt-0"
                          >
                            Submit
                          </motion.button>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </Col>
              <Col lg="12" className="mt-5">
                <h2 className="related__title">You might also like</h2>
              </Col>
              <ProductsList data={RelatedProduct} />
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default ProductDetails;
