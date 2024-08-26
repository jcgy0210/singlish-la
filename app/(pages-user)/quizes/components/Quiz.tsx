import Question from "./Question";

interface Prop {
  quizName: string;
  questionsAndOptions: { question: string; options: string[] }[];
}

const Quiz = ({ quizName, questionsAndOptions }: Prop) => {
  const handleSelectOption = (option: string) => {};

  return (
    <>
      <h2 className="flex flex-row self-center text-5xl font-bold p-4">
        {quizName}
      </h2>

      <ul className="list-group">
        {questionsAndOptions.map((questionsAndOptions) => (
          <Question
            options={questionsAndOptions.options}
            question={questionsAndOptions.question}
            onSelectOption={handleSelectOption}
          ></Question>
        ))}
      </ul>
    </>
  );
};

export default Quiz;
