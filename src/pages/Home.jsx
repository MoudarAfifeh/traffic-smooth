import React, { useState } from "react";
import { ReactComponent as ArrowRight } from "../assets/images/arrowRight.svg";
import { ReactComponent as Truck } from "../assets/images/truck.svg";
import Fade from "react-reveal/Fade";
import NavBar from "../components/NavBar";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div id="home">
      <div className=" home-container w-screen xl:h-screen bg-no-repeat flex flex-col gap-2 sm:gap-12 md:gap-24 bg-contain md:bg-cover pt-4 md:pt-12 pl-8 md:px-28 xl:px-60">
        <NavBar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <div
          className={`${
            isNavOpen === true ? " hidden" : "flex "
          } md:flex flex-col md:gap-1 text-xl sm:text-3xl md:text-6xl xl:text-8xl font-normal font-DMSerifDisplay text-white self-start`}
        >
          <span>Your awesome</span>
          <span> traffic permit</span>
          <span> consultant.</span>
        </div>
        <button
          className={`${
            isNavOpen === true ? " hidden" : "flex "
          } md:flex justify-around items-center text-white  text-xs xl:text-base w-32 md:w-36 xl:w-57 h-8 md:h-12 xl:h-15 bg-orange_100 font-bold font-Rubik rounded-md mb-0 md:mb-12`}
        >
          GET STARTED <ArrowRight className=" w-4 xl:w-8" />
        </button>
      </div>
      <Fade left className=" relative ">
        <Truck className=" h-60 md:h-80 xl:h-auto w-60 md:w-80 xl:w-110 absolute -top-8 xl:-top-40 mt-0 xl:mt-24" />
      </Fade>
    </div>
  );
}
