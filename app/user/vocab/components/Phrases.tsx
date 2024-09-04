import { useState } from "react";

interface Prop {
  phrase: string;
  meaning: string;
  example1: string;
  example2: string;
  onClose: () => void;
}

const Phrases = ({ phrase, meaning, example1, example2, onClose }: Prop) => {
  const [meaningVisible, setMeaningVisibility] = useState(false);
  const [exampleVisible, setexampleVisibility] = useState(false);
  return (
    <div className="flex flex-col p-4 rounded-md gap-4 bg-background-light dark:bg-background-dark text-lg">
      <div className="flex flex-row">
        <h2 className="flex-grow">{phrase}</h2>

        <button className="w-10 place-self-end" onClick={onClose}>
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
      </div>

      {/* Meaning Section */}
      <div className="flex flex-col gap-4 border-2 border-red rounded-xl p-4">
        <div className="flex flex-row">
          <h4 className="flex-grow">MEANING</h4>

          {!meaningVisible ? (
            // dropdown button
            <button
              className="w-8 place-self-end"
              onClick={() => setMeaningVisibility(true)}
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
              onClick={() => setMeaningVisibility(false)}
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

        {meaningVisible && <p>{meaning}</p>}
      </div>

      {/* Examples Section */}
      <div className="flex flex-col gap-4 border-2 border-red rounded-xl p-4">
        <div className="flex flex-row">
          <h4 className="flex-grow">EXAMPLES</h4>

          {!exampleVisible ? (
            <button
              className="w-8 place-self-end"
              onClick={() => setexampleVisibility(true)}
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
              onClick={() => setexampleVisibility(false)}
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

        {exampleVisible && (
          <div>
            <p>1. {example1}</p>

            <p>2. {example2}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Phrases;
