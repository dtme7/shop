import React from "react";
import "./Cart.css";

const Cart = ({ cart, toggleCart, removeFromCart }) => {
  const totalPrice = cart.reduce((total, product) => total + +product.price, 0);

  return (
    <div className="cart-overlay" onClick={toggleCart}>
      <div className="cart-container" onClick={(e) => e.stopPropagation()}>
        <h2>Корзина</h2>
        {cart.length === 0 ? (
          <p>Корзина пуста</p>
        ) : (
          cart.map((product) => (
            <div key={product.id}>
              <p>{product.name}</p>
              <button onClick={() => removeFromCart(product.id)}>
                Удалить
              </button>
            </div>
          ))
        )}
         <h3>Общая стоимость: {totalPrice}</h3>
        <button onClick={toggleCart}>Закрыть</button>
        
      </div>
    </div>
  );
};
export default Cart;
