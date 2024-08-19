"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-100 dark:bg-slate-900">
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

        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-gray-700 hover:text-[#900603] focus:outline-none"
          >
            Menu
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
              <a
                href="\log-in"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                Home
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                About
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                Contact
              </a>
            </div>
          )}
        </div>
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
            <li key={course.id} className="bg-white p-4 rounded-lg shadow-md">
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
    </main>
  );
}
