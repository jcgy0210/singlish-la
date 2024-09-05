"use client";
import { useState } from "react";
// import Quiz from "./Quiz";

interface Prop {
  course_id: string;
  title: string;
  description: string;
}

const Course = ({ course_id, title, description }: Prop) => {
  const [listVisible, setListVisibility] = useState(false);
  return (
    <>
      <div className="flex flex-row p-4 bg-background-light dark:bg-background-dark rounded-md">
        <div className="flex-grow flex flex-col gap-4">
          {/* Course title */}
          <h2 className="text-red">{title}</h2>

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

      {/* {listVisible && (
        <ul>
          {}
        </ul>
      )} */}
    </>
  );
};

export default Course;
