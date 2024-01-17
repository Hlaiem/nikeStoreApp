import React, { useState, useEffect } from "react";
import { hamburger } from "../assets/icons";
// import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import SignInSignUpModal from "./SignInSignUp";
import { Container, Offcanvas } from "react-bootstrap";
import { useSelector } from "react-redux";
import {Badge}  from "react-bootstrap";

import Cart from "./cart";

const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSignIn = (success) => {
    setLoggedIn(success);
    if (success) {
      localStorage.setItem("loggedIn", true);
    }
  };

  const handleSignOut = () => {
    setLoggedIn(false);
    localStorage.removeItem("loggedIn");
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [show, setShow] = useState(false);
  const cart = useSelector((state) => state.cart);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <header
      className={`px-4 py-3 bg-gray-800 text-white sticky top-0 z-50 ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <a href="/" className="text-2xl font-semibold">
        <h1><strong><span>DELTA</span> SHOP</strong></h1>
          {/* <img src={headerLogo} alt="logo" className="w-32" /> */}
        </a>
        <ul className="hidden space-x-6 lg:flex">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="hover:text-blue-500 transition duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {loggedIn ? (
          <div className="flex space-x-4 items-center">
            <button
              className="text-blue-500 hover:underline"
              onClick={handleSignOut}
            >
              Sign out
            </button>
          </div>
        ) : (
          <>
            <div className="hidden lg:flex space-x-4 items-center">
              <button
                className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
                onClick={openModal}
              >
                Sign in
              </button>
            </div>
          </>
        )}
        <div className="lg:hidden">
          <button className="text-white" onClick={openModal}>
            <img src={hamburger} alt="hamburger icon" className="w-6 h-6" />
          </button>
        </div>
      </div>
      <SignInSignUpModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSignIn={handleSignIn}
      />
      <div onClick={handleShow}>
        <div style={{position:'relative' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="31"  height="30" fill="white" className="bi bi-cart-fill" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <Badge bg="danger" style={{position:'relative', left:'0',top:'-40px', backgroundColor:'#DC3545'}}>{cart.cartItems.length}</Badge>
        </div>
      </div>

      <div className="hidden lg:flex space-x-4 items-center">
      <div>

<Offcanvas show={show} placement="end" onHide={handleClose} >
  <Container style={{ paddingLeft: '40px', display: 'flex', paddingTop: '40px', marginBottom: '0px' }}>
    <h5>SHOPPING CART</h5>
    <div style={{ display: 'flex' }}>
      <h5 style={{ paddingLeft: '90px', paddingRight: '8px', color: 'gray', cursor: 'pointer' }} onClick={handleClose}>close</h5>
      <div style={{ color: 'gray', paddingTop: '0px' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
        </svg>
      </div>
    </div>
  </Container>
  <Offcanvas.Body>
    <Cart />
  </Offcanvas.Body>
</Offcanvas>
</div>

      </div>
      
    </header>
  );
};

export default Nav;
