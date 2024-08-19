interface Props {
  onClose: () => void;
}

const FAQSection = ({ onClose }: Props) => {
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
        <div className="w-full flex flex-col p-4 justify-center items-center">
          {/* Title */}
          <h1 className="text-5xl p-4">Settings</h1>

          {/* Subtitle */}
          <h2 className="text-4xl p-4">FAQs Lor</h2>

          <div className="w-full p-4">
            <div className="p-4">
              {/* Account Management */}
              <h3 className="section-title text-3xl">Account Management</h3>

              <div className="p-4">
                <p className="p-4">My account got problem</p>

                <p className="p-4">Can Delete my account?</p>
              </div>
            </div>

            <div className="p-4">
              {/* Using SinglishLA! */}
              <h3 className="section-title text-3xl">Using SinglishLA!</h3>

              <div className="p-4">
                <p className="p-4">My account got problem</p>

                <p className="p-4">Can Delete my account?</p>
              </div>
            </div>
          </div>

          <div className="w-full py-4 flex flex-col justify-stretch items-center">
            <h3 className="section-title text-3xl">Got Question isit?</h3>

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

            <div className="w-full py-4 flex flex-col justify-stretch items-center">
              <h4 className="p-4">Ask Us Lor:</h4>

              <label htmlFor="question" className="sr-only">
                Ask Lor
              </label>
              <input
                id="question"
                name="question"
                type="form"
                className="w-1/2 h-64 p-4 flex border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
