
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import Products from './pages/Products.tsx';
import ProductDetail from './pages/ProductDetail.tsx';
import ROICalculator from './pages/ROICalculator.tsx';
import Sustainability from './pages/Sustainability.tsx';
import Workflow from './pages/Workflow.tsx';
import Downloads from './pages/Downloads.tsx';
import Certifications from './pages/Certifications.tsx';
import Videos from './pages/Videos.tsx';
import Quote from './pages/Quote.tsx';

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
