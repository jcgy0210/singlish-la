interface Props {
  question: string;
  options: string[];
  onSelectOption: (option: string) => void;
}

const Question = ({ question, options, onSelectOption }: Props) => {
  return (
    <div className="p-4">
      <h3 className="text-3xl font-bold">{question}</h3>

      <ul className="list-group">
        {options.map((option) => (
          <li className="text-2xl p-4">
            <input type="checkbox"></input>
            <label className="p-4">{option}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
