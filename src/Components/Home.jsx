import React from "react";
import "./Home.css";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home-text">Добро пожаловать в наш магазин!</h1>
      <p className="home-text2">Здесь вы найдете лучшие игры</p>
      <button className="btn" onClick={ProductList}>
        Перейти к играм
      </button>
      <footer className="footer">
        <p>© 2025 HyperPlay — Все права защищены</p>
      </footer>
    </div>
  );
};

export default Home;
