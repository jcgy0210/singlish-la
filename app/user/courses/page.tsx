"use client";

import { useState } from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";
import Course from "./components/Course";

import { fetchCourseByID } from "@/app/lib/data";

const courses = [
  {
    course_id: 1,
    title: "Course 1 - Expressions",
    description:
      "In this course you will learn about how to use the common expressions like Lah, Leh and Lorh.",
    lessons: [
      {
        title: "Lah",
        description: "A way to end a sentence.",
        meaning: "Used to bring a sense of exasperation.",
      },
      {
        title: "Leh",
        description: "A way to end a sentence.",
        meaning: "Used to demonstrate a tinge of uncertainty.",
      },
      {
        title: "Lorh",
        description: "A way to end a sentence.",
        meaning: "Used to signify a sense of resignation.",
      },
    ],

    quiz: [],
  },

  {
    course_id: 2,
    title: "Course 2 - Ways to call others",
    description:
      "In this course, you will learn what Singaporeans would call each race.",
    lessons: [
      {
        title: "Ang Moh",
        description:
          "This phrase is used by Singaporeans to call white people.",
        meaning: "Directly translates to red hair.",
      },

      {
        title: "China",
        description: "This word is used by Malays to call chinese people.",
        meaning: "It just means chinese, but is pronouced as chi ner.",
      },

      {
        title: "Zut",
        description:
          "This word is used by many Singaporeans to call out to their friends without shouting and is done so by making a fishy face and sucking in.",
        meaning: "It is an onomatopeia.",
      },
    ],

    quiz: [],
  },

  {
    course_id: 3,
    title: "Course 3 - Asking for directions",
    description:
      "Equip users with the ability to ask for directions in Singapore.",
    lessons: [
      {
        title: "How go?",
        description:
          "Old Chinese people are not fluent in English, hence, they would directly translate from Chinese certain phrases to English and this is one of them.",
        meaning: "How do I get to this place?",
      },

      {
        title: "This one where?",
        description:
          "This is another phrase that old Chinese people directly translated from Chinese to English",
        meaning: "Where is this?",
      },

      {
        title: "How u come?",
        description:
          "This is another phrase that old Chinese people directly translated but with a little English grammar rephrasing",
        meaning: "How did you get here?",
      },
    ],
    quiz: [],
  },
];

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  console.log(fetchCourseByID("1"));

  return (
    <main className="min-h-screen p-4 md:p-8 text-text-light dark:text-text-dark bg-background-light dark:bg-background-dark">
      {menuIsOpen && <Menu onClose={() => setMenuIsOpen(false)}></Menu>}

      {!menuIsOpen && (
        <>
          {/* Header */}
          <Header title="Courses" onClick={() => setMenuIsOpen(true)}></Header>

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
                  <Course
                    title={course.title}
                    description={course.description}
                    lessons={course.lessons}
                    openLesson={() => setMenuIsOpen(true)}
                    quiz="Quiz"
                    openQuiz={()=>setMenuIsOpen}
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
