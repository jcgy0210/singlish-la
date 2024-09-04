"use client";
import { useState } from "react";
import Quiz from "./Quiz";

interface Prop {
  title: string;
  description: string;
  lessonNames: string[];
  quizName: string;
  questionsAndOptions: {
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;
  }[];
  onLessonOpen: () => void;
  onQuizOpen: () => void;
}

const CourseCard = ({
  title,
  description,
  lessonNames,
  quizName,
  questionsAndOptions,
}: Prop) => {
  const [lessonAndQuizListVisible, setLessonsAndQuizListVisibility] =
    useState(false);

  const [lessonVisible, setLessonVisibility] = useState(false);

  const [quizVisible, setQuizVisibility] = useState(false);

  return (
    <>
      <div className="flex flex-row p-4 bg-background-light dark:bg-background-dark rounded-md">
        <div className="flex-grow flex flex-col gap-4">
          {/* Course title */}
          <h2 className="text-red">{title}</h2>

          {/* Description */}
          <p>{description}</p>
        </div>

        {!lessonAndQuizListVisible ? (
          <button
            className="w-10 place-self-center"
            onClick={() => setLessonsAndQuizListVisibility(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#900603"
              className="size-9"
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
            onClick={() => setLessonsAndQuizListVisibility(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#900603"
              className="size-6"
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

      {lessonAndQuizListVisible && (
        // Lessons and Quiz
        <ul>
          {lessonNames.map((lessonNames) => (
            <li>
              <button
                className="w-full p-4 my-2 gap-4 text-red dark:text-text-dark hover:text-white rounded-md border-2 border-red text-lg bg-background-light dark:bg-background-dark text-center hover:bg-red"
                onClick={() => setLessonVisibility(true)}
              >
                <h2>{lessonNames}</h2>
              </button>
            </li>
          ))}

          <li>
            <button
              className="w-full p-4 my-2 gap-4 text-red dark:text-text-dark hover:text-white rounded-md border-2 border-red text-lg bg-background-light dark:bg-background-dark text-center hover:bg-red"
              onClick={() => setLessonsAndQuizListVisibility(true)}
            >
              <h2>{quizName}</h2>
            </button>
          </li>
        </ul>
      )}

      {quizVisible && (
        <Quiz
          quizName={quizName}
          questionsAndOptions={questionsAndOptions}
          onClose={() => setQuizVisibility(false)}
        ></Quiz>
      )}
    </>
  );
};

export default CourseCard;
