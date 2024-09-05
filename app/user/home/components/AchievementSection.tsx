import Link from "next/link";

// interface Props {
//   names: string;
// }

const AchievementSection = () => {
  return (
    <div className="flex flex-col p-4 gap-4 border-2 border-red rounded-2xl">
      <div className="flex flex-row">
        <h2 className="flex-grow">Achievements</h2>

        <div className="w-10 place-self-end">
          <Link href="/user/profile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="rgb(175,175,175)"
              className="size-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
        </div>
      </div>

      <div className="flex flex-row p-4 items-center justify-evenly text-white">
        <div className="badge">Badges</div>
        <div className="badge">Badges</div>
        <div className="badge">Badges</div>
        <div className="badge">Badges</div>
        <div className="badge">Badges</div>
        <div className="badge">Badges</div>
      </div>
    </div>
  );
};

export default AchievementSection;
