"use client";

import React, { useState } from "react";
import Image from "next/image";
import data from "../data.json";

function Feature() {
  const features = data.features;
  const [index, setIndex] = useState(0);

  return (
    <div className="p-5 xl:max-w-6xl mx-auto text-center">
      <h2 className="text-xl text-blue-950 font-semibold">Features</h2>
      <p className="mt-4 text-sm text-gray-400">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <div className="flex flex-col items-center text-sm text-blue-950 font-medium md:flex-row md:justify-center md:gap-x-3 mt-8">
        <p
          className={`hover:text-red-400 p-2 ${
            index === 0 && "active-devider"
          }`}
          onClick={() => setIndex(0)}
        >
          Simple Bookmarking
        </p>
        <hr className="devider" />
        <p
          className={`hover:text-red-400 p-2 ${
            index === 1 && "active-devider"
          }`}
          onClick={() => setIndex(1)}
        >
          Speedy Searching
        </p>
        <hr className="devider" />
        <p
          className={`hover:text-red-400 p-2 ${
            index === 2 && "active-devider"
          }`}
          onClick={() => setIndex(2)}
        >
          Easy Sharing
        </p>
        <hr className="devider" />
      </div>
      <hr className="hidden md:block w-[65%] mx-auto border-t-0 border-b text-gray-400/50" />

      <div className="mt-5 md:mt-10 flex flex-col items-center md:flex-row md:gap-x-5">
        <div className="relative md:w-1/2 h-auto">
          <div className=" md:w-[352px] lg:w-[480px] h-[272px] w-[311px]">
            <div className="h-1/2 w-4/5 md:h-2/3 rounded-br-[100px] absolute bottom-0 left-0 bg-blue-600"></div>
            <Image
              src={`/images/illustration-features-tab-${index + 1}.svg`}
              alt="tab1"
              width={0}
              height={0}
              style={{ width: "85%", height: "90%" }}
              className="absolute top-0 right-0 object-contain"
            />
          </div>
        </div>

        <div className="mt-5 md:mt-0 md:text-left">
          <h2 className="text-lg text-blue-950 font-semibold">
            {features[index].title}
          </h2>
          <p className="mt-4 text-sm text-gray-400">
            {features[index].description}
          </p>
          <button className="hidden md:block mt-4 blue-btn">More Info</button>
        </div>
      </div>
    </div>
  );
}

export default Feature;
