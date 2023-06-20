# Quiz App!

View multiple questions, and answer them one at a time, and say wow when we have the right answer

- What is the hottest planet in the solar system? Venus
- What is the capital of Toronto? T
- What is the powerhouse of the cell ? Mitochondria
- How many stomachs do cows have?

# Data Structures

# Question

```jsx
const question = {
  id: "0",
  question: "",
  answer: "",
};
```

# QuestionList

```jsx
const questions = [question, question];
// const questions = { 1: question, 2: question };  {...questions, 3:newQuestion}
```

# CurrentQuestion

```jsx
amountOfQuestions % questions.length;
```

# Points!

```jsx
const points = (0 * 10) ^ 10;
```

# HTML Structure

- body
  - header
    - h1 Super quiz!
  - main
    - section
      - h1 Current score
      - h2 score (% based)
    - section
      - form
        - p question
        - input answer
        - button
    - section
      - form
      - input question
      - input answer
      - button

# Component Structure

- App
  - Header
  - QuizScore
  - QuizForm
  - QuestionForm

# Component Functionality Flow

- App (quiz functionality (a way to show the next question, giving us the current score))
  - Header
  - QuizScore
  - QuizForm (form functionality)
  - QuestionForm (form functionality)

# Component Data Flow

- App (needs nothing, provide: score0, validateAnswer(), addQuestion(), question"")
  - Header (needs nothing)
  - QuizScore (needs score value)
  - QuizForm (needs a way to validate the answer, needs the question text)
  - QuestionForm (needs a way to add a question)
