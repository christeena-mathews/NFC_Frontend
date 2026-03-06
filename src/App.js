import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import Customers from './components/Customers';
import Orders from './components/Orders';
import Inventory from './components/Inventory';
import Payments from './components/Payments';

const App = () => {
  return (
    <Router>
      <div>
        <h1>NFC Frontend</h1>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/payments" element={<Payments />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;