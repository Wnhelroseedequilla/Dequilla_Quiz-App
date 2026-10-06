import { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

function App() {
  const [score, setScore] = useState(0);

  return (
    <Router>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/quiz"
          element={
            <Quiz setScore={setScore} />
          }
        />

        <Route
          path="/result"
          element={
            <Result
              score={score}
              setScore={setScore}
            />
          }
        />

      </Routes>

    </Router>
  );
}

export default App;