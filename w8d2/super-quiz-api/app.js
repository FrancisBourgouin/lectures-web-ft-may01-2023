const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const question1 = {
  id: "1",
  question: "What is the hottest planet in the solar system?",
  answer: "Venus",
};
const question2 = {
  id: "2",
  question: "What is the capital of Toronto?",
  answer: "T",
};
const question3 = {
  id: "3",
  question: "What is the powerhouse of the cell?",
  answer: "Mitochondria",
};
const question4 = {
  id: "4",
  question: "How many stomachs do cows have?",
  answer: "4",
};

const questionData = [question1, question2, question3, question4];

app.get("/api/v1/questions", (req, res) => {
  setTimeout(() => {
    res.json(questionData);
  }, 3000);
});

app.post("/api/v1/questions", (req, res) => {
  const { question, answer } = req.body;
  const id = questionData.length + 1;
  const newQuestion = { id, question, answer };

  questionData.push(newQuestion);

  res.json(newQuestion);
});

module.exports = app;
