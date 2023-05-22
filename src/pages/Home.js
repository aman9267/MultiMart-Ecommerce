import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import "../style/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../Services/Services";
import ProductsList from "../components/UI/ProductsList";
import Product from "../assets/data/products";
import CounterImage from "../assets/images/counter-timer-img.png";
import Clock from "../components/UI/Clock";

const Home = () => {
  const [trendingProduct, setTrendingProduct] = useState([]);
  const [bestSalesProduct, setBestSalesProduct] = useState([]);
  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProduct = Product?.filter((item) => {
      if (item.category === "chair") {
        return true;
      } else {
        return false;
      }
    });

    const filteredBestSalesProduct = Product?.filter((item) => {
      if (item.category === "sofa") {
        return true;
      } else {
        return false;
      }
    });

    setTrendingProduct(filteredTrendingProduct);
    setBestSalesProduct(filteredBestSalesProduct);
  }, []);

  return (
    <>
      <Helmet title={"Home"}>
        <section className="hero__section">
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="hero__content">
                  <p className="hero__subtitle">Trending Product in {year}</p>
                  <h2>Make Your Interior More Minimalistic & Modern</h2>
                  <p>
                    Aute non occaecat exercitation quis est sunt reprehenderit
                    eu proident pariatur esse. Qui anim exercitation cupidatat
                    culpa exercitation do incididunt irure. Esse nisi fugiat
                    dolore ut do nulla aliquip.
                  </p>
                  <motion.button whileTap={{ scale: 1.2 }} className="shop_btn">
                    <Link to="/shop">Shop Now</Link>
                  </motion.button>
                </div>
              </Col>
              <Col lg="6" md="6">
                <div>
                  <img src={heroImg} alt="Hero Banner" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Services />
        {/* Trending Product */}
        <section className="trending__product">
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2 className="section__title">Trending Product</h2>
              </Col>
              <ProductsList data={trendingProduct} />
            </Row>
          </Container>
        </section>
        {/* Best Sale */}
        <section className="best__sales">
          <Container>
            <Row>
              <Col lg="12" className="text-center">
                <h2 className="section__title">Best Sales</h2>
              </Col>
              <ProductsList data={bestSalesProduct} />
            </Row>
          </Container>
        </section>
        <section className="timer__counter">
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="clock__top__content">
                  <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                  <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
                </div>
                <Clock />
                <motion.button
                  whileTap={{ scale: 1.1 }}
                  className="shop_btn store_btn"
                >
                  <Link to="/shop">Visit Store</Link>
                </motion.button>
              </Col>
              <Col lg="6" md="6" className="text-end">
                <img src={CounterImage} alt="'Timer counter" />
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default Home;
