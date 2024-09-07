import Link from "next/link";

interface Props {
  names: string;
}

const RecentCourse = ({ names }: Props) => {
  return (
    <div className="flex flex-col p-4 gap-4 border-2 border-red rounded-xl shadow-xl">
      <div className="p-4 bg-gray-200 rounded-full text-lg">Progress Bar</div>

      <div className="flex flew-row">
        <h3 className="text-red flex-grow">{names}</h3>

        <Link
          className="p-2 place-self-center text-center rounded-xl bg-red text-white"
          href="\courses"
        >
          <button>Continue</button>
        </Link>
      </div>
    </div>
  );
};

export default RecentCourse;
