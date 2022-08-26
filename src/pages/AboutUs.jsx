import React from "react";
import { ReactComponent as Mechanical } from "../assets/images/mechanical.svg";
import Fade from "react-reveal/Fade";
import AboutCard from "../components/AboutCard";

export default function AboutUs() {
  return (
    <div
      className=" flex flex-col xl:flex-row justify-between px-12 xl:px-60 mt-72 xl:mt-96"
      id="about"
    >
      <div className=" flex flex-col gap-12 basis-1/2">
        <span className=" font-bold font-Rubik text-base xl:text-2xl text-orange_100">
          ABOUT US
        </span>
        <span className=" font-Rubik font-light text-sm xl:text-lg text-dark_100 w-auto xl:w-100 xl:leading-10">
          The occupational traffic permit is one of the most important things in
          the company when carrying out freight transport. In fact, it is a
          prerequisite for doing business traffic at all.
        </span>
        <AboutCard />
      </div>
      <Fade right>
        <Mechanical className=" w-80 mx-auto md:w-96 xl:w-110 xl:mx-0" />
      </Fade>
    </div>
  );
}
