import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div style={{ margin: "20px" }}>
      <h2>Cart</h2>
      {cart.length === 0 ? <p>No items in the cart.</p> : null}
      {cart.map((item) => (
        <div key={item.imdbID} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0", borderRadius: "5px" }}>
          <h4>{item.Title}</h4>
          <button
            onClick={() => removeFromCart(item.imdbID)}
            style={{ padding: "5px 10px", backgroundColor: "#dc3545", color: "white", border: "none", borderRadius: "5px" }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;