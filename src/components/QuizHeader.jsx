function QuizHeader({ current, total }) {
  return (
    <div className="flex justify-between items-center mb-4">

      <h2 className="text-xl font-bold text-gray-800">
        Quiz
      </h2>

      <span className="text-gray-500">
        Question {current} of {total}
      </span>

    </div>
  );
}

export default QuizHeader;
