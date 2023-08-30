import React from "react";
// import '../assets/style.css'
import img from "../assets/jollof.jpg";
function image() {
  return (
    <div >
        <img className="h-[300px] w-[300px] m-auto" src={img} alt="jollof" />
    </div>
  );
}

export default image;