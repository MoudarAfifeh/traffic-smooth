import React from "react";
import { ReactComponent as ArrowRight } from "../assets/images/arrowRight.svg";
import Input from "./Input";

export default function ContactForm() {
  return (
    <div className=" block mt-8 xl:absolute xl:-top-32 xl:left-percent_40">
      <div className="  flex flex-col rounded-xl bg-white w-fit xl:w-105 h-100 shadow-contactForm p-12 gap-8 ">
        <span className=" text-base font-Rubik font-light text-dark_100">
          Name
        </span>
        <Input id="name" placeholder="Hendrik Larsson" />
        <span className=" text-base font-Rubik font-light text-dark_100">
          Email
        </span>
        <Input id="email" placeholder="Your email address" type="email" />
        <button className="flex justify-around items-center text-white  w-32 md:w-36 xl:w-57 h-10 md:h-12 xl:h-15 bg-orange_100 font-bold font-Rubik text-xs xl:text-base rounded-md">
          GET STARTED <ArrowRight className=" w-4 xl:w-8" />
        </button>
      </div>
    </div>
  );
}
