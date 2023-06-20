import "./App.css";
import Header from "./components/Header";
import QuestionForm from "./components/QuestionForm";
import QuizForm from "./components/QuizForm";
import QuizScore from "./components/QuizScore";
import useQuiz from "./hooks/useQuiz";

// import { questionData } from "./mocks/quizData";

function App() {
  const { questionText, score, validateAnswer, addQuestion, isLoading } = useQuiz();

  return (
    <div className="App">
      <Header />
      <main>
        {!isLoading && (
          <>
            <QuizScore score={score} />
            <QuizForm
              questionText={questionText}
              onSubmit={(formData) => validateAnswer(formData.answer)}
            />
          </>
        )}
        {isLoading && <h1>Loading the wonderful questions...</h1>}
        <QuestionForm
          onSubmit={(formData) => addQuestion(formData.question, formData.answer)}
        />
      </main>
      {/* <span>{questionText}</span>
      <span>{score}</span>
      <button onClick={() => validateAnswer("4")}>Validate Answer</button>
      <button onClick={() => addQuestion("4?", "4")}>Add Question</button> */}
    </div>
  );
}

export default App;
