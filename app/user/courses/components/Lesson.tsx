import PageHeader from "./PageHeader";

interface Prop {
  lesson: {
    title: string;
    description: string;
    meaning: string;
    example: string;
  };
  onClose: () => void;
}

const Lesson = ({ lesson, onClose }: Prop) => {
  return (
    <>
      {/* Header */}
      <PageHeader title={lesson.title} onClose={onClose}></PageHeader>

      <div className="w-full max-w-4xl mx-auto flex flex-col gap-4 p-4 border-4 border-darkRed rounded-2xl">
        <div className="flex flex-col gap-4 p-3 border-2 border-red rounded-2xl">
          <h4>Description:</h4>
          <p>{lesson.description}</p>
        </div>

        <div className="flex flex-col gap-4 p-3 border-2 border-red rounded-2xl">
          <h4>Meaning:</h4>
          <p>{lesson.meaning}</p>
        </div>

        <div className="flex flex-col gap-4 p-3 border-2 border-red rounded-2xl">
          <h4>Examples:</h4>
          <p>{lesson.example}</p>
        </div>
      </div>
    </>
  );
};

export default Lesson;
