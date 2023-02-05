import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './MainPage';
import ContactPage from './ContactPage';
import ProductPage from './ProductPage';
import { useState } from 'react';
import CartPage from './CartPage';

function App() {
  var [cart,changeCart]=useState([]);
  return (
    <BrowserRouter basemname={`/${process.env.PUBLIC_URL}`}>
    <Routes>
      <Route element={<MainPage ccart={changeCart}/>} path='/odin-shopping-cart' />
      <Route element={<ProductPage cart={cart} ccart={changeCart}/>} path='odin-shopping-cart/products' />
      <Route element={<ContactPage cart={cart}/>} path='odin-shopping-cart/contact' />
      <Route element={<CartPage cart={cart} ccart={changeCart} />} path='odin-shopping-cart/cart'/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
