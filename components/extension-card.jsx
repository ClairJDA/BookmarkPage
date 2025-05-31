import Image from "next/image";
import React from "react";

function ExtensionCard({ browser, version, icon }) {
  return (
    <div className="w-[320px] extentions p-5 flex flex-col items-center shadow-xl shadow-blue-600/15 rounded-md">
      <Image
        src={icon}
        alt="extension"
        width={60}
        height={60}
        style={{ width: "auto", height: "auto" }}
      />
      <p className="mt-4 text-sm text-blue-950 font-medium">
        Add to {browser}{" "}
      </p>
      <p className="text-sm text-gray-400">Minimum version {version}</p>
      <hr className="my-4 w-full border-t-none bordrer-b border-dashed text-gray-400/50" />
      <button className="mt-4 block mx-auto blue-btn border-1 hover:bg-white hover:text-blue-600">
        Add & Install Extension
      </button>
    </div>
  );
}

export default ExtensionCard;
