"use client";

import { useState } from "react";

interface Prop {
  quizName: string;
  questionsAndOptions: {
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;
  }[];
  onClose: () => void;
}

export default function QuizPage({ quizName, questionsAndOptions, onClose }: Prop) {
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

  return (
    <main className="min-h-screen p-4 md:p-8 bg-background-light dark:bg-background-dark">
      <header className="flex flex-row p-8">
        <button className="" onClick={onClose}>
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
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <div className="flex-grow grid place-content-center">
          <h1 className="text-red dark:text-text-dark">{quizName}</h1>
        </div>
      </header>

      <div className="max-w-2xl mx-auto text-text-light dark:text-text-dark">
        <h1 className="text-3xl font-bold text-center mb-8">Quiz Time!</h1>
        {!showResults ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            {questionsAndOptions.map((question) => (
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
                        onChange={() => handleAnswerSelect(question.id, option)}
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
              Your Score: 0 / {questionsAndOptions.length}
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
    </main>
  );
}
