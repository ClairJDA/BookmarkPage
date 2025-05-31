"use client";

import React, { useState } from "react";
import FaqItem from "./faq-item";
import data from "../data.json";


function FAQ() {
  const faq = data.faq;
  
  return (
    <div className="px-8 py-16 w-full md:w-xl mx-auto">
      <h2 className="mb-4 text-xl text-center text-blue-950 font-semibold ">
        Frequently Asked Questions
      </h2>
      <p className="text-sm text-center text-gray-400">
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>

      {faq.map((item, index) => <FaqItem key={index} {...item} />)}

      <button className="mt-4 block mx-auto blue-btn">
        More Info
      </button>
    </div>
  );
}

export default FAQ;
