import React from "react";
import { Link } from "react-scroll";
import { ReactComponent as Logo } from "../assets/images/logo.svg";

export default function NavBar({ isNavOpen, setIsNavOpen }) {
  const handleNavBar = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className=" md:flex justify-between">
      <Link
        to="home"
        className={`${
          isNavOpen === true ? " hidden" : " block"
        } md:block cursor-pointer`}
      >
        <Logo className=" w-32 xl:w-56" />
      </Link>
      <span className="  text-3xl absolute right-12 sm:right-32 top-6 cursor-pointer md:hidden">
        <ion-icon
          name={isNavOpen ? "close" : "menu"}
          onClick={() => handleNavBar()}
        ></ion-icon>
      </span>
      <ul
        className={`${
          isNavOpen === true
            ? "flex items-start flex-col gap-10 ml-2 mt-4 mb-8"
            : "hidden"
        } md:flex md:flex-row md:basis-1/2 
          md:justify-between md:items-center font-Rubik font-bold text-sm lg:text-base
           text-white xl:pr-16`}
      >
        <Link to="about" className=" cursor-pointer w-max">
          ABOUT
        </Link>
        <Link to="howTo" className=" cursor-pointer w-max">
          HOW TO
        </Link>
        <Link to="faqs" className=" cursor-pointer w-max">
          FAQS
        </Link>
        <Link
          to="contactUs"
          className=" bg-orange_100 rounded-md w-28 xl:w-40 h-8 xl:h-15 flex justify-center items-center text-xs xl:text-base cursor-pointer"
        >
          CONTACT US
        </Link>
      </ul>
    </div>
  );
}
