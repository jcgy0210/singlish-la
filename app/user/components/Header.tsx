import Image from "next/image";

interface Prop {
  title: string;
  onClick: () => void;
}

const Header = ({ title, onClick }: Prop) => {
  return (
    <>
      <header className="flex flex-row p-8">
        <Image
          src="/SinglishLA.png" // Replace with your actual logo path
          alt="Logo"
          width={120}
          height={30}
          priority
        />

        <div className="flex-grow grid place-content-center">
          <h1 className="text-red dark:text-text-dark">{title}</h1>
        </div>

        {/* Menu */}
        <button className="m-6 w-16" onClick={onClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#900603"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </header>
    </>
  );
};

export default Header;
