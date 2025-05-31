"use client";
import React, { useState } from "react";

function CTA() {
  const [err, setErr] = useState(false);
  const [email, setEmail] = useState("");

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(String(email).toLowerCase())) {
      setErr(false);
      setEmail("");
    } else {
      setErr(true);
    }
  }

  return (
    <div className="py-16 px-4 text-center text-white bg-blue-600">
      <p className="text-sm tracking-widest uppercase">
        35,000+ already joined
      </p>
      <p className="text-2xl">Stay up-to-date with what we’re doing</p>
      <div className="mt-4 mx-8 flex flex-col items-center gap-y-2 md:flex-row md:justify-center md:gap-x-4 ">
        <div
          className={`m-0 md:w-auto ${
            err && "p-1 bg-red-400 rounded-md"
          }`}
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="py-2 px-4 text-md text-blue-600 bg-white rounded-md focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => {
              setErr(false);
              setEmail("");
            }}
          />
          {err && (
            <p className="mt-1 text-left text-xs text-white">
              Whoops, make sure it's an email
            </p>
          )}
        </div>

        <button
          className="w-full md:w-auto py-2 px-4 text-white bg-red-400 border-red-400 border-2 rounded-md hover:bg-white hover:text-red-400"
          onClick={() => validateEmail(document.querySelector("input").value)}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default CTA;
