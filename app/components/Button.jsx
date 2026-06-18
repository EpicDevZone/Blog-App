"use client";
import React from "react";

const Button = ({ category, onClick, activeFilter }) => {
  // console.log(category , activeFilter);

  return (
    <div>
      <button
        onClick={onClick}
        className={`text-xl font-bold text-white border-2 px-5 py-3 rounded-3xl hover:bg-blue-400  duration-250  active:bg-blue-600 ${activeFilter === category}
              ?  
              : `}
              
      >
        {category}
        
      </button>
    </div>
  );
};

export default Button;
