interface Props {
  onClose: () => void;
}

const Menu = ({ onClose }: Props) => {
  return (
    <div className="absolute top-0 h-full w-full pt-20 bg-slate-100">
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

      <a href="\profile" className="top-section right-4">
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
      </a>

      <div className="flex flex-col place-items-end my-4 pr-4 text-2xl font-bold text-black">
        <a href="\home" className="home-button my-4">
          <p>HOME</p>
        </a>

        <a href="\courses" className="my-4">
          <p>COURSES</p>
        </a>

        <a href="\quizes" className="my-4">
          <p>QUIZZES</p>
        </a>

        <a href="\vocab" className="my-4">
          <p>VOCABULARY</p>
        </a>

        <a href="\setting" className="my-4">
          <p>SETTINGS</p>
        </a>

        <a
          href="\log-in-user"
          className="log-out-button my-4 rounded-xl p-2 text-white text-center"
        >
          Log Out Ah?
        </a>
      </div>
    </div>
  );
};

export default Menu;
