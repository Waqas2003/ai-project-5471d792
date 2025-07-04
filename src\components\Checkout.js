import React from 'react';

const Checkout = () => {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
        <label>
          Email:
          <input type="email" />
        </label>
        <label>
          Address:
          <input type="text" />
        </label>
        <button>Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;