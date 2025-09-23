import React from "react";
import ButtonDefault from "./ButtonDefault";

function NavigationBar() {
  return (
    <>
      <nav className="w-full h-20 
      flex justify-between items-center 
      px-40 bg-black 
      fixed z-100 top-0 left-0
      ">
        <div className="logo font-bold text-2xl">LOGO</div>
        <div className="navlinks flex justify-between items-center gap-8">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Pages</a>
          <a href="">News</a>
          <a href="">Contact Us</a>
        </div>
        <ButtonDefault>Join Now</ButtonDefault>
      </nav>
    </>
  );
}

export default NavigationBar;
