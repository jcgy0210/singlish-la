"use client";

import { useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { CourseState, createCourse, createLesson, createQuiz, deleteCourse, deleteLesson, deleteQuiz, LessonState, QuizState, updateCourse, updateLesson, updateQuiz } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import { Courses } from "@/app/lib/definitions";

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

export default function AdminPage(
  {
    course
  }: {
    course: Courses;
  }
) {
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

  const courseState: CourseState = {message: null, errors: {}};
  const [updateCourseState, updateCourseAction] = useFormState(updateCourse, courseState);
  const [createCourseState, createCourseAction] = useFormState(createCourse, courseState);
  const [deleteCourseState, deleteCourseAction] = useFormState(deleteCourse, courseState);

  const quizState: QuizState = {message: null, errors: {}};
  const [updateQuizState, updateQuizAction] = useFormState(updateQuiz, quizState);
  const [createQuizState, createQuizAction] = useFormState(createQuiz, quizState);
  const [deleteQuizState, deleteQuizAction] = useFormState(deleteQuiz, quizState);


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
            <form action={createCourseAction}>
            <div className="flex flex-col gap-4 p-4 border bg-background-light dark:bg-background-dark rounded-lg shadow">
              <h2 className="text-red dark:text-white">Add New Course</h2>

              <div className="flex items-center space-x-4">
                <div>
                <label htmlFor="course" className="sr-only">
                  Course Id
                </label>
                <input
                  id="course_id"
                  name="course_id"
                  type="text"
                  placeholder="course id"
                  className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
                />
                </div>
                <div>
                <label htmlFor="title" className="sr-only">
                  Course Title
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="course title"
                  className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
                />
                </div>
                <div>
                <label htmlFor="description" className="sr-only">
                  Course Description
                </label>
                <input
                  id="description"
                  name="description"
                  type="text"
                  placeholder="description"
                  className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
                />
                </div>
                <button
                  type="submit"
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
            </form>

            {/* Edit Courses Section */}
            <form action={updateCourseAction}>
            <div className="flex flex-col gap-4 p-4 border bg-background-light dark:bg-background-dark rounded-lg shadow">
              <h2 className="text-red dark:text-white">Edit Courses</h2>

              {/* Select Course */}
              <label htmlFor="course_id" className="sr-only">
                  Course Id
                </label>
              <input
                id="course_id"
                name="course_id"
                placeholder = "1"
                className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
              >
              </input>
              <label htmlFor="course title" className="sr-only">
                  Course Title
                </label>
              <input
                id="title"
                name="title"
                placeholder = "title"
                className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
              >
              </input>
              <label htmlFor="description" className="sr-only">
                  Course Description
                </label>
              <input
                id="description"
                name="description"
                placeholder = "description"
                className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
              >
              </input>
              <button type="submit" className="continue flex-grow p-2 bg-red text-white font-medium rounded-md">Save Course</button>
            </div>
            
            </form>
            {/* Delete Courses Section */}
            <form action={deleteCourseAction}>
            <div className="flex flex-col gap-4 p-4 border bg-background-light dark:bg-background-dark rounded-lg shadow">
              <h2 className="text-red dark:text-white">Delete Courses</h2>

              {/* Select Course */}
              <label htmlFor="course_id" className="sr-only">
                  Course Id
                </label>
              <input
                id="course_id"
                name="course_id"
                placeholder = "course_id"
                className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
              >
              </input>
              <button type="submit" className="continue flex-grow p-2 bg-red text-white font-medium rounded-md">Delete Course</button>
            </div>
            </form>

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