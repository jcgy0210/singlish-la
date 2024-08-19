"use client";

import Link from "next/link";
import DarkMode from "../../components/DarkMode";
import ProfileInfo from "../../components/ProfileInfo";
import { useState } from "react";
import FAQSection from "../../components/FAQSection";
import ContactUs from "../../components/ContactUs";

export default function SettingsPage() {
  const [profileInfo, setProfileInfoVisibility] = useState(false);
  const [theFAQSection, setFAQVisibility] = useState(false);
  const [contactUs, setContactUsVisibility] = useState(false);

  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-100 dark:bg-slate-900">
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

      {!profileInfo && !theFAQSection && !contactUs && (
        // Header Section
        <header className="relative flex justify-between items-center mb-8">
          <Link href="\home" className="top-section left-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="#900603"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12 l7.5-7.5"
              />
            </svg>
          </Link>
        </header>
      )}

      {!profileInfo && !theFAQSection && !contactUs && (
        // Body
        <div className="w-full max-w-4xl mx-auto h-screen text-black dark:text-gray-200">
          {/* Title */}
          <div className="w-fill h-24 flex justify-center items-center">
            <h1 className="text-5xl font-bold">Settings</h1>
          </div>

          {/* Display section */}
          <div className="h-1/6 p-4 flex flex-col">
            <h2 className="text-4xl font-bold">Display</h2>

            <div className="flex flex-col h-5/6 p-4">
              {/* Dark Mode */}
              <div className="h-1/2 w-fill flex flex-row items-center">
                <div className="px-2">
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
                      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    />
                  </svg>
                </div>

                <h3 className="text-3xl">DARK MODE</h3>

                <div className="grow flex flex-col">
                  <div className="place-self-end px-4">
                    <DarkMode></DarkMode>
                  </div>
                </div>
              </div>

              {/* Font-Size */}
              <div className="h-1/2 w-fill flex flex-row items-center">
                <h3 className="p-2 text-3xl">Font Size</h3>

                <div className="grow flex flex-col">
                  <div className="place-self-end flex flex-row p-4">
                    <div className="px-4">Regular</div>
                    <div className="px-4">Large</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Account Section */}
          <div className="h-auto p-4 flex flex-col">
            <h2 className="text-4xl font-bold">Account</h2>

            <div className="p-4 flex flex-row">
              <h3 className="p-2 text-3xl">Profile Information</h3>

              <div className="grow flex flex-col">
                <button
                  className="place-self-end"
                  onClick={() => setProfileInfoVisibility(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
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

          {/* Privacy&Security Section */}
          <div className="h-auto p-4 flex flex-col">
            <h2 className="text-4xl font-bold">Privacy & Security</h2>

            <div className="p-4 flex flex-row">
              <h3 className="p-2 text-3xl">Notification</h3>

              <div className="grow flex flex-col">
                <div className="place-self-end">Hi</div>
              </div>
            </div>

            <Link href="\home" className="px-4">
              <h3 className="p-2 text-3xl">Delete Account</h3>
            </Link>
          </div>

          {/* Support Section */}
          <div className="h-auto p-4 flex flex-col">
            <h2 className="text-4xl font-bold">Support</h2>

            <div className="p-4 flex flex-row">
              <h3 className="p-2 text-3xl">Help & FAQs</h3>

              <div className="grow flex flex-col">
                <button
                  className="place-self-end"
                  onClick={() => setFAQVisibility(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
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

            <div className="px-4 flex flex-row">
              <h3 className="p-2 text-3xl">Contact Us</h3>

              <div className="grow flex flex-col">
                <button
                  className="place-self-end"
                  onClick={() => setContactUsVisibility(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
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
          <div className="h-auto p-4 flex flex-row">
            <h2 className="text-4xl font-bold">Version</h2>

            <div className="grow flex flex-col">
              <h2 className="place-self-end text-4xl">1.1.0</h2>
            </div>
          </div>

          {/* About Section */}
          <h2 className="h-auto p-4 flex flex-row text-4xl font-bold">About</h2>
        </div>
      )}
    </main>
  );
}
