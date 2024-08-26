"use client";
import { useState } from "react";
import Menu from "../../components/Menu";
import VocabCard from "./components/VocabCard";
import Header from "../../components/Header";
import Phrases from "./components/Phrases";

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

  const [pageVisible, setPageVisibility] = useState(true);

  return (
    <main className="min-h-screen p-4 md:p-8 bg-background-light dark:bg-background-dark">
      {!pageVisible && <Menu onClose={() => setPageVisibility(true)}></Menu>}

      {pageVisible && (
        <div>
          <Header
            title="What Word You Want Learn?"
            onClick={() => setPageVisibility(false)}
          ></Header>

          {/* Body */}
          <div className="w-full max-w-4xl mx-auto p-4">
            <ul className="p-4 bg-red text-red rounded-xl flex flex-col gap-4">
              {data.map((data) => (
                <VocabCard
                  phrase={data.phrase}
                  meaning={data.meaning}
                  example1={data.example1}
                  example2={data.example2}
                ></VocabCard>
              ))}
            </ul>
          </div>
        </div>
      )}
    </main>
  );
}
