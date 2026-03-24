import React from 'react';
import { Routes, Route, HashRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Recipes from './pages/Recipes';

export default function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="recipes" element={<Recipes />} />
      </Routes>
    </HashRouter>
  );
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
