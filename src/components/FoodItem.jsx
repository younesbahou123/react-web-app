
import React from "react";

const FoodItem = ({ item, addToCart }) => {
  return (
    <div style={{ border: "1px solid #ddd", margin: "10px", padding: "10px", borderRadius: "5px" }}>
      <h3>{item.Title}</h3>
      <p>Year: {item.Year}</p>
      <button
        onClick={() => addToCart(item)}
        style={{ padding: "5px 10px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px" }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default FoodItem;