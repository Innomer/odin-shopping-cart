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
    <BrowserRouter>
    <Routes>
      <Route element={<MainPage ccart={changeCart}/>} path='/' />
      <Route element={<ProductPage cart={cart} ccart={changeCart}/>} path='/products' />
      <Route element={<ContactPage cart={cart}/>} path='/contact' />
      <Route element={<CartPage cart={cart} ccart={changeCart} />} path='/cart'/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
