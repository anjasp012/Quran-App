import Link from "next/link";
import React, { useState } from "react";

export default function Navbar({ navtitle, back }) {
  const [search, setSearch] = useState(false);

  const [canva, setCanva] = useState(false);

  return (
    <>
      <nav
        className={`${
          search ? "relative" : ""
        } flex items-center mx-6 justify-between mb-8 mt-10`}
      >
        <div className="flex items-center">
          <button
            className={`${back ? "hidden" : ""} mr-5`}
            onClick={() => setCanva(!canva)}
          >
            <svg
              width={22}
              height={11}
              viewBox="0 0 22 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0H22V2.44444H0V0ZM0 8.55556H14.6667V11H0V8.55556Z"
                fill="#7B80AD"
              />
            </svg>
          </button>
          <button className={`${back ? "" : "hidden"} mr-5`}>
            <Link href="/">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 10.8333H5.46833L9.645 6.645L8 5L1 12L8 19L9.645 17.355L5.46833 13.1667H22V10.8333Z"
                  fill="#7B80AD"
                />
              </svg>
            </Link>
          </button>
          <h1 className="text-white text-lg font-bold">{navtitle}</h1>
        </div>
        <button onClick={() => setSearch(!search)}>
          <svg
            width={21}
            height={21}
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z"
              fill="#7B80AD"
            />
          </svg>
        </button>
        <div
          className={`${
            search ? "right-0" : "-right-full"
          } absolute w-full transition-all duration-200`}
        >
          <input
            type="text"
            className="bg-[#091945] placeholder:text-white/25 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 px-6 py-2 rounded-full w-full text-white"
            placeholder="Cari Surat ..."
          />
          <button onClick={() => setSearch(!search)}>
            <svg
              className="stroke-white/60 absolute top-2 right-4"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1={18} y1={6} x2={6} y2={18} />
              <line x1={6} y1={6} x2={18} y2={18} />
            </svg>
          </button>
        </div>
      </nav>
      <div
        className={`${
          canva ? "left-0" : "-left-full"
        } fixed bg-[#091945] z-50 w-full top-0 right-0 bottom-0 transition-all duration-200 `}
      >
        <div className="mx-6 mt-10">
          <div className="flex justify-between mb-6">
            <button onClick={() => setCanva(!canva)}>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 10.8333H5.46833L9.645 6.645L8 5L1 12L8 19L9.645 17.355L5.46833 13.1667H22V10.8333Z"
                  fill="#7B80AD"
                />
              </svg>
            </button>
            <div className="flex gap-x-2">
              <div className="bg-gray-600 rounded-full">
                <button className="bg-purple-500 text-white rounded-full px-1">
                  dark
                </button>
                <button className="bg-purple-100/25 rounded-full px-1">
                  white
                </button>
              </div>
            </div>
          </div>
          <ul className="space-y-3">
            <li>
              <button className="bg-purple-500 w-full rounded py-2 text-white font-semibold">
                Login
              </button>
            </li>
            <li>
              <button className="bg-purple-500 w-full rounded py-2 text-white font-semibold">
                Register
              </button>
            </li>
          </ul>
          <span className="absolute bottom-8 left-1/2 -translate-x-1/2 items-end text-white/25">
            V 0.91.00
          </span>
        </div>
      </div>
    </>
  );
}
