"use client";

import { useState } from "react";
import Image from "next/image";
import Menu from "@/app/components/Menu";

const courses = [
  {
    id: 1,
    title: "Basic Singlish",
    description: "Learn the basics of Singlish.",
  },
  {
    id: 2,
    title: "Intermediate Singlish",
    description:
      "Expand your Singlish skills with advanced vocabulary and grammar.",
  },
  {
    id: 3,
    title: "Advanced Singlish",
    description: "Master Singlish with advanced topics and practice exercises.",
  },
  // Add more courses as needed
];

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuVisible, setMenuVisibility] = useState(false);

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-100">
      {menuVisible && <Menu onClose={() => setMenuVisibility(false)}></Menu>}

      {!menuVisible && (
        <>
          <header className="flex justify-between items-center mb-8">
            <a href="\login">
              <Image
                src="/SinglishLA.png"
                alt="Logo"
                width={120}
                height={30}
                priority
              />
            </a>

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
          </header>

          <div className="w-full max-w-4xl mx-auto">
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#900603] focus:border-transparent"
              />
            </div>

            <ul className="space-y-4">
              {filteredCourses.map((course) => (
                <li
                  key={course.id}
                  className="bg-white p-4 rounded-lg shadow-md"
                >
                  <h2 className="text-xl font-semibold text-gray-900">
                    {course.title}
                  </h2>
                  <p className="mt-2 text-gray-600">{course.description}</p>

                  {/* <Link href="/lessons/Lessons">
                                <button
                                    className="mt-4 w-full py-2 px-4 bg-[#900603] text-white font-medium rounded-md hover:bg-[#700404] focus:outline-none focus:ring-2 focus:ring-[#900603] focus:ring-offset-2"
                                    onClick={() => alert(`Enrolled in ${course.title}`)}
                                >
                                    Let's Learn Leh
                                </button>
                            </Link> */}

                  {/* <button
                                    className="mt-4 w-full py-2 px-4 bg-[#900603] text-white font-medium rounded-md hover:bg-[#700404] focus:outline-none focus:ring-2 focus:ring-[#900603] focus:ring-offset-2"
                                    onClick={() => alert(`Enrolled in ${course.title}`)}
                                >
                                    Let's Learn Leh
                                </button> */}

                  <a href="\lessons">
                    <button
                      className="mt-4 w-full py-2 px-4 bg-[#900603] text-white font-medium rounded-md hover:bg-[#700404] focus:outline-none focus:ring-2 focus:ring-[#900603] focus:ring-offset-2"
                      onClick={() => alert(`Enrolled in ${course.title}`)}
                    >
                      Let's Learn Leh
                    </button>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </main>
  );
}
