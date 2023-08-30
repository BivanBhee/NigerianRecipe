import React from "react";
// import '../assets/style.css'
import img from "../assets/logo.png";
function Navbar() {
  return (
    <>
      <div className="bg-blue-400  flex px-10 py-5">
        <img className="w-20 h-20 " src={img} alt="logo" />
        <p className="m-auto text-[35px] uppercase font-bold">
          my nigerian recipe
        </p>
      </div>
      <div className="font-bold h-10 w-10  justify-center">
        Nigerian Jollof
      </div>
    </>
  );
}

export default Navbar;
