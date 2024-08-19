import Link from "next/link";

interface Props {
  names: string;
}

const CoursesCard = ({ names }: Props) => {
  return (
    <div className="course-card h-1/4 relative mx-4 my-2 p-4 rounded-xl">
      <div className="progress-bar h-5 w-fill mx-4 my-2 bg-zinc-200 rounded-lg text-sm">
        Progress Bar
      </div>

      <div className="flex flew-row relative my-2">
        <p className="mx-4 text-lg">{names}</p>
        
        <Link
          className="continue-button absolute right-4 rounded-lg grid place-items-center px-2 py-1 text-sm text-white"
          href="\courses"
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default CoursesCard;
