"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PopUpMenu from "./popup-menu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="p-5 md:w-full xl:mx-auto xl:max-w-6xl flex items-center justify-between">
      <Image
        src="/images/logo-bookmark.svg"
        alt="logo"
        width={148}
        height={25}
        priority
      />
      <Image
        className="block md:hidden"
        src="/images/icon-hamburger.svg"
        alt="hamburger"
        width={20}
        height={20}
        style={{ width: "auto", height: "auto" }}
        onClick={() => setIsOpen(!isOpen)}
      />
      <ul className="hidden md:flex items-center gap-x-5 text-xs text-blue-950 uppercase">
        <Link href="#" className="hover:text-red-400 tracking-wider">
          Features
        </Link>
        <Link href="#" className="hover:text-red-400 tracking-wider">
          Pricing
        </Link>
        <Link href="#" className="hover:text-red-400 tracking-wider">
          Contact
        </Link>
        <Link
          href="#"
          className="py-2 px-4 text-white hover:text-red-400 tracking-wider bg-red-400 border-1 border-red-400 hover:bg-white hover:border-red-400 rounded-sm"
        >
          Login
        </Link>
      </ul>
      {isOpen && <PopUpMenu handleClose={setIsOpen}/>}
    </div>
  );
}

export default Navbar;
