import Image from "next/image";
import React from "react";

function IntroArea() {
  return (
    <div className="md:h-[400px] xl:max-w-6xl mx-auto px-8 py-16 flex flex-col-reverse md:flex-row md:justify-between gap-y-4">
      <div className="md:w-1/2 md:self-center">
        <h1 className="text-2xl font-semibold">A Simple Bookmark Manager</h1>
        <p className="mt-4 text-sm text-gray-400">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <button className="mt-4 mr-4 mx-auto blue-btn">
          Get it on Chrome
        </button>
        <button className="mt-4 mx-auto py-2 px-4 text-sm text-gray-600 font-medium bg-gray-50 rounded-md">
          Get it on Firefox
        </button>
      </div>
      <div className="relative md:w-1/2 h-auto">
        <div className=" md:w-[352px] lg:w-[480px] h-[272px] w-[311px]">
          <div className="h-1/2 w-4/5 md:h-2/3 rounded-bl-[100px] absolute bottom-0 right-0 bg-blue-600"></div>
          <Image
            src="/images/illustration-hero.svg"
            alt="hero"
            width={0}
            height={0}
            style={{ width: "100%", height: "100%" }}
            className="absolute bottom-0 right-0 lg:right-10 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default IntroArea;
