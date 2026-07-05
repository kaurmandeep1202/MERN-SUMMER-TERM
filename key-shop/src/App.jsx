import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/cart";

function App() {
  const [cartItems, setCartItems] = useState([]);
 
 const cartCount = cartItems.reduce(
  (total, item) => total + item.quantity,
  0);
  
  function increaseQuantity(productId){
    setCartItems((previousCartItems) => {
       return previousCartItems.map((item) => {
        return item.id === productId ? {...item, quantity:item.quantity + 1} : item;
       })
    })
  }


   function decreaseQuantity(productId){
    setCartItems((previousCartItems) => {
       return previousCartItems.map((item) => {
        return item.id === productId ? {...item, quantity:item.quantity - 1} : item;
       }).filter((item) => item.quantity > 0);
    })
  }


  function addToCart(product) {
    
    if(!product){
      return;
    }

    setCartItems((previousCartItems) => {
      const productAlreadyInCart = previousCartItems.find(
        (item) => item.id === product.id
      );

if (productAlreadyInCart) {
  return previousCartItems.map((item) => {
    if (item.id === product.id) {
      return {
        ...item,
        quantity: item.quantity + 1,
      };
    }
    return item;
  });
}

      return [...previousCartItems, { ...product, quantity: 1 }];
    });
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header cartCount={cartCount} />

        <main>
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
            <Route path="/cart" element={<Cart cartItems={cartItems}  increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>}/>
          </Routes>
          
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;