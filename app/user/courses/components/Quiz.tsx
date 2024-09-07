"use client";
import PageHeader from "./PageHeader";
import { useState } from "react";

interface Prop {
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
  onClose: () => void;
}

const Quiz = ({ quiz, onClose }: Prop) => {
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
    <>
      {/* Header */}
      <PageHeader title={quiz.quizName} onClose={onClose}></PageHeader>

      <div className="w-full max-w-4xl mx-auto flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-center mb-8">Quiz Time!</h1>
        {!showResults ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            {quiz.quizQuestions.map((question) => (
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
              className="w-full py-2 px-4 bg-red text-white font-medium rounded-md hover:bg-darkRed focus:outline-none focus:ring-2 focus:ring-red focus:ring-offset-2"
            >
              Submit Quiz
            </button>
          </form>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Your Score: 0 / {quiz.quizQuestions.length}
            </h2>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 py-2 px-4 bg-red text-white font-medium rounded-md hover:bg-darkRed focus:outline-none focus:ring-2 focus:ring-red focus:ring-offset-2"
            >
              Retake Quiz
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Quiz;
