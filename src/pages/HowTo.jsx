import React from "react";
import { ReactComponent as CallCenterWomen } from "../assets/images/callCenterWomen.svg";
import Fade from "react-reveal/Fade";

export default function HowTo() {
  return (
    <div
      className=" flex flex-col-reverse xl:flex-row justify-around px-12 items-center"
      id="howTo"
    >
      <Fade left>
        <CallCenterWomen className=" h-80 md:h-auto w-80 mx-auto md:w-96 xl:w-110 xl:mx-0" />
      </Fade>
      <div className=" flex flex-col gap-12">
        <span className=" font-bold font-Rubik text-base xl:text-2xl text-orange_100">
          HOW TO APPLY
        </span>
        <span className=" font-Rubik font-light text-sm xl:text-lg text-dark_100 w-auto xl:w-96 xl:leading-10">
          When applying for a traffic permit, there are certain requirements
          that you must meet that are included in the examination: requirements
          for professional knowledge, solid establishment, good reputation and
          financial resources. Important to remember is to confirm your
          application for a traffic permit by the company's company signer or
          CEO.
        </span>
      </div>
    </div>
  );
}
