interface Props {
  onClose: () => void;
}

const FAQSection = ({ onClose }: Props) => {
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

        <h1 className="flex-grow mr-14 text-red text-center">FAQ page</h1>
      </div>

      <div className="flex flex-col">
        {/* Account Management Section*/}
        <div className="flex flex-col p-4">
          <h3 className="text-red">Account Management</h3>

          <div className="flex flex-col gap-4 p-4">
            <h4>My account got problem</h4>

            <h4>Can Delete my account?</h4>
          </div>
        </div>

        {/* Using SinglishLA! Section*/}
        <div className="flex flex-col p-4">
          <h3 className="text-red">Using SinglishLA!</h3>

          <div className="flex flex-col gap-4 p-4">
            <h4>My account got problem</h4>

            <h4>Can Delete my account?</h4>
          </div>
        </div>

        {/* Got Question? Section */}
        <div className="flex flex-col p-4">
          <h3 className="text-red">Got Question isit?</h3>

          <div className="flex flex-col gap-4 p-4">
            {/* Name */}
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              //   value={password}
              //   onChange={(e) => setPassword(e.target.value)} // Bind password state
              className="w-1/2 bg-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-red"
              placeholder="Name"
            />

            {/* Email */}
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
              className="w-1/2 bg-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-red"
              placeholder="Email address"
            />

            {/* Ask Us Lor */}
            <h4 className="text-red">Ask Us Lor:</h4>

            <label htmlFor="question" className="sr-only">
              Ask Lor
            </label>
            <input
              id="question"
              name="question"
              type="form"
              className="w-1/2 h-60 bg-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-red text-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
