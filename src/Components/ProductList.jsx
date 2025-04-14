import React, { useState, useEffect } from "react";
import { db } from "../FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import "./Products.css";

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "games"));
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
      } catch (error) {
        console.error("Ошибка на сервере", error);
      }
    };
    fetchProduct();
  }, []);

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="backgroundimg">
      <div>
        <h1>Список игр</h1>
        <input
          type="text"
          placeholder="Поиск товаров.."
          value={searchQuery}
          onChange={handleSearchQuery}
        />
        <ul>
          {filteredProducts.map((product) => (
            <li
              className={`product-card animate-up opacity-0`}
              key={product.id}
            >
              <img
                src={product.image}
                alt="product-image"
                className=" -32 h-32 object-cover rounded-xl mb-4"
              />
              <h2 className="text">{product.name}</h2>
              <p className="description">{product.description}</p>
              <p className="price">Цена:{product.price}тг</p>
              <button onClick={() => addToCart(product)}>
                Добавить в корзину
              </button>
            </li>
          ))}
        </ul>
      </div>
      <footer className="footer2">
        <p>© 2025 HyperPlay — Все права защищены</p>
      </footer>
    </div>
  );
};

export default ProductList;
