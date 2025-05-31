import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoLight from "./logo-light";

function PopUpMenu({ handleClose }) {
  return (
    <div
      className="w-full h-full p-5 absolute z-10 top-0 right-0 bg-blue-950/95"
      onTouchMove={() => handleClose(false)}
    >
      <div className="flex flex-row justify-between items-center">
        <LogoLight />
        <Image
          src={"/images/icon-close.svg"}
          alt="close"
          width={20}
          height={20}
          onClick={() => handleClose(false)}
        />
      </div>
      <ul className="flex flex-col items-center gap-y-4 py-8 text-grey-50 tracking-widest uppercase md:hidden">
        <Link
          href="#"
          className="w-full py-3 text-center border-b-1 border-t-1"
        >
          Features
        </Link>
        <Link href="#" className="w-full pb-3 text-center border-b-1">
          Pricing
        </Link>
        <Link href="#" className="w-full pb-3 text-center border-b-1">
          Contact
        </Link>
        <Link
          href="#"
          className="w-full mt-3 py-3 border border-white text-center rounded-md"
        >
          Login
        </Link>
      </ul>
    </div>
  );
}

export default PopUpMenu;
