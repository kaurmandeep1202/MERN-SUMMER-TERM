//delete the entire code 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [cartCount, setCartCount] = useState(0);

  function addToCart(){
    setCartCount(cartCount + 1);
  }

  return (
    <BrowserRouter>
      <div className="App">

        <Header cartCount = {cartCount}/>

        <main>
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart}/>} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;