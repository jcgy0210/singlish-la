"use client";

import { useState, useEffect } from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";
import Course from "./components/Course";
import { Courses } from "@/app/lib/definitions";
import { fetchCourseByID } from "@/app/lib/data";

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [courses, setCourses] = useState<Courses[]>([]);
  const [pageVisible, setPageVisibility] = useState(true);
  
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
            course_id: course.course_id,
            title: course.title,
            description: course.description, 
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
                    key={course.course_id}
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
