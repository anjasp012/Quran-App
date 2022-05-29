import React from "react";

export default function Header() {
  return (
    <header className="mx-6">
      <p className="text-purple-100/60 text-[18px] font-medium">
        Asslamualaikum
      </p>
      <h1 className="text-white text-2xl mt-1 font-semibold">Tanvir Ahhasan</h1>

      <div className="mt-6 relative bg-gradient-to-br from-purple-300 via-purple-500 to-purple-700 rounded-md h-[131px]">
        <div className="mx-6">
          <p className="text-white text-sm font-medium py-4">Last Read</p>
          <h2 className="text-white text-[18px] font-semibold">Al-Fatihah</h2>
          <p className="text-white/60 text-sm pt-2">Ayat No: 1</p>
        </div>
        <div className="absolute bottom-0 right-0 select-none">
          <img src="Quran.png" />
        </div>
      </div>
    </header>
  );
}
