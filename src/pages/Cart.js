import React from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/cartSlices";

import "../style/cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => {
    return state.cart;
  });

  console.log(cartData);
  const handleDelete = (id) => {
    console.log(id);
    dispatch(remove(id));
  };
  return (
    <>
      <Helmet title="cart">
        <CommonSection title={"Cart"} />
        <section>
          <Container>
            <Row>
              <Col lg="9">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartData?.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            <img src={item.imgUrl} alt="product_img" />
                          </td>
                          <td>{item.productName}</td>
                          <td>Rs. {item.price}</td>
                          <td>2p.</td>
                          <td>
                            <span>
                              <i
                                className="ri-delete-bin-7-fill"
                                onClick={() => handleDelete(item.id)}
                              ></i>
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Col>
              <Col lg="3"></Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default Cart;
