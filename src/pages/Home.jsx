import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-8 text-center">

        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Quiz App
        </h1>

       <p className="text-gray-600 mb-8">
          Test your basic science knowledge with these 5 simple questions.
           Choose the correct answer and see your final score.
       </p>

        <button
          onClick={() => navigate("/quiz")}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Start Quiz
        </button>

      </div>

    </div>
  );
}

export default Home;