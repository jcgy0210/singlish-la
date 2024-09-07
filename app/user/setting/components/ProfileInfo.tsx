import Link from "next/link";

interface Props {
  onClose: () => void;
}

const ProfileInfo = ({ onClose }: Props) => {
  return (
    <div className="min-h-screen p-4 text-text-light dark:text-text-dark bg-background-light dark:bg-background-dark">
      <div className="flex flex-row p-4">
        <button className="w-14" onClick={onClose}>
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

        <h1 className="flex-grow mr-14 text-red text-center">
          Profile Information
        </h1>
      </div>

      <div className="flex flex-col gap-10 p-4 text-center">
        <button className="w-36 place-self-center">
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
        </button>

        <h2>Name</h2>

        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          // value={email}
          // onChange={(e) => setEmail(e.target.value)} // Bind email state
          className="w-1/2 bg-gray-200 place-self-center p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-red"
          placeholder="Email address"
        />

        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          //   value={password}
          //   onChange={(e) => setPassword(e.target.value)} // Bind password state
          className="w-1/2 bg-gray-200 place-self-center p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-red"
          placeholder="Password"
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
