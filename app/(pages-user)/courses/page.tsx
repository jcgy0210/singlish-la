"use client";

import { useState } from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";
import CourseCard from "./components/CourseCard";
import Quiz from "./components/Quiz";

const courses = [
  {
    title: "Basic Singlish",
    description: "Learn the basics of Singlish.",
    lessonNames: ["Lesson 1", "Lesson 2", "Lesson 3"],
    quiz: {
      quizName: "Quiz",
      quizQuestions: [
        {
          id: 1,
          question: "What is the capital of France?",
          options: ["Berlin", "Madrid", "Paris", "Rome"],
          correctAnswer: "Paris",
        },
        {
          id: 2,
          question: "Which planet is known as the Red Planet?",
          options: ["Earth", "Mars", "Jupiter", "Saturn"],
          correctAnswer: "Mars",
        },
        {
          id: 3,
          question: "What is the largest ocean on Earth?",
          options: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Arctic Ocean",
            "Pacific Ocean",
          ],
          correctAnswer: "Pacific Ocean",
        },
      ],
    },
  },

  {
    title: "Intermediate Singlish",
    description:
      "Expand your Singlish skills with advanced vocabulary and grammar.",
    lessonNames: ["Lesson 1", "Lesson 2", "Lesson 3"],
    quiz: {
      quizName: "Quiz",
      quizQuestions: [
        {
          id: 1,
          question: "What is the capital of France?",
          options: ["Berlin", "Madrid", "Paris", "Rome"],
          correctAnswer: "Paris",
        },
        {
          id: 2,
          question: "Which planet is known as the Red Planet?",
          options: ["Earth", "Mars", "Jupiter", "Saturn"],
          correctAnswer: "Mars",
        },
        {
          id: 3,
          question: "What is the largest ocean on Earth?",
          options: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Arctic Ocean",
            "Pacific Ocean",
          ],
          correctAnswer: "Pacific Ocean",
        },
      ],
    },
  },

  {
    title: "Advanced Singlish",
    description: "Master Singlish with advanced topics and practice exercises.",
    lessonNames: ["Lesson 1", "Lesson 2", "Lesson 3"],
    quiz: {
      quizName: "Quiz",
      quizQuestions: [
        {
          id: 1,
          question: "What is the capital of France?",
          options: ["Berlin", "Madrid", "Paris", "Rome"],
          correctAnswer: "Paris",
        },
        {
          id: 2,
          question: "Which planet is known as the Red Planet?",
          options: ["Earth", "Mars", "Jupiter", "Saturn"],
          correctAnswer: "Mars",
        },
        {
          id: 3,
          question: "What is the largest ocean on Earth?",
          options: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Arctic Ocean",
            "Pacific Ocean",
          ],
          correctAnswer: "Pacific Ocean",
        },
      ],
    },
  },
  // Add more courses as needed
];

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [pageVisible, setPageVisibility] = useState(true);
  const [quizVisible, setQuizVisibility] = useState(false);
  const [lessonVisible, setLessonVisibility] = useState(false);

  return (
    <main className="min-h-screen p-4 md:p-8 text-text-light dark:text-text-dark bg-background-light dark:bg-background-dark">
      {!pageVisible && <Menu onClose={() => setPageVisibility(true)}></Menu>}

      {!pageVisible && quizVisible && courses.map((course) => (
        <Quiz
          quizName={course.quiz.quizName}
          questionsAndOptions={course.quiz.quizQuestions}
          onClose={() => setPageVisibility(true)}
        ></Quiz>
      ))}
      

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
                  <CourseCard
                    title={course.title}
                    description={course.description}
                    lessonNames={course.lessonNames}
                    quizName={course.quiz.quizName}
                    questionsAndOptions={course.quiz.quizQuestions}
                    onLessonOpen={() => setLessonVisibility(true)}
                    onQuizOpen={() => setQuizVisibility(true)}
                  ></CourseCard>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </main>
  );
}
