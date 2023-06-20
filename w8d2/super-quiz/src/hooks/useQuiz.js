// score0, validateAnswer(), addQuestion(), question""

import { useEffect, useState } from "react";
import axios from "axios";

export default function useQuiz() {
  const [questions, setQuestions] = useState([]);
  const [points, setPoints] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [amountOfQuestionsAnswered, setAmountOfQuestionsAnswered] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/api/v1/questions")
      .then((res) => res.data)
      .then((data) => setQuestions(data))
      .catch((err) => {
        console.log(err);
        setQuestions([]);
      })
      .finally(() => setIsLoading(false));
  }, []);

  let score = amountOfQuestionsAnswered ? points / amountOfQuestionsAnswered : 0;
  // score = score * 1000000000 + "%";

  const currentQuestionIndex = amountOfQuestionsAnswered % questions.length;
  const currentQuestion = questions[currentQuestionIndex];

  const questionText = currentQuestion && currentQuestion.question;

  const validateAnswer = (answer) => {
    console.log(answer);
    if (answer === currentQuestion.answer) {
      setPoints(points + 1);
    }
    setAmountOfQuestionsAnswered(amountOfQuestionsAnswered + 1);
  };

  const addQuestion = (question, answer) => {
    // const id = `${questions.length + 1}`;
    // const newQuestion = { id, question, answer };

    axios
      .post("/api/v1/questions", { question, answer })
      .then((res) => res.data)
      .then((data) => {
        console.log("Question added:", data);
        setQuestions([...questions, data]);
      })
      .catch((err) => console.log(err));
  };

  return { isLoading, questionText, score, validateAnswer, addQuestion };
}

// She was waiting for her mother at the station in Torino and you know I love you baby but it's getting too heavy to laugh
