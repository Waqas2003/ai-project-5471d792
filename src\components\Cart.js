import React, { useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = product => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = product => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map(product => (
          <li key={product.id}>
            <span>{product.name}</span>
            <span> x {product.quantity}</span>
            <button onClick={() => handleRemoveFromCart(product)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${cart.reduce((acc, product) => acc + product.price * product.quantity, 0)}</p>
    </div>
  );
};

export default Cart;