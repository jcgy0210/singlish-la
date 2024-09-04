"use client";
import Link from "next/link";
import { useState } from "react";
import Header from "@/app/(pages-user)/components/Header";
import Menu from "@/app/(pages-user)/components/Menu";

export default function ProfilePage() {
  const [pageVisible, setPageVisibility] = useState(true);

  return (
    <main className="min-h-screen p-4 md:p-8 text-text-light dark:text-text-dark bg-background-light dark:bg-background-dark">
      {!pageVisible && <Menu onClose={() => setPageVisibility(true)}></Menu>}

      {pageVisible && (
        <Header
          title="Profile"
          onClick={() => setPageVisibility(false)}
        ></Header>
      )}

      {pageVisible && (
        // Body
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-8">
          {/* Profile Pic/Bio Section */}
          <div className="flex flex-col gap-4 p-4 place-items-center">
            <div className="w-36">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#900603"
                className="size-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>

            <h4>Name</h4>
          </div>

          {/* Progress Section */}
          <div className="flex flex-row p-4 border-2 border-red rounded-full shadow-xl">
            <h4 className="flex-grow">Progress:</h4>
            <h4> 100/420</h4>
          </div>

          {/* Achievements Section */}
          <div className="flex flex-col border-2 border-red rounded-2xl">
            <div className="flex flex-row p-4 bg-red rounded-t-xl">
              <h2 className="flex-grow text-center ml-10">Achievements</h2>

              <div className="w-10">
                <Link href="https://">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="rgb(175,175,175)"
                    className="size-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="m-4 p-4 w-fill grid grid-cols-4 grid-rows-4 gap-y-10 gap-x-4 place-items-center text-white">
              <div className="badge">Badges</div>
              <div className="badge">Badges</div>
              <div className="badge">Badges</div>
              <div className="badge">Badges</div>
              <div className="badge">Badges</div>
              <div className="badge">Badges</div>
              <div className="badge">Badges</div>
              <div className="badge">Badges</div>
              <div className="badge">Badges</div>
              <div className="badge">Badges</div>
              <div className="badge">Badges</div>
              <div className="badge">Badges</div>
              <div className="badge">Badges</div>
              <div className="badge">Badges</div>
              <div className="badge">Badges</div>
              <div className="badge">Badges</div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
