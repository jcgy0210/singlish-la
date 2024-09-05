import { signOutAction } from "@/app/lib/actions";
import Link from "next/link";

interface Props {
  onClose: () => void;
}

const Menu = ({ onClose }: Props) => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <div className="flex flex-row p-4">
        <div className="flex-grow flex">
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
        </div>

        <button className="w-24 mr-4">
          <Link href="/user/profile" className="w-24">
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
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </Link>
        </button>
      </div>

      <div className="flex flex-col justify-stretch text-3xl font-bold p-4 text-text-light dark:text-text-dark">
        <Link
          href="/user/home"
          className="menu-button p-4 w-fill flex place-content-end text-red hover:text-white hover:bg-red"
        >
          <h3>HOME</h3>
        </Link>

        <Link
          href="/user/courses"
          className="menu-button p-4 w-fill flex place-content-end hover:text-white hover:bg-red"
        >
          <h3>COURSES</h3>
        </Link>

        <Link
          href="/user/vocab"
          className="menu-button p-4 w-fill flex place-content-end hover:text-white hover:bg-red"
        >
          <h3>VOCABULARY</h3>
        </Link>

        <Link
          href="/user/setting"
          className="menu-button p-4 w-fill flex place-content-end hover:text-white hover:bg-red"
        >
          <h3>SETTINGS</h3>
        </Link>

        <form
          action={async () => {
            await signOutAction(); // Call the server-side sign-out function
          }}
          className="log-out-button effect flex place-self-end rounded-xl mt-4 p-4 text-white text-center text-sm font-bold bg-red"
        >
          <button type="submit">Log Out ah?</button>
        </form>
      </div>
    </div>
  );
};

export default Menu;
