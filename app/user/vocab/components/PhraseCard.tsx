"use client";
import PhraseSubSection from "./PhraseSubSection";
import { useState } from "react";

interface Prop {
  phrase: string;
  meaning: string;
  example1: string;
  example2: string;
}

const PhraseCard = ({ phrase, meaning, example1, example2 }: Prop) => {
  const [phrasesVisible, setPhrasesVisibility] = useState(false);
  return (
    <>
      <div className="flex flex-row p-4 bg-background-light dark:bg-background-dark dark:text-text-dark rounded-2xl">
        <h2 className="flex-grow">{phrase}</h2>

        {!phrasesVisible ? (
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
            className="w-10 place-self-end"
            onClick={() => setPhrasesVisibility(false)}
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

      {phrasesVisible && (
        <PhraseSubSection
          meaning={meaning}
          example1={example1}
          example2={example2}
        ></PhraseSubSection>
      )}
    </>
  );
};

export default PhraseCard;
