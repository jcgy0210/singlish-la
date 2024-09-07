"use client";

import { useState, useEffect, ReactNode, DOMElement } from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";
import Course from "./components/Course";
import Lesson from "./components/Lesson";
import Quiz from "./components/Quiz";

const courses = [
  {
    course_id: 1,
    title: "Course 1 - Expressions",
    description:
      "In this course you will learn about how to use the common expressions like Lah, Leh and Lorh.",

    lessons: [
      {
        id: 1,
        title: "Lah",
        description: "This word is used when you are annoyed or angry.",
        meaning: "Used to bring a sense of exasperation.",
        example: "When something goes bad and it is your friend's fault, you would say 'You Lah! Because of you we lost!' or 'Jason Lah! He never do his part, thats why we fail' or when you are annoyed, you can say 'Shuddup Lah!' or 'Stop It Lah!'"
      },

      {
        id: 2,
        title: "Leh",
        description: "This word is used when you are curious.",
        meaning: "Used to demonstrate a tinge of curiosity.",
        example: "Person 1: 'What are you working as?' Person 2: 'I am currently studying. You Leh?' or when your friend has not arrived, you ask 'Jovan Leh?' or when you want to ask about your team's progress 'Jovan Leh?'"
      },

      {
        id: 3,
        title: "Lorh",
        description: "This word is used when you just want to finish the conversation.",
        meaning: "Used to signify a sense of resignation.",
        example: "When people ask if you would like to eat, you can reply with 'Can Lorh' or 'Cannot Lorh'. When people ask you what you want to eat, 'Macdonalds Lorh' or 'Chicken rice lorh'. When people ask you how you are, 'OK lorh' or 'good lorh'"
      },
    ],

    quiz: {
      id: 1,
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
    course_id: 2,
    title: "Course 2 - Ways to call others",
    description:
      "In this course, you will learn what Singaporeans would call each race.",

    lessons: [
      {
        id: 4,
        title: "Ang Moh",
        description:
          "This phrase is used by Singaporeans to call white people.",
        meaning: "Directly translates to red hair.",
        example: ""
      },

      {
        id: 5,
        title: "China",
        description: "This word is used by Malays to call chinese people.",
        meaning: "It just means chinese, but is pronouced as chi ner.",
        example: ""
      },

      {
        id: 6,
        title: "Zut",
        description:
          "This word is used by many Singaporeans to call out to their friends without shouting and is done so by making a fishy face and sucking in.",
        meaning: "It is an onomatopeia.",
        example: ""
      },
    ],

    quiz: {
      id: 2,
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
    course_id: 3,
    title: "Course 3 - Asking for directions",
    description:
      "Equip users with the ability to ask for directions in Singapore.",

    lessons: [
      {
        id: 7,
        title: "How go?",
        description:
          "Old Chinese people are not fluent in English, hence, they would directly translate from Chinese certain phrases to English and this is one of them.",
        meaning: "How do I get to this place?",
        example: ""
      },

      {
        id: 8,
        title: "This one where?",
        description:
          "This is another phrase that old Chinese people directly translated from Chinese to English",
        meaning: "Where is this?",
        example: ""
      },

      {
        id: 9,
        title: "How u come?",
        description:
          "This is another phrase that old Chinese people directly translated but with a little English grammar rephrasing",
        meaning: "How did you get here?",
        example: ""
      },
    ],

    quiz: {
      id: 3,
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
];

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [lessonPageIsOpen, setLessonPageIsOpen] = useState(0);
  const [quizPageIsOpen, setQuizPageIsOpen] = useState(0);

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const lessons = filteredCourses.flatMap((course) => course.lessons);

  const quizzes = filteredCourses.flatMap((course) => course.quiz);

  return (
    <main className="min-h-screen p-4 md:p-8 text-text-light dark:text-text-dark bg-background-light dark:bg-background-dark">
      {menuIsOpen && <Menu onClose={() => setMenuIsOpen(false)}></Menu>}

      {lessons.map((lesson) => {
        if (lessonPageIsOpen === lesson.id) {
          return (
            <>
              <Lesson
                key={lesson.id}
                lesson={lesson}
                onClose={() => setLessonPageIsOpen(0)}
              ></Lesson>
            </>
          );
        }
      })}

      {quizzes.map((quiz) => {
        if (quizPageIsOpen === quiz.id) {
          return (
            <>
              <Quiz
                key={quiz.id}
                quiz={quiz}
                onClose={() => setQuizPageIsOpen(0)}
              ></Quiz>
            </>
          );
        }
      })}

      {!menuIsOpen && lessonPageIsOpen == 0 && quizPageIsOpen == 0 && (
        <>
          {/* Header */}
          <Header title="Courses" onClick={() => setMenuIsOpen(true)}></Header>

          <div className="w-full max-w-4xl mx-auto flex flex-col gap-4">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-4 focus:ring-red focus:border-transparent"
            />

            <ul className="flex flex-col gap-4">
              {filteredCourses.map((course) => (
                <li
                  key={course.course_id} // Use course_id as key
                  className="flex flex-col gap-2 bg-background-light dark:bg-background-dark dark:text-white p-4 rounded-lg shadow-md border-4 border-red"
                >
                  <Course
                    title={course.title}
                    description={course.description}
                    lessons={course.lessons}
                    openLesson={(lessonid: number) =>
                      setLessonPageIsOpen(lessonid)
                    }
                    quiz={course.quiz}
                    openQuiz={(quizid: number) => setQuizPageIsOpen(quizid)}
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
