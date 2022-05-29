import React from "react";

export default function Ayat() {
  return (
    <>
      <div className="bg-gray-700/25 rounded-lg">
        <div className="flex justify-between items-center mx-4 py-2 ">
          <div>
            <span className="bg-purple-600 py-0.5 px-3 inline-block rounded-full">
              1
            </span>
          </div>
          <div className="flex space-x-6">
            <button>111</button>
            <button>111</button>
            <button>111</button>
          </div>
        </div>
      </div>
      <p className="text-[#ABAFD7] text-[18px] font-amiri font-bold text-right mt-6 mb-4">
        {arrab}
      </p>
      <p className="text-[#ABAFD7]">{arti}</p>
      <hr className="opacity-30 mt-3 mb-8" />
    </>
  );
}
