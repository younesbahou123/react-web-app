import React, { useState, useEffect } from "react";
import FoodItem from "./FoodItem";

const FoodList = ({ addToCart }) => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from OMDbAPI
    fetch("https://www.omdbapi.com/?s=pizza&apikey=98e3fb1f")
      .then((response) => response.json())
      .then((data) => {
        setFoods(data.Search || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
      {foods.map((item) => (
        <FoodItem key={item.imdbID} item={item} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default FoodList;