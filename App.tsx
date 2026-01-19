
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import ROICalculator from './pages/ROICalculator';
import Sustainability from './pages/Sustainability';
import Workflow from './pages/Workflow';
import Downloads from './pages/Downloads';
import Certifications from './pages/Certifications';
import Videos from './pages/Videos';
import Quote from './pages/Quote';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/roi-calculator" element={<ROICalculator />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/workflow" element={<Workflow />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/get-a-quote" element={<Quote />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
