import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "../Components/Home";
import ProductList from "../Components/ProductList";
import Contacts from "../Components/Contacts";
import Cart from "../Components/Cart";

const AppRouter = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productID) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productID)
    );
  };

  return (
    <>
      <nav className="menu">
        <Link to="/" className="decoration">
          Главная
        </Link>
        <Link to="/games" className="decoration">
          Игры
        </Link>
        <Link to="/contacts" className="decoration">
          Контакты
        </Link>
        <button onClick={toggleCart}>Корзина ({cart.length})</button>
      </nav>
      {isCartOpen && (
        <Cart
          toggleCart={toggleCart}
          removeFromCart={removeFromCart}
          cart={cart}
        />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<ProductList addToCart={addToCart} />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
};

export default AppRouter;
