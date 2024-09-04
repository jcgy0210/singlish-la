"use client";
import { useState } from "react";

interface Props {
  onClose: () => void;
}

const ContactUs = ({ onClose }: Props) => {
  const [phoneNumberVisible, setPhoneNumberVisibility] = useState(false);
  const [emailVisible, setEmailVisibility] = useState(false);
  const [locationVisible, setLocationVisibility] = useState(false);
  return (
    <div className="min-h-screen p-4 text-text-light dark:text-text-dark bg-background-light dark:bg-background-dark">
      <div className="flex flex-row p-4">
        <button className="w-14" onClick={onClose}>
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
              d="M15.75 19.5 8.25 12 l7.5-7.5"
            />
          </svg>
        </button>

        <h1 className="flex-grow mr-14 text-red text-center">
          Trying To Find Us Ah?
        </h1>
      </div>

      <div className="flex flex-col gap-4 m-10 p-4 place-items-center border-4 border-red rounded-3xl text-red">
        <h2 className="text-text-light dark:text-text-dark">
          Norh Our Contact Info
        </h2>

        {/* Phone Number Section */}
        <div className="w-full flex flex-col gap-4 p-4 border-2 border-gray-400  dark:border-red rounded-xl text-center">
          <div className="flex flex-row">
            <h4 className="flex-grow ml-8">PHONE NUMBER</h4>

            {!phoneNumberVisible ? (
              <button
                className="w-8 place-self-end"
                onClick={() => setPhoneNumberVisibility(true)}
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
                className="w-8 place-self-end"
                onClick={() => setPhoneNumberVisibility(false)}
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

          {phoneNumberVisible && <h4>9XXX XXXX</h4>}
        </div>

        {/* Email Section */}
        <div className="w-full flex flex-col gap-4 p-4 border-2 border-gray-400 dark:border-red rounded-xl text-center">
          <div className="flex flex-row">
            <h4 className="flex-grow">EMAIL</h4>

            {!emailVisible ? (
              // dropdown button
              <button
                className="w-8 place-self-end"
                onClick={() => setEmailVisibility(true)}
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
              // Close button
              <button
                className="w-8 place-self-end"
                onClick={() => setEmailVisibility(false)}
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

          {emailVisible && <h4>dummyUser123ABC@email.com</h4>}
        </div>

        {/* Location Section */}
        <div className="w-full flex flex-col gap-4 p-4 border-2 border-gray-400 dark:border-red rounded-xl text-center">
          <div className="flex flex-row">
            <h4 className="flex-grow">LOCATION</h4>

            {!locationVisible ? (
              <button
                className="w-8 place-self-end"
                onClick={() => setLocationVisibility(true)}
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
                className="w-8 place-self-end"
                onClick={() => setLocationVisibility(false)}
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

          {locationVisible && (
            <h4>
              Singapore Institute of Management Global Education, Singapore
            </h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
