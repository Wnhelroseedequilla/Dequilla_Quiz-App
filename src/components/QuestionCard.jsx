import AnswerOption from "./AnswerOption";

function QuestionCard({
  question,
  selectedAnswer,
  onSelect
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">

      <h3 className="text-2xl font-semibold text-gray-800 mb-6">
        {question.question}
      </h3>

      <div>
        {question.choices.map((choice) => (
          <AnswerOption
            key={choice}
            choice={choice}
            selected={selectedAnswer === choice}
            onSelect={onSelect}
          />
        ))}
      </div>

    </div>
  );
}

export default QuestionCard;