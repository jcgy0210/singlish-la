"use client";

import { useState } from "react";
import Image from "next/image";
import Menu from "@/app/components/Menu";
import Header from "@/app/components/Header";
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

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [pageVisible, setPageVisibility] = useState(true);

  return (
    <main className="min-h-screen p-4 md:p-8 text-text-light dark:text-text-dark bg-background-light dark:bg-background-dark">
      {!pageVisible && <Menu onClose={() => setPageVisibility(true)}></Menu>}

      {pageVisible && (
        <Header
          title="Courses"
          onClick={() => setPageVisibility(false)}
        ></Header>
      )}

      {pageVisible && (
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-4">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
          />

          <ul className="flex flex-col gap-4">
            {filteredCourses.map((course) => (
              <li
                key={course.id}
                className="flex flex-col gap-2 bg-background-light dark:bg-red dark:text-white p-4 rounded-lg shadow-md"
              >
                {/* Course title */}
                <h2 className="text-red">{course.title}</h2>

                {/* Description */}
                <p>{course.description}</p>

                <Link href="\lessons">
                  <button
                    className="effect mt-4 w-full py-2 px-4 bg-red text-white font-medium rounded-md"
                    onClick={() => alert(`Enrolled in ${course.title}`)}
                  >
                    Let's Learn Leh
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
