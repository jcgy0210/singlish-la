"use client";

import { useState, useEffect } from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";
import Course from "./components/Course";

import { fetchCourseByID } from "@/app/lib/data";

const courses = [
  {
    course_id: "1",
    title: "Course 1 - Hello",
    description:
      "Teach users how to engage in casual converstations with Singaporeans of different cultural backgrounds.",
  },

  {
    course_id: "2",
    title: "Course 2 - Makan-Makan",
    description:
      "Familiarise users with common Singlish expressions and vocabularies used when dining at a hawker centre.",
  },

  {
    course_id: "3",
    title: "Course 3 - Bojio!",
    description:
      "Equip users with the ability to ask for directions and recommendations for places to visit in Singapore.",
  },
];

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [courses, setCourses] = useState<Courses[]>([]);
  const [pageVisible, setPageVisibility] = useState(true);

  // Fetch courses from the database
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const courseIDs = ["1", "2", "3"];
        const fetchedCourses = await Promise.all(
          courseIDs.map((id) => fetchCourseByID(id))
        );

        // Check the structure of fetchedCourses
        console.log("Fetched Courses:", fetchedCourses);

        // Extract necessary fields from fetchedCourses
        const formattedCourses = fetchedCourses.map((result) => {
          // Access the rows property to get course data
          const course = result.rows[0]; // Adjust based on the actual structure
          return {
            course_id: course.course_id, // Now this should work
            title: course.title,
            description: course.description, // Use the correct property
          };
        });

        // Log the formatted courses to see if they are set correctly
        console.log("Formatted Courses:", formattedCourses);

        setCourses(formattedCourses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [pageVisible, setPageVisibility] = useState(true);
  console.log("courses: " +fetchCourseByID("1"));

  return (
    <main className="min-h-screen p-4 md:p-8 text-text-light dark:text-text-dark bg-background-light dark:bg-background-dark">
      {!pageVisible && <Menu onClose={() => setPageVisibility(true)}></Menu>}

      {pageVisible && (
        <>
          <Header
            title="Courses"
            onClick={() => setPageVisibility(false)}
          ></Header>

          <div className="w-full max-w-4xl mx-auto flex flex-col gap-4">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red focus:border-transparent"
            />

            <ul className="flex flex-col gap-4">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course) => (
                  <li
                    key={course.course_id} // Use course_id as key
                    className="flex flex-col gap-2 bg-background-light dark:bg-background-dark dark:text-white p-4 rounded-lg shadow-md border-2 border-red"
                  >
                    <Course
                      course_id={course.course_id}
                      title={course.title}
                      description={course.description}
                    />
                  </li>
                ))
              ) : (
                <li className="text-center text-gray-500">No courses found.</li>
              )}
            </ul>
          </div>
        </>
      )}
    </main>
  );
}
