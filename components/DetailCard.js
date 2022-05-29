import React from "react";

export default function DetailCard({ nama, arti, type, ayat }) {
  return (
    <header className="mx-6">
      <div className="relative text-center align-middle bg-gradient-to-br overflow-hidden from-purple-300 via-purple-500 to-purple-700 h-[257px] rounded-2xl">
        <img
          src="Quran2.png"
          className="absolute opacity-10 -bottom-10 -right-14 select-none"
          alt=""
        />
        <h1 className="text-white text-[26px] font-medium mt-5">{nama}</h1>
        <h3 className="text-white font-medium">{arti}</h3>
        <hr className="opacity-40 w-8/12 mx-auto my-4" />
        <p className="text-white  font-medium uppercase">
          {type} • {ayat} ayat
        </p>
        <img src="bismillah.svg" className="mx-auto mt-8" alt="" />
      </div>
    </header>
  );
}
