function ResultCard({ score, total }) {
  const incorrect = total - score;
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Quiz Result
      </h2>

      <div className="space-y-3 text-lg">

        <p>
          Total Questions: <strong>{total}</strong>
        </p>

        <p className="text-green-600">
          Correct Answers: <strong>{score}</strong>
        </p>

        <p className="text-red-600">
          Incorrect Answers: <strong>{incorrect}</strong>
        </p>

        <p>
          Final Score: <strong>{score}/{total}</strong>
        </p>

        <p className="text-3xl font-bold text-blue-600">
          {percentage}%
        </p>

      </div>

    </div>
  );
}

export default ResultCard;