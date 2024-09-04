"use client";

import { useState } from "react";
import Image from "next/image";
import Menu from "@/app/user/components/Menu";

const quizQuestions = [
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
];

export default function QuizPage() {
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (questionId: number, answer: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const score = quizQuestions.reduce((acc, question) => {
    if (selectedAnswers[question.id] === question.correctAnswer) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const [menuVisible, setMenuVisibility] = useState(false);

  return (
    <main className="min-h-screen p-4 md:p-8 bg-background-light dark:bg-background-dark">
      {menuVisible && <Menu onClose={() => setMenuVisibility(false)}></Menu>}

      {!menuVisible && (
        <header className="flex justify-between items-center mb-8">
          <Image
            src="/SinglishLA.png" // Replace with your actual logo path
            alt="Logo"
            width={120}
            height={30}
            priority
          />

          {/* Menu */}
          <button
            className="absolute top-4 right-4 w-16"
            onClick={() => setMenuVisibility(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#900603"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </header>
      )}

      {!menuVisible && (
        <div className="max-w-2xl mx-auto text-text-light dark:text-text-dark">
          <h1 className="text-3xl font-bold text-center mb-8">Quiz Time!</h1>
          {!showResults ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              {quizQuestions.map((question) => (
                <div key={question.id} className="mb-6">
                  <h2 className="text-xl font-semibold mb-2">
                    {question.question}
                  </h2>
                  <div>
                    {question.options.map((option) => (
                      <label
                        key={option}
                        className={`block p-2 border rounded-md mb-2 cursor-pointer ${
                          selectedAnswers[question.id] === option
                            ? "bg-red text-white"
                            : "bg-white text-gray-700"
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value={option}
                          checked={selectedAnswers[question.id] === option}
                          onChange={() =>
                            handleAnswerSelect(question.id, option)
                          }
                          className="hidden"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
              <button
                type="submit"
                className="w-full py-2 px-4 bg-red text-white font-medium rounded-md hover:bg-[#700404] focus:outline-none focus:ring-2 focus:ring-[#900603] focus:ring-offset-2"
              >
                Submit Quiz
              </button>
            </form>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">
                Your Score: {score} / {quizQuestions.length}
              </h2>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 py-2 px-4 bg-red text-white font-medium rounded-md hover:bg-[#700404] focus:outline-none focus:ring-2 focus:ring-[#900603] focus:ring-offset-2"
              >
                Retake Quiz
              </button>
            </div>
          )}
        </div>
      )}
    </main>
  );
}
