import Link from "next/link";

interface Props {
  onClose: () => void;
}

const Menu = ({ onClose }: Props) => {
  return (
    <div className="relative min-h-screen bg-gray-100 dark:bg-slate-900">
      <button className="top-section left-4" onClick={onClose}>
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
      </button>

      <div className="flex flex-col justify-stretch text-2xl text-black font-bold p-4 dark:text-gray-200">
        <Link href="\profile" className="flex place-content-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#900603"
            className="size-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </Link>

        <Link
          href="\home"
          className="menu-button py-4 w-fill flex place-content-end"
          id="home-button"
        >
          <p>HOME</p>
        </Link>

        <Link
          href="\courses"
          className="menu-button py-4 w-fill flex place-content-end"
        >
          <p>COURSES</p>
        </Link>

        <Link
          href="\quizes"
          className="menu-button py-4 w-fill flex place-content-end"
        >
          <p>QUIZZES</p>
        </Link>

        <Link
          href="\vocab"
          className="menu-button py-4 w-fill flex place-content-end"
        >
          <p>VOCABULARY</p>
        </Link>

        <Link
          href="\setting"
          className="menu-button py-4 w-fill flex place-content-end"
        >
          <p>SETTINGS</p>
        </Link>

        <Link
          href="\log-in-user"
          className="log-out-button my-4 rounded-xl p-2 text-white text-center flex place-self-end"
        >
          Log Out Ah?
        </Link>
      </div>
    </div>
  );
};

export default Menu;
