import Image from "next/image";

interface Prop {
  title: string;
  onClose: () => void;
}

const PageHeader = ({ title, onClose }: Prop) => {
  return (
    <>
      <header className="flex flex-row p-8">
        <button className="w-16" onClick={onClose}>
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
              d="M15.75 19.5 8.25 12 l7.5-7.5"
            />
          </svg>
        </button>

        <div className="flex-grow grid place-content-center">
          <h1 className="text-red dark:text-text-dark">{title}</h1>
        </div>
      </header>
    </>
  );
};

export default PageHeader;
