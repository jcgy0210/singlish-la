"use client";

import { useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";

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

  const delLesson = (courseId: number, lessonId: number) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === courseId
          ? {
              ...course,
              lessons: course.lessons.filter(
                (lesson) => lesson.id !== lessonId
              ),
            }
          : course
      )
    );
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

  const [pageVisible, setPageVisibility] = useState(true);
  return (
    <main className="min-h-screen p-4 md:p-8 text-text-light dark:text-text-dark bg-background-light dark:bg-background-dark">
      {!pageVisible && <Menu onClose={() => setPageVisibility(true)}></Menu>}

      {pageVisible && (
        <div>
          <Header
            title="Dashboard"
            onClick={() => setPageVisibility(false)}
          ></Header>
          
          <div className="max-w-4xl mx-auto flex flex-col gap-4 p-4">
            {/* Add New Course Section */}
            <div className="flex flex-col gap-4 p-4 border bg-background-light dark:bg-background-dark rounded-lg shadow">
              <h2 className="text-red dark:text-white">Add New Course</h2>

              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="New Course Name"
                  value={newCourseName}
                  onChange={(e) => setNewCourseName(e.target.value)}
                  className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
                />
                <button
                  onClick={addCourse}
                  className="continue p-2 w-10 bg-red text-white rounded-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Edit Courses Section */}
            <div className="flex flex-col gap-4 p-4 border bg-background-light dark:bg-background-dark rounded-lg shadow">
              <h2 className="text-red dark:text-white">Edit Courses</h2>

              {/* Select Course */}
              <select
                value={selectedCourseId || ""}
                onChange={(e) => setSelectedCourseId(parseInt(e.target.value))}
                className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
              >
                <option value="" disabled>
                  Select a course to edit
                </option>
                {courses.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.name}
                  </option>
                ))}
              </select>

              {courses.map(
                (course) =>
                  course.id === selectedCourseId && (
                    <div key={course.id}>
                      {/* Edit Course Name */}
                      <div className="flex items-center space-x-4 mb-2">
                        <input
                          type="text"
                          value={course.name}
                          onChange={(e) =>
                            handleCourseNameChange(course.id, e.target.value)
                          }
                          className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
                        />
                      </div>

                      {/* Edit Lessons */}
                      <div className="flex flex-col gap-4 my-4">
                        {course.lessons.map((lesson) => (
                          <div
                            key={lesson.id}
                            className="flex items-center space-x-4"
                          >
                            {/* Edit LessonName */}
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
                              className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
                            />

                            {/* Delete Lesson */}
                            <button
                              onClick={() => delLesson(course.id, lesson.id)}
                              className="continue p-2 w-10 bg-red text-white rounded-lg"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-6"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Add Lesson*/}
                      <button
                        onClick={addLesson}
                        className="continue flex-grow p-2 bg-red text-white font-medium rounded-md"
                      >
                        Add Lesson
                      </button>
                    </div>
                  )
              )}
            </div>

            {/* Add Quiz */}
            <div className="flex flex-col gap-4 p-4 border bg-background-light dark:bg-background-dark rounded-lg shadow">
              <h2 className="text-red dark:text-white">Add New Quiz</h2>
              <select
                value={selectedCourseId}
                onChange={(e) => setSelectedCourseId(parseInt(e.target.value))}
                className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
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
                className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
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
                className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
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
                  className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
                />
              ))}

              <input
                type="text"
                placeholder="Correct Answer"
                value={newQuizCorrectAnswer}
                onChange={(e) => setNewQuizCorrectAnswer(e.target.value)}
                className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
              />

              <button
                onClick={addQuiz}
                className="continue flex-grow p-2 bg-red text-white font-medium rounded-md"
              >
                Add Quiz
              </button>

              <button
                onClick={saveCourseNameChange}
                className="continue flex-grow p-2 bg-red text-white font-medium rounded-md"
              >
                SAVE CHANGES
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
