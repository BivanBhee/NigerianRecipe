import React from "react";
// import '../assets/style.css'
import img from "../assets/logo.png";

function Ingredients() {
  const ingredientList = [
    "Tomatoes",
    "Red Bell Pepper",
    "Onion",
    "Groundnut Oil",
    "Tomato Paste",
    "Parboiled Rice",
    "Meat Stock",
    "Salt",
    "Curry Powder",
    "Thyme",
    "All-Purpose Seasoning",
    "Bay Leaves",
    "Water"
  ];

  return (
    <div className="m-5">
      <h2 className="font-bold text-[25px]">Ingredients:</h2>
      <ul>
        {ingredientList.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default Ingredients;
