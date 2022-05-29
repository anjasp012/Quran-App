import React from "react";

export default function Slider() {
  return (
    <section className="mx-6 mt-10 mb-6">
      <div className="border-b-2 border-white/10 pb-2">
        <ul className="flex text-white/60 justify-between items-center mx-2">
          <li>
            <button>Surah</button>
          </li>
          <li>
            <button>Para</button>
          </li>
          <li>
            <button>Page</button>
          </li>
          <li>
            <button>Hijb</button>
          </li>
        </ul>
      </div>
    </section>
  );
}
