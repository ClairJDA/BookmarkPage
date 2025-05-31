import React, { useState } from "react";
import Image from "next/image";

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="mt-4 flex flex-row justify-between">
        <h3 className="text-sm text-blue-950 hover:text-red-400">{question}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="12"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={isOpen ? "rotate-180" : "rotate-0"}
        >
          <path
            fill="none"
            stroke={isOpen ? "red" : "#5267DF"}
            strokeWidth="3"
            d="M1 1l8 8 8-8"
          />
        </svg>
      </div>

      {isOpen && <p className="mt-4 text-sm text-gray-400">{answer}</p>}
      <hr className="my-4 text-gray-400/50" />
    </div>
  );
}

export default FaqItem;
