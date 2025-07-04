import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import Checkout from '../components/Checkout';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <ProductList />
        <Cart />
        <Checkout />
      </main>
      <Footer />
    </div>
  );
};

export default App;