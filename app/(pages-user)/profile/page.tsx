export default function ProfilPage() {
  return (
    <main className="h-screen w-full flex flex-col bg-slate-100 text-black">
        <a href="\home" className="top-section left-4">
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
        </a>

        <div className="mx-auto w-100 h-100">
          <div className="grid place-items-center">
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

              <p className="p-4 text-center text-xl">Name</p>
            </div>
          </div>

          <div className="relative h-20 font-bold">
            <div className="progress-bar w-fill mx-4 my-2 bg-zinc-200 rounded-lg">
              Progress Bar
            </div>

            <p className="ml-4">Progress:</p>

            <p className="absolute bottom-4 right-4">100/420</p>
          </div>

          <div className="relative flex flex-col">
            <p className="my-4 text-2xl font-bold text-center">Achievements</p>

            <div className="absolute right-4 top-4 h-8 w-8 grid place-items-center">
              <a href="https://">
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
              </a>
            </div>

            <div className="my-4 mx-4 w-fill grid grid-cols-3 grid-rows-3 gap-y-10 gap-x-4 place-items-center text-white">
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
