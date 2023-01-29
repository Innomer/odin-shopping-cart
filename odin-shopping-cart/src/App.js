import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './MainPage';
import ContactPage from './ContactPage';
import ProductPage from './ProductPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<MainPage/>} path='/' />
      <Route element={<ProductPage />} path='/products' />
      <Route element={<ContactPage />} path='/contact' />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
