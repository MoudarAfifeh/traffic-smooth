import React, { useState } from "react";
import { ReactComponent as Minus } from "../assets/images/minus.svg";
import { ReactComponent as Plus } from "../assets/images/plus.svg";

export default function FaqQusAns({
  index,
  question,
  answer,
  allQuestionData,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const handleStatus = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      key={index}
      className={`flex flex-col mb-4 xl:mr-percent_10 ${
        !allQuestionData && index > 9 && "hidden"
      }`}
    >
      <div className=" flex justify-around items-center bg-white rounded-lg h-22 w-72 md:w-105">
        <span className=" text-sm xl:text-lg font-medium font-Rubik text-dark_100 basis-2/3">
          {question}
        </span>
        {!isOpen ? (
          <Plus onClick={() => handleStatus()} className=" cursor-pointer" />
        ) : (
          <Minus onClick={() => handleStatus()} className=" cursor-pointer" />
        )}
      </div>
      {isOpen && (
        <div className="flex text-sm xl:text-lg justify-center items-center bg-orange_400 rounded-lg w-72 md:w-105 h-56 shadow-result px-8">
          {answer}
        </div>
      )}
    </div>
  );
}
