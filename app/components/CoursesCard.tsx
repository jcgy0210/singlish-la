interface Props {
  names: string;
}

const CoursesCard = ({ names }: Props) => {
  return (
    <div className="course-card h-auto relative my-2 p-1 rounded-xl">
      <div className="progress-bar h-5 w-fill mx-4 my-2 bg-zinc-200 rounded-lg text-sm">
        Progress Bar
      </div>

      <div className="flex flew-row relative my-2">
        <p className="mx-4 text-lg">{names}</p>
        
        <a
          className="continue-button absolute right-4 rounded-lg grid place-items-center px-2 py-1 text-sm text-white"
          href="http://"
        >
          Continue
        </a>
      </div>
    </div>
  );
};

export default CoursesCard;
