"use client";
import { useState } from "react";

interface Prop {
  title: string;
  description: string;
  lessons: {
    id: number;
    title: string;
    description: string;
    meaning: string;
  }[];
  openLesson: (lessonTitle: number) => void;
  quiz: {
    id: number;
    quizName: string;
    quizQuestions: {
      id: number;
      question: string;
      options: string[];
      correctAnswer: string;
    }[];
  };
  openQuiz: (quizid: number) => void;
}

const Course = ({
  title,
  description,
  lessons,
  openLesson,
  quiz,
  openQuiz,
}: Prop) => {
  const [listVisible, setListVisibility] = useState(false);
  return (
    <>
      <div className="flex flex-row gap-2 p-4 bg-background-light dark:bg-background-dark text-red dark:text-background-light rounded-md">
        <div className="flex-grow flex flex-col gap-4">
          {/* Course title */}
          <h2 className="">{title}</h2>

          {/* Description */}
          <p>{description}</p>
        </div>

        {!listVisible ? (
          <button
            className="w-10 place-self-center"
            onClick={() => setListVisibility(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#900603"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        ) : (
          <button
            className="w-10 place-self-center"
            onClick={() => setListVisibility(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#900603"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          </button>
        )}
      </div>

      {listVisible && (
        <ul className="text-center text-red dark:text-text-dark">
          {lessons.map((lessons) => (
            <li key={lessons.id}>
              <button
                className="w-full p-2 my-2 border-2 border-red hover:bg-red hover:text-text-dark rounded-xl"
                onClick={() => openLesson(lessons.id)}
              >
                <h4>{lessons.title}</h4>
              </button>
            </li>
          ))}

          <li>
            <button
              className="w-full p-2 my-2 border-2 border-red hover:bg-red hover:text-text-dark rounded-xl"
              onClick={() => openQuiz(quiz.id)}
            >
              <h4>{quiz.quizName}</h4>
            </button>
          </li>
        </ul>
      )}
    </>
  );
};

export default Course;
