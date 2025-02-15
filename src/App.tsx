import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Histoire } from './pages/Histoire';
import { Boutiques } from './pages/Boutiques';
import { Contact } from './pages/Contact';
import { ParfumsCategorie } from './pages/ParfumsCategorie';
import { Coffrets } from './pages/Coffrets';
import { Cart } from './components/Cart';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-stone-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/histoire" element={<Histoire />} />
          <Route path="/boutiques" element={<Boutiques />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/parfums/:categorie" element={<ParfumsCategorie />} />
          <Route path="/coffrets" element={<Coffrets />} />
        </Routes>
        <Cart />
      </div>
    </Router>
  );
}

export default App;