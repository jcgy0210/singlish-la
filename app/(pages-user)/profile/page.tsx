import Link from "next/link";

export default function ProfilePage() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-100 dark:bg-slate-900">
      {/* Header Section */}
      <header className="relative flex justify-between items-center mb-8">
        <Link href="\home" className="top-section left-4">
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
        </Link>
      </header>

      {/* Body */}
      <div className="w-full max-w-4xl mx-auto h-screen text-black dark:text-gray-200">
        {/* Profile Pic/Bio Section */}
        <div className="h-1/4 grid place-items-center">
          <div className="flex flex-col mt-12 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#900603"
              className="size-28"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            <p className="p-4 text-center text-2xl font-bold">Name</p>
          </div>
        </div>

        {/* Progress Section */}
        <div className="h-auto font-bold p-8 ">
          <div className="progress-bar w-fill flex flex-row bg-zinc-200 rounded-lg">
            <div className="ml-4">Progress: 100/420</div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="relative h-2/3 flex flex-col">
          <p className="my-4 text-2xl font-bold text-center">Achievements</p>

          <div className="absolute right-4 top-4 h-8 w-8 grid place-items-center ">
            <Link href="https://">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="#900603"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </Link>
          </div>

          <div className="m-4 p-4 w-fill grid grid-cols-4 grid-rows-4 gap-y-10 gap-x-4 place-items-center text-white">
            <div className="badge">Badges</div>
            <div className="badge">Badges</div>
            <div className="badge">Badges</div>
            <div className="badge">Badges</div>
            <div className="badge">Badges</div>
            <div className="badge">Badges</div>
            <div className="badge">Badges</div>
            <div className="badge">Badges</div>
            <div className="badge">Badges</div>
            <div className="badge">Badges</div>
            <div className="badge">Badges</div>
            <div className="badge">Badges</div>
            <div className="badge">Badges</div>
            <div className="badge">Badges</div>
            <div className="badge">Badges</div>
            <div className="badge">Badges</div>
          </div>
        </div>
      </div>
    </main>
  );
}
