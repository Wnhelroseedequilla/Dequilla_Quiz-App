import { useNavigate } from "react-router-dom";

import ResultCard from "../components/ResultCard";
import { questions } from "../data/questions";

function Result({ score, setScore }) {
  const navigate = useNavigate();

  const handleRetake = () => {
    setScore(0);
    navigate("/quiz");
  };

  const handleHome = () => {
    setScore(0);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="max-w-lg w-full">

        <ResultCard
          score={score}
          total={questions.length}
        />

        <div className="flex gap-4 mt-6">

          <button
            onClick={handleRetake}
            className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Retake Quiz
          </button>

          <button
            onClick={handleHome}
            className="flex-1 bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition"
          >
            Return Home
          </button>

        </div>

      </div>

    </div>
  );
}

export default Result;