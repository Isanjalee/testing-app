/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useEffect } from "react";

import { Container } from "reactstrap";
import logo from "../../Assets/images/logo2.png";
import { NavLink, Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import {
  cartActions,
  cartUiActions,
} from "../../store/shopping-cart/cartUiSlice";

import "../../styles/header.css";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "All",
    path: "/all",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const header = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => window.removeEventListener("scroll");
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between ">
          <div className="logo w-25 mt-1  d-flex justify-content-between">
            <img src={logo} alt="logo" />
            {/*<h5 className="mt-2 d-flex align-items-center justify-content-between">
              Eat Enjoy EveryDay!!
  </h5>*/}
          </div>

          {/*========================MENU========================= */}
          <div className="navigation " ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/*========================NAV RIGHT ICONS========================= */}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={toggleCart}>
              <i class="ri-shopping-cart-2-fill"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>
            <span className="user">
              <Link to="/login">
                <i class="ri-user-5-line"></i>
              </Link>
            </span>
            <span className="mobile__menu" onClick={toggleMenu}>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default header;
