import React from "react";

export default function Input({ id, placeholder, type }) {
  return (
    <input
      id={id}
      className=" bg-white h-10 md:h-15 w-44 sm:w-99 font-bold font-Rubik text-sm xl:text-lg pl-8 
          border-2 border-solid border-orange_100 border-opacity-50 focus:outline-none focus:border-opacity-100 rounded
           focus:shadow-contactInput placeholder:font-light
          "
      placeholder={placeholder}
      type={type ? type : "text"}
    />
  );
}
