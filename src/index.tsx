import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {   BrowserRouter as Router,
  Route,
  Routes, } from "react-router-dom";
import { ProductPage } from "./components/ProductPage";
import { Nav } from './components/Nav';
import { Cart } from './components/Cart';
import { Me } from './components/Me';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);  
root.render(
  <>
  <Nav/>
  <Router>
  <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path={"/product/:id"} element={<ProductPage/>} />
      <Route path="/me" element={<Me/>} />
  </Routes>
    </Router>
    </>
);

