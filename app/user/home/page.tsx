"use client";
import RecentCourse from "./components/RecentCourse";
import Menu from "../components/Menu";
import Image from "next/image";
import Merli from "../../../public/merli_4.gif";
import { useState } from "react";
import AchievementSection from "./components/AchievementSection";
import Header from "../components/Header";

export default function HomePage() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <main className="min-h-screen p-4 md:p-8 bg-background-light dark:bg-background-dark">
      {menuIsOpen && <Menu onClose={() => setMenuIsOpen(false)}></Menu>}

      {!menuIsOpen && (
        <>
          <Header title="Home" onClick={() => setMenuIsOpen(true)}></Header>

          {/* Body */}
          <div className="w-full max-w-4xl mx-auto flex flex-col gap-4 text-text-light dark:text-text-dark">
            {/* Mascot */}
            <div className="grid place-items-center ">
              <Image src={Merli} alt="Mascot" width={150} />
            </div>

            {/* Recent Course Section */}
            <div className="flex flex-col p-4 gap-4 border-2 border-red rounded-2xl">
              <h2>Recent Courses</h2>

              <RecentCourse names="Basic Singlish"></RecentCourse>
            </div>

            {/* Achievement Section */}
            <AchievementSection></AchievementSection>

            {/* Notes Section */}
            <div className="flex flex-col p-4 gap-4 border-2 border-red bg-red rounded-2xl">
              <div className="flex flex-row">
                <h2 className="flex-grow text-white">My Notes</h2>

                <button className="w-10 place-self-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="rgb(175,175,175)"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </div>

              <div className="bg-white rounded-2xl text-sm h-80 p-4">
                <input
                  className="w-full focus:outline-none text-xl"
                  type="text"
                  name="notes"
                  id="notes"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
