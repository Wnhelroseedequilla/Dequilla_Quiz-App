import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { questions } from "../data/questions";
import QuizHeader from "../components/QuizHeader";
import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";

function Quiz({ setScore }) {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setLocalScore] = useState(0);

  const question = questions[currentQuestion];

  const handleNext = () => {

    if (!selectedAnswer) {
      alert("Please select an answer.");
      return;
    }

    let newScore = score;

    if (selectedAnswer === question.answer) {
      newScore = score + 1;
      setLocalScore(newScore);
    }

    if (currentQuestion === questions.length - 1) {
      setScore(newScore);
      navigate("/result");
      return;
    }

    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-2xl mx-auto">

        <QuizHeader
          current={currentQuestion + 1}
          total={questions.length}
        />

        <ProgressBar
          current={currentQuestion + 1}
          total={questions.length}
        />

        <QuestionCard
          question={question}
          selectedAnswer={selectedAnswer}
          onSelect={setSelectedAnswer}
        />

        <button
          onClick={handleNext}
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          {currentQuestion === questions.length - 1
            ? "Finish Quiz"
            : "Next"}
        </button>

      </div>

    </div>
  );
}

export default Quiz;