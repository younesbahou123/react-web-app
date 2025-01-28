import React, { useState } from "react";
import Header from "./components/Header";
import FoodList from "./components/FoodList";
import Cart from "./components/Cart";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.imdbID !== id));
  };

  return (
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "65%" }}>
          <h2>Food List</h2>
          <FoodList addToCart={addToCart} />
        </div>
        <div style={{ width: "30%" }}>
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </div>
      </div>
    </div>
  );
};

export default App;
