"use client";
import CoursesCard from "../../components/CoursesCard";
import Menu from "../../components/Menu";
import Image from "next/image";
import Merli from "../../../public/merli_4.gif";
import { useState } from "react";

export default function HomePage() {
  const [menuVisible, setMenuVisibility] = useState(false);
  return (
    <main className="h-screen w-full flex flex-col bg-slate-100 text-black">
      <div className="relative">
        <a href="\profile" className="top-section left-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#900603"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </a>

        <div className="grid place-items-center h-48">
          <Image src={Merli} alt="Mascot" width={150} />
        </div>

        <div className="relative h-72">
          <h2 className="absolute left-4 -top-6 font-bold text-xl text-black">
            Recent Courses
          </h2>
          <div className="mx-4 my-1 flex flex-col w-fill">
            <CoursesCard names="Basic Singlish"></CoursesCard>
            <CoursesCard names="Intermediate Singlish"></CoursesCard>
            <CoursesCard names="Advanced Singlish"></CoursesCard>
          </div>
        </div>

        <div className="relative h-40 flex">
          <div className="absolute right-4 top-4 h-8 w-8 grid place-items-center">
            <a href="https://">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="rgb(175,175,175)"
                className="size-9"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>
          </div>

          <div className="mt-4 mx-4 pr-6 w-full grid grid-cols-3 place-items-center text-white">
            <div className="badge">Badges</div>
            <div className="badge">Badges</div>
            <div className="badge">Badges</div>
          </div>
        </div>

        <div className="notes-section relative h-40 flex flex-row">
          <h2 className="absolute left-4 top-2 text-white text-lg">My Notes</h2>

          <input
            className="absolute inset-4 top-10 bg-slate-100 rounded-2xl text-sm"
            type="text"
            name="notes"
            id="notes"
          />
        </div>

        <button
          className="top-section right-4"
          onClick={() => setMenuVisibility(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#900603"
            className="size-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        {menuVisible && <Menu onClose={() => setMenuVisibility(false)}></Menu>}
      </div>
    </main>
  );
}
