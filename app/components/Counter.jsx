"use client";

import { useState } from "react";
import { GiHealthIncrease } from "react-icons/gi";
import { FaMinusSquare } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import { FaGithub } from "react-icons/fa6";

export default function Counter() {
  let [counter, setCounter] = useState(10);

 function handleIncrement(){
  setCounter(counter+1);
 }
 function handleDecrement(){
  setCounter(counter-1);
 }
 function handleReset(){
  setCounter(counter=0);
 }

  return (
    <>
      <div className="bg-gray-300 flex flex-col justify-center items-center text-center w-full h-screen text-gray-700">
        <div>
          <p className="text-center  text-gray-700 font-semibold text-4xl">
            Dynamic Counter
          </p>
          <hr className="py-10" />
          <h1 className="text-lg md:text-4xl lg:text-6xl">
            <span className="text-3xl p-3 bg-amber-600 text-white font-bold">
              Current Value
            </span>
            <span className="p-3 bg-blue-950 text-3xl text-white font-bold">
              {counter}
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-3 gap-5">
          <button
            className="bg-gray-800 text-gray-100 font-bold px-4 py-2 rounded-lg mt-10"
            onClick={handleIncrement}
          >
            <GiHealthIncrease className="mx-auto" />
          </button>
          <button
            className="bg-gray-800 text-gray-100 font-bold px-4 py-2 rounded-lg mt-10"
            onClick={handleReset}
          >
            <GrPowerReset className="mx-auto" />
          </button>
          <button
            className="bg-gray-800 text-gray-100 font-bold px-4 py-2 rounded-lg mt-10"
            onClick={handleDecrement}
          >
            <FaMinusSquare className="mx-auto" />
          </button>
        </div>
        <p className=" text-sm bottom-10  absolute text-gray-900">
          Powered by <a href="https://www.github.com/ashfaqmbd">Ashfaq Ahmed</a>
          <FaGithub className="text-lg inline ml-2"/>
        </p>
      </div>
    </>
  );
}
