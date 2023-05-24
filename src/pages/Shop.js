import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../style/shop.css";
import products from "../assets/data/products";
import CommonSection from "../components/UI/CommonSection";
import ProductsList from "../components/UI/ProductsList";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);
  const [filteredProduct, setFilteredProduct] = useState([]);

  const handleFilter = (e) => {
    console.log(e.target.value);
    const filteredProduct = productsData.filter((product) => {
      if (product.category === e.target.value || "mobile") {
        return true;
      } else {
        return false;
      }
    });
    setProductsData(filteredProduct);
    setFilteredProduct(filteredProduct);
  };

  return (
    <>
      <Helmet title="Product">
        <CommonSection title="Product" />

        <section>
          <Container>
            <Row>
              <Col lg="3" md="3">
                <div className="filter__widget">
                  <select onChange={handleFilter}>
                    <option>Filter By Category</option>
                    <option value="sofa">Sofa</option>
                    <option value="chair">Chair</option>
                    <option value="mobile">Mobile</option>
                    <option value="watch">Watch</option>
                    <option value="wireless">Wireless</option>
                  </select>
                </div>
              </Col>
              <Col lg="3" md="3">
                <div className="filter__widget">
                  <select onChange={handleFilter}>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                  </select>
                </div>
              </Col>
              <Col lg="6" md="6">
                <div className="search__box">
                  <input type="search" placeholder="Search ........" />
                  <span>
                    <i className="ri-search-line"></i>
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Product Section Area */}
        <section>
          <Container>
            <Row>
              {productsData?.length === 0 ? (
                <h1>No Product Are Found</h1>
              ) : (
                <ProductsList
                  data={
                    filteredProduct.length === 0
                      ? productsData
                      : filteredProduct
                  }
                />
              )}
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default Shop;
