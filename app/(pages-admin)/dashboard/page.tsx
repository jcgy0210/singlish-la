"use client";

import { useState } from "react";
import Image from "next/image";
import Menu from "@/app/components/Menu";

type Lesson = {
  id: number;
  name: string;
  quizzes: Quiz[];
};

type Course = {
  id: number;
  name: string;
  lessons: Lesson[];
};

type Quiz = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
};

const initialCourses: Course[] = [
  {
    id: 1,
    name: "Course 1",
    lessons: [
      { id: 1, name: "Lesson 1", quizzes: [] },
      { id: 2, name: "Lesson 2", quizzes: [] },
    ],
  },
  {
    id: 2,
    name: "Course 2",
    lessons: [
      { id: 3, name: "Lesson 3", quizzes: [] },
      { id: 4, name: "Lesson 4", quizzes: [] },
    ],
  },
  // Add more courses as needed
];

export default function AdminPage() {
  const [courses, setCourses] = useState<Course[]>(initialCourses);
  const [newCourseName, setNewCourseName] = useState<string>("");
  const [newLessonName, setNewLessonName] = useState<string>("");
  const [newQuizQuestion, setNewQuizQuestion] = useState<string>("");
  const [newQuizOptions, setNewQuizOptions] = useState<string[]>([
    "",
    "",
    "",
    "",
  ]);
  const [newQuizCorrectAnswer, setNewQuizCorrectAnswer] = useState<string>("");
  const [selectedCourseId, setSelectedCourseId] = useState<number>(
    courses[0].id
  );
  const [selectedLessonId, setSelectedLessonId] = useState<number>(
    courses[0].lessons[0].id
  );

  const handleCourseNameChange = (id: number, newName: string) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === id ? { ...course, name: newName } : course
      )
    );
  };

  const handleLessonNameChange = (
    courseId: number,
    lessonId: number,
    newName: string
  ) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === courseId
          ? {
              ...course,
              lessons: course.lessons.map((lesson) =>
                lesson.id === lessonId ? { ...lesson, name: newName } : lesson
              ),
            }
          : course
      )
    );
  };

  const saveCourseNameChange = () => {
    // Function to save changes, can add API call or other logic
    alert("Course name changes saved!");
  };

  const saveLessonNameChange = () => {
    // Function to save changes, can add API call or other logic
    alert("Lesson name changes saved!");
  };

  const addCourse = () => {
    const newCourse: Course = {
      id: courses.length + 1,
      name: newCourseName,
      lessons: [],
    };
    setCourses([...courses, newCourse]);
    setNewCourseName("");
  };

  const addLesson = () => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === selectedCourseId
          ? {
              ...course,
              lessons: [
                ...course.lessons,
                {
                  id: course.lessons.length + 1,
                  name: newLessonName,
                  quizzes: [],
                },
              ],
            }
          : course
      )
    );
    setNewLessonName("");
  };

  const addQuiz = () => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === selectedCourseId
          ? {
              ...course,
              lessons: course.lessons.map((lesson) =>
                lesson.id === selectedLessonId
                  ? {
                      ...lesson,
                      quizzes: [
                        {
                          id: lesson.quizzes.length + 1,
                          question: newQuizQuestion,
                          options: newQuizOptions,
                          correctAnswer: newQuizCorrectAnswer,
                        },
                      ],
                    }
                  : lesson
              ),
            }
          : course
      )
    );
    setNewQuizQuestion("");
    setNewQuizOptions(["", "", "", ""]);
    setNewQuizCorrectAnswer("");
  };

  const [menuVisible, setMenuVisibility] = useState(false);

  return (
    <main className="min-h-screen p-4 md:p-8 bg-background-light dark:bg-background-dark">
      {menuVisible && <Menu onClose={() => setMenuVisibility(false)}></Menu>}

      {!menuVisible && (
        // Menu
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
      )}

      {!menuVisible && (
        <div className="max-w-4xl mx-auto text-text-light dark:text-text-dark">
          <h1 className="text-3xl font-bold text-center mb-8">
            Admin Dashboard
          </h1>

          {/* Edit Courses Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Edit Courses</h2>

            {courses.map((course) => (
              <div
                key={course.id}
                className="mb-4 p-4 border bg-white rounded-lg shadow"
              >
                <div className="flex items-center space-x-4 mb-2">
                  <input
                    type="text"
                    value={course.name}
                    onChange={(e) =>
                      handleCourseNameChange(course.id, e.target.value)
                    }
                    className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  />
                </div>

                <div className="ml-6">
                  {course.lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className="mt-2 flex items-center space-x-4"
                    >
                      <input
                        type="text"
                        value={lesson.name}
                        onChange={(e) =>
                          handleLessonNameChange(
                            course.id,
                            lesson.id,
                            e.target.value
                          )
                        }
                        className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Add New Course Section */}
          <div className="mb-8 p-4 border bg-white rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Add New Course</h2>

            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="New Course Name"
                value={newCourseName}
                onChange={(e) => setNewCourseName(e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
            </div>
          </div>

          {/* Add New Lesson Section */}
          <div className="mb-8 p-4 border bg-white rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Add New Lesson</h2>

            <select
              value={selectedCourseId}
              onChange={(e) => setSelectedCourseId(parseInt(e.target.value))}
              className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
            >
              {courses.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.name}
                </option>
              ))}
            </select>

            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="New Lesson Name"
                value={newLessonName}
                onChange={(e) => setNewLessonName(e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
            </div>
          </div>

          {/* Add New Quiz Section */} 
          <div className="mb-8 p-4 border bg-white rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Add New Quiz</h2>

            <select
              value={selectedCourseId}
              onChange={(e) => setSelectedCourseId(parseInt(e.target.value))}
              className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
            >
              {courses.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.name}
                </option>
              ))}
            </select>

            <select
              value={selectedLessonId}
              onChange={(e) => setSelectedLessonId(parseInt(e.target.value))}
              className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
            >
              {courses
                .find((course) => course.id === selectedCourseId)
                ?.lessons.map((lesson) => (
                  <option key={lesson.id} value={lesson.id}>
                    {lesson.name}
                  </option>
                ))}
            </select>

            <input
              type="text"
              placeholder="Quiz Question"
              value={newQuizQuestion}
              onChange={(e) => setNewQuizQuestion(e.target.value)}
              className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
            />
            {newQuizOptions.map((option, index) => (
              <input
                key={index}
                type="text"
                placeholder={`Option ${index + 1}`}
                value={option}
                onChange={(e) => {
                  const updatedOptions = [...newQuizOptions];
                  updatedOptions[index] = e.target.value;
                  setNewQuizOptions(updatedOptions);
                }}
                className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
            ))}

            <input
              type="text"
              placeholder="Correct Answer"
              value={newQuizCorrectAnswer}
              onChange={(e) => setNewQuizCorrectAnswer(e.target.value)}
              className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
            />

            <button
              onClick={addQuiz}
              className="w-full py-2 bg-red text-white font-medium rounded-md hover:bg-[#700404] focus:outline-none"
            >
              Add Quiz
            </button>
          </div>

          <button className="bg-red text-white rounded-2xl p-4">
            Save Changes
          </button>
        </div>
      )}
    </main>
  );
}
