'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const [bgColor, setBgColor] = useState("#900603"); 

  return (
    <main className="min-h-screen p-4 md:p-8 bg-background-light flex items-center justify-center">
      <div className="flex flex-col gap-3 items-center">
        <Image
          className="place-self-center"
          src="/SinglishLA.png"
          alt="Logo"
          width={250} 
          height={20}
          priority
        />

        <p className="text-center text-lg text-gray-700">
          Speak Singlish with Finesse: Your Gateway to Local Lingo.
        </p>

        <Link className="place-self-center text-center" href="/login">
          <button
            className="w-48 p-2 text-white text-center rounded-xl transition duration-300 transform hover:scale-105"
            style={{
              backgroundColor: bgColor,
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            onMouseOver={() => setBgColor("#700404")}
            onMouseOut={() => setBgColor("#900603")}
          >
            Start learning
          </button>
        </Link>
      </div>
    </main>
  );
}
