"use client";

import { useState } from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";
import Course from "./components/Course";
// import Quiz from "./components/Quiz";

import { fetchAcheivementByID, fetchCourseByID } from "@/app/lib/data";

const courses = [
  {
    course_id: "1",
    title: "Course 1 - Hello",
    description:
      "Teach users how to engage in casual converstations with Singaporeans of different cultural backgrounds.",
  },

  {
    course_id: "2",
    title: "Course 2 - Makan-Makan",
    description:
      "Familiarise users with common Singlish expressions and vocabularies used when dining at a hawker centre.",
  },

  {
    course_id: "3",
    title: "Course 3 - Bojio!",
    description:
      "Equip users with the ability to ask for directions and recommendations for places to visit in Singapore.",
  },
];

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [pageVisible, setPageVisibility] = useState(true);
  
  console.log(fetchAcheivementByID("1"))

  return (
    <main className="min-h-screen p-4 md:p-8 text-text-light dark:text-text-dark bg-background-light dark:bg-background-dark">
      {!pageVisible && <Menu onClose={() => setPageVisibility(true)}></Menu>}

      {/* {!pageVisible &&
        quizVisible &&
        courses.map((course) => (
          // <Quiz
          //   quizName={course.quiz.quizName}
          //   questionsAndOptions={course.quiz.quizQuestions}
          //   onClose={() => setPageVisibility(true)}
          // ></Quiz>
        ))} */}

      {pageVisible && (
        <>
          {/* Header */}
          <Header
            title="Courses"
            onClick={() => setPageVisibility(false)}
          ></Header>

          <div className="w-full max-w-4xl mx-auto flex flex-col gap-4">
            {/* Search */}
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
            />

            {/* Courses */}
            <ul className="flex flex-col gap-4">
              {filteredCourses.map((course) => (
                <li
                  key={course.title}
                  className="flex flex-col gap-2 bg-background-light dark:bg-background-dark dark:text-white p-4 rounded-lg shadow-md border-2 border-red"
                >
                  <Course course_id={course.course_id} title={course.title} description={course.description}
                  ></Course>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </main>
  );
}
