import "./header.css";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/eco-logo.png";
import userIcon from "../../assets/images/user-icon.png";
import { Container, Row } from "reactstrap";
import { motion } from "framer-motion";

const nav_Link = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            {/* Header Logo */}
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>MultiMart</h1>
                {/* <p>Since 2023</p> */}
              </div>
            </div>
            {/* Navigation Bar */}
            <div className="navigation">
              <ul className="menu">
                {nav_Link.map((menu, index) => {
                  return (
                    <li className="nav__item" key={index}>
                      <NavLink
                        to={menu.path}
                        className={(navClass) =>
                          navClass.isActive ? "nav__active" : ""
                        }
                      >
                        {menu.display}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* nav Icon */}
            <div className="nav__icons">
              <span className="fav__icon">
                <i className="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart__icon">
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">1</span>
              </span>
              <span>
                <motion.img
                  whileTap={{ scale: 1.1 }}
                  src={userIcon}
                  alt="User Icon"
                />
              </span>
            </div>

            {/* Mobile Menu */}
            <div className="mobile__menu">
              <span>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
