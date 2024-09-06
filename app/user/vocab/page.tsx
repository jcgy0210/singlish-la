"use client";
import { useState } from "react";
import Menu from "../components/Menu";
import Header from "../components/Header";
import PhraseCard from "./components/PhraseCard";

export default function Vocab() {
  const data = [
    {
      phrase: "Shiok",

      meaning: "A way to express a good feeling",

      example1: "The weather today damn shiok",

      example2: "Shiok ah! Today, no class",
    },
    {
      phrase: "Makan",

      meaning: "Eat",

      example1: "Are you hungry? Let's Makan",

      example2: "Come we go Makan some good food",
    },
    {
      phrase: "Abuden",

      meaning: "Obviously",

      example1:
        "Person A is eating and Person B asks: 'youre eating?' Person A then reply: 'Abuden'",

      example2:
        "Person A is running and Person B asks: 'youre running?' Person A then reply: 'Abuden'",
    },
  ];

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <main className="min-h-screen p-4 md:p-8 bg-background-light dark:bg-background-dark">
      {menuIsOpen && <Menu onClose={() => setMenuIsOpen(false)}></Menu>}

      {!menuIsOpen && (
        <>
          <div>
            <Header
              title="What Word You Want Learn?"
              onClick={() => setMenuIsOpen(true)}
            ></Header>

            {/* Body */}
            <div className="w-full max-w-4xl mx-auto p-4">
              <ul className="flex flex-col gap-4 p-4 border-8 border-red text-red rounded-2xl">
                {data.map((data) => (
                  <li className="flex flex-col gap-2 p-4 rounded-2xl hover:shadow-hovering hover:border-2 hover:border-red">
                    <PhraseCard
                      phrase={data.phrase}
                      meaning={data.meaning}
                      example1={data.example1}
                      example2={data.example2}
                    ></PhraseCard>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
