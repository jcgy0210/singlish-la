'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const [bgColor, setBgColor] = useState("#900603"); 

  return (
    <main className="min-h-screen p-4 md:p-8 bg-background-light flex items-center justify-center">
      <div className="flex flex-col gap-4 items-center">
        <Image
          className="place-self-center"
          src="/SinglishLA.png"
          alt="Logo"
          width={250} 
          height={20}
          priority
        />

        <p className="p-2 text-center text-lg text-red">
          Speak Singlish with Finesse: Your Gateway to Local Lingo.
        </p>

        <Link className="place-self-center w-48 p-2 text-white text-center bg-red rounded-2xl hover:shadow-hovering active:shadow-clicked" href="/login">
          <button
            className="transition duration-300 transform hover:scale-105"
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
