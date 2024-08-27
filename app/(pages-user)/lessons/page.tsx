"use client";

import { useState } from "react";
import Image from "next/image";

const lessons = [
  {
    id: 1,
    title: "Lesson 1",
    description: "Summary",
  },
  {
    id: 2,
    title: "Lesson 2",
    description: "Summary",
  },
  {
    id: 3,
    title: "Lesson 3",
    description: "Summary",
  },
  // Add more lessons as needed
];

export default function LessonsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filteredLessons = lessons.filter(lesson =>
    lesson.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-100">
      <header className="flex justify-between items-center mb-8">
        <Image
          src="/SinglishLA.png" // Replace with your actual logo path
          alt="Logo"
          width={120}
          height={30}
          priority
        />
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-gray-700 hover:text-red-600 focus:outline-none"
          >
            Menu
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                Home
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                About
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
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
            placeholder="Search lessons..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
          />
        </div>

        <ul className="space-y-4">
          {filteredLessons.map(lesson => (
            <li key={lesson.id} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900">{lesson.title}</h2>
              <p className="mt-2 text-gray-600">{lesson.description}</p>
              
              <button
                className="mt-4 w-full py-2 px-4 bg-[#900603] text-white font-medium rounded-md hover:bg-[#700404] focus:outline-none focus:ring-2 focus:ring-[#900603] focus:ring-offset-2"
                onClick={() => alert(`Enrolled in ${lesson.title}`)}
              >
                Quiz
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}