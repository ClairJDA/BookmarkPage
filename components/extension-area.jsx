import React from "react";
import ExtensionCard from "./extension-card";
import data from "../data.json";

function ExtensionArea() {
  const extensions = data.extensions;
  return (
    <div className="p-5 text-center">
      <h2 className="text-xl text-blue-950 font-semibold">Download the extension</h2>
      <p className="mt-4 text-sm text-gray-400">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.{" "}
      </p>
      <div className="mt-8 md:h-[400px] flex flex-col items-center gap-y-4 md:flex-row md:justify-center md:gap-x-4">
        {extensions.map((item, index) => (
          <ExtensionCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default ExtensionArea;
