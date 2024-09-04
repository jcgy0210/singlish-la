"use client";
import Phrases from "./Phrases";
import { useState } from "react";

interface Prop {
  phrase: string;
  meaning: string;
  example1: string;
  example2: string;
}

const VocabCard = ({ phrase, meaning, example1, example2 }: Prop) => {
  const [phrasesVisible, setPhrasesVisibility] = useState(false);
  return (
    <>
      {phrasesVisible && (
        <Phrases
          phrase={phrase}
          meaning={meaning}
          example1={example1}
          example2={example2}
          onClose={() => setPhrasesVisibility(false)}
        ></Phrases>
      )}

      {!phrasesVisible && (
        <div className="flex flex-row p-4 bg-background-light dark:bg-background-dark rounded-md">
          <h2 className="flex-grow">{phrase}</h2>

          <button
            className="w-10 place-self-end"
            onClick={() => setPhrasesVisibility(true)}
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
        </div>
      )}
    </>
  );
};

export default VocabCard;
