interface Props {
  onClose: () => void;
}

const ProfileInfo = ({ onClose }: Props) => {
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

      <div className="w-fill flex justify-center items-center text-2xl text-black font-bold p-4 dark:text-gray-200">
        {/* Title */}
        <div className="w-full flex flex-col p-4 justify-stretch items-center">
          <h1 className="text-5xl p-4">Settings</h1>

          <h2 className="text-4xl p-4">Profile Information</h2>

          <div className="my-4 p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#900603"
              className="size-64"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>

          <h2 className="text-4xl p-4">Name</h2>

          <div className="w-full py-4 flex flex-col justify-stretch items-center">
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
              className="relative block w-1/3 p-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>

          <div className="w-full py-4 flex flex-col justify-stretch items-center">
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
              className="relative block w-1/3 p-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
