import React, { useEffect, useState } from "react";
import { ReactComponent as Minus } from "../assets/images/minus.svg";
import { ReactComponent as Plus } from "../assets/images/plus.svg";
import { ReactComponent as ThinkingMan } from "../assets/images/thinkingMan.svg";
import FaqQusAns from "../components/FaqQusAns";

const QuestionsApiUrl =
  "https://hook.integromat.com/syyhp9cj3ikey0hhi089wb3xjdy5d9s6";

export default function Faq() {
  const [faqQusAnsData, setFaqQusAnsData] = useState([]);
  const [allQuestionData, setAllQuestionData] = useState(false);
  useEffect(() => {
    fetch(QuestionsApiUrl)
      .then((response) => response.json())
      .then((actualData) => setFaqQusAnsData(actualData.response))
      .catch((err) => {
        alert(err.message);
      });
    return () => {
      setFaqQusAnsData([]);
    };
  }, []);
  const loadMore = () => {
    setAllQuestionData(!allQuestionData);
  };

  return (
    <div
      className=" faq-container flex flex-col xl:gap-16 bg-no-repeat md:lg:px-24 xl:px-60 bg-contain lg:bg-auto xl:pt-16"
      id="faqs"
    >
      <div className=" flex flex-col xl:flex-row basis-1/2 xl:justify-between items-center px-8 xl:px-0">
        <div className=" flex flex-col gap-12 mt-32">
          <span className=" font-Rubik font-bold text-base xl:text-2xl text-orange_100">
            FAQ
          </span>
          <span className=" text-2xl xl:text-5xl font-DMSerifDisplay font-normal w-auto xl:w-105 leading-10">
            Questions and Answers on Professional Traffic Permits:
          </span>
        </div>
        <ThinkingMan className=" w-80 md:w-96 xl:w-auto xl:mx-0" />
      </div>
      <div className=" flex flex-col gap-4">
        <div className=" flex flex-wrap justify-around xl:justify-start">
          {faqQusAnsData.map((faqQusAns, key) => (
            <FaqQusAns
              index={key}
              question={faqQusAns.title}
              answer={faqQusAns.Message}
              allQuestionData={allQuestionData}
            />
          ))}
          <button
            className="w-72 md:w-105 h-22 flex justify-center items-center bg-orange_200 bg-opacity-20 rounded-lg load-more-container"
            onClick={() => loadMore()}
          >
            <span className=" text-orange_200 self-center basis-3/4 font-bold">
              LOAD MORE
            </span>
            {!allQuestionData ? <Plus /> : <Minus />}
          </button>
        </div>
      </div>
    </div>
  );
}
