"use client";

import Link from "next/link";
import DarkMode from "./components/DarkMode";
import ProfileInfo from "./components/ProfileInfo";
import { useState } from "react";
import FAQSection from "./components/FAQSection";
import ContactUs from "./components/ContactUs";
import Menu from "../../components/Menu";
import Header from "@/app/components/Header";

export default function SettingsPage() {
  const [profileInfo, setProfileInfoVisibility] = useState(false);
  const [theFAQSection, setFAQVisibility] = useState(false);
  const [contactUs, setContactUsVisibility] = useState(false);
  const [pageVisible, setPageVisibility] = useState(true);

  return (
    <main className="min-h-screen p-4 md:p-8 bg-background-light dark:bg-background-dark">
      {profileInfo && (
        <ProfileInfo
          onClose={() => setProfileInfoVisibility(false)}
        ></ProfileInfo>
      )}

      {theFAQSection && (
        <FAQSection onClose={() => setFAQVisibility(false)}></FAQSection>
      )}

      {contactUs && (
        <ContactUs onClose={() => setContactUsVisibility(false)}></ContactUs>
      )}

      {!pageVisible && <Menu onClose={() => setPageVisibility(true)}></Menu>}

      {pageVisible && !profileInfo && !theFAQSection && !contactUs && (
        <Header
          title="Settings"
          onClick={() => setPageVisibility(false)}
        ></Header>
      )}

      {pageVisible && !profileInfo && !theFAQSection && !contactUs && (
        // Body
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-4 text-text-light dark:text-text-dark">
          {/* Display section */}
          <div className="flex flex-col p-4">
            <h2>Display</h2>

            <div className="flex flex-col p-4 gap-4 ">
              {/* Dark Mode */}
              <div className="flex flex-row ">
                <div className="w-9">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    />
                  </svg>
                </div>

                <h3 className="flex-grow">DARK MODE</h3>

                <div className="place-self-end">
                  <DarkMode></DarkMode>
                </div>
              </div>

              {/* Font-Size */}
              <div className="flex flex-row">
                <h3 className="flex-grow">Font Size</h3>

                <div className="h-9 flex flex-row">
                  <div className="px-4">Regular</div>

                  <div className="px-4">Large</div>
                </div>
              </div>
            </div>
          </div>

          {/* Account Section */}
          <div className="flex flex-col p-4">
            <h2>Account</h2>

            <div className="flex flex-row p-4">
              <h3 className="flex-grow">Profile Information</h3>

              <button
                className="w-9"
                onClick={() => setProfileInfoVisibility(true)}
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
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Privacy&Security Section */}
          <div className="flex flex-col p-4">
            <h2>Privacy & Security</h2>

            <div className="flex flex-col p-4 gap-4">
              <div className="flex flex-row ">
                <h3 className="flex-grow">Notification</h3>

                <div className="relative w-16 h-9 flex items-center dark:bg-red bg-white border-2 border-red cursor-pointer rounded-full p-1">
                  <div className="absolute bg-red dark:bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"></div>
                </div>
              </div>

              <Link href="\home" className="">
                <h3>Delete Account</h3>
              </Link>
            </div>
          </div>

          {/* Support Section */}
          <div className="flex flex-col p-4">
            <h2>Support</h2>

            <div className="flex flex-col p-4 gap-4">
              <div className="flex flex-row ">
                <h3 className="flex-grow">Help & FAQs</h3>

                <button className="w-9" onClick={() => setFAQVisibility(true)}>
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
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex flex-row">
                <h3 className="flex-grow">Contact Us</h3>

                <button
                  className="w-9"
                  onClick={() => setContactUsVisibility(true)}
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
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Version Section */}
          <div className="flex flex-row p-4">
            <h2 className="flex-grow">Version</h2>

            <h2>1.1.0</h2>
          </div>

          {/* About Section */}
          <h2 className="flex flex-row p-4 text-4xl font-bold">About</h2>
        </div>
      )}
    </main>
  );
}
