"use client";

import { useState } from "react";
import Menu from "@/app/components/Menu";
import Header from "@/app/components/Header";
const lessons = [
  {
    id: 1,
    title: "Course 1",
    description: "Summary",
  },
  {
    id: 2,
    title: "Course 2",
    description: "Summary",
  },
  {
    id: 3,
    title: "Course 3",
    description: "Summary",
  },
];

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [pageVisible, setPageVisibility] = useState(true);

  return (
    <main className="min-h-screen p-4 md:p-8 bg-background-light dark:bg-background-dark">
      {!pageVisible && <Menu onClose={() => setPageVisibility(true)}></Menu>}

      {pageVisible && (
        <Header
          title="Lessons"
          onClick={() => setPageVisibility(false)}
        ></Header>
      )}

      {pageVisible && (
        <div className="w-full max-w-4xl mx-auto flex flex-col text-text-light dark:text-text-dark">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search lessons..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
            />
          </div>

        <ul className="space-y-4">
          {filteredCourses.map(course => (
            <li key={course.id} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900">{course.title}</h2>
              <p className="mt-2 text-gray-600">{course.description}</p>
              
              <button
                className="mt-4 w-full py-2 px-4 bg-[#900603] text-white font-medium rounded-md hover:bg-[#700404] focus:outline-none focus:ring-2 focus:ring-[#900603] focus:ring-offset-2"
                onClick={() => alert(`Enrolled in ${course.title}`)}
              >
                Lesson
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
