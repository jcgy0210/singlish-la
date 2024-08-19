"use client";
import CoursesCard from "../../components/CoursesCard";
import Menu from "../../components/Menu";
import Image from "next/image";
import Merli from "../../../public/merli_4.gif";
import { useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [menuVisible, setMenuVisibility] = useState(false);
  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-100 dark:bg-slate-900">
      {menuVisible && <Menu onClose={() => setMenuVisibility(false)}></Menu>}
      
      {!menuVisible &&
      // Header Section
      <header className="relative flex justify-between items-center mb-8 text-black">
        <Link href="\profile" className="top-section left-4">
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
        </Link>
        
        {/* Menu */}
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
      </header>}

      {!menuVisible &&
      // Body
      <div className="w-full max-w-4xl mx-auto h-screen text-black dark:text-gray-200">
        {/* Mascot */}
        <div className="grid place-items-center h-1/6">
          <Image src={Merli} alt="Mascot" width={150} />
        </div>

        {/* Recent Course Section */}
        <div className="relative h-1/3">
          <h2 className="ml-4 py-2 font-bold text-xl">
            Recent Courses
          </h2>

          <div className="flex flex-col w-fill h-full">
            <CoursesCard names="Basic Singlish"></CoursesCard>
            <CoursesCard names="Intermediate Singlish"></CoursesCard>
            <CoursesCard names="Advanced Singlish"></CoursesCard>
          </div>
        </div>

        {/* Achievement Section */}
        <div className="relative h-1/6 flex flex-col">
          <div className="absolute right-4 top-4 h-8 w-8 grid place-items-center">
            <Link href="https://">
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
            </Link>
          </div>

          <h2 className="ml-4 py-4 font-bold text-xl">
            Achievements
          </h2>

          <div className="w-full mt-6 flex items-center justify-evenly text-white">
            <div className="badge">Badges</div>
            <div className="badge">Badges</div>
            <div className="badge">Badges</div>
            <div className="badge">Badges</div>
            <div className="badge">Badges</div>
            <div className="badge">Badges</div>
          </div>
        </div>

        {/* Notes Section */}
        <div className="notes-section relative h-1/4 flex flex-row">
          <h2 className="absolute left-4 top-2 text-white text-lg">My Notes</h2>

          <input
            className="absolute inset-4 top-10 bg-slate-100 rounded-2xl text-sm"
            type="text"
            name="notes"
            id="notes"
          />
        </div>
      </div>}
    </main>
  );
}
