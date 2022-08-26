import React from "react";
import { ReactComponent as SmallTruck } from "../assets/images/smallTruck.svg";
import { ReactComponent as CopyRight } from "../assets/images/copyRight.svg";
import { ReactComponent as Facebook } from "../assets/images/facebook.svg";
import { ReactComponent as Twitter } from "../assets/images/twitter.svg";
import { ReactComponent as Instagram } from "../assets/images/instagram.svg";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";
import ContactForm from "../components/ContactForm";

export default function Footer() {
  return (
    <div className="relative mt-44" id="contactUs">
      <Fade left>
        <SmallTruck className=" absolute -top-36 xl:-top-44 w-60 mx-auto md:w-72 xl:w-96 " />
      </Fade>
      <div className="footer-container bg-no-repeat bg-cover xl:mr-96">
        <div className=" contact-container bg-no-repeat flex flex-col gap-12 px-20 xl:px-32">
          <div className=" flex flex-col lg:flex-row">
            <div className=" flex justify-around xl:basis-1/3 pt-24">
              <span className=" w-2 rounded-tl-2xl mr-4 rounded-bl-2xl h-40 bg-orange_200"></span>
              <span className=" font-Rubik font-normal text-sm xl:text-xl pt-8 text-white w-auto xl:w-80">
                We provide traffic management consultants so you get started
                quickly, contact us for a quote today!
              </span>
            </div>
            <ContactForm />
          </div>
          <div className=" flex flex-col-reverse gap-12 xl:flex-row justify-between pb-10 mt-12 xl:mt-28">
            <Link to="home" className=" cursor-pointer">
              <Logo className=" w-32 xl:w-56" />
            </Link>
            <ul className=" flex basis-1/2 gap-8 xl:gap-12 items-center xl:justify-center font-Rubik font-bold text-xs xl:text-base text-white">
              <Link to="about" className=" cursor-pointer">
                ABOUT
              </Link>
              <Link to="howTo" className=" cursor-pointer">
                HOW TO
              </Link>
              <Link to="faqs" className=" cursor-pointer">
                FAQS
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center py-4 ml-12 xl:ml-36 w-full xl:w-2/3">
        <CopyRight />
        <div className=" flex gap-8 mr-16 xl:mr-20">
          <Facebook />
          <Twitter />
          <Instagram />
        </div>
      </div>
    </div>
  );
}
