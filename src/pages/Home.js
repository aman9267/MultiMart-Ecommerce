import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import "../style/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const year = new Date().getFullYear();
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
      </Helmet>
    </>
  );
};

export default Home;
