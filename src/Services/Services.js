import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../Services/services.css";
import ServicesData from "../assets/data/serviceData";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section>
      <Container>
        <Row>
          {ServicesData.map((data, index) => {
            return (
              <Col lg="3" md="4" key={index}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="service__item"
                  style={{ backgroundColor: data.bg }}
                >
                  <span>
                    <i className={data.icon}></i>
                  </span>
                  <div>
                    <h3>{data.title}</h3>
                    <p>{data.subtitle}</p>
                  </div>
                </motion.div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
