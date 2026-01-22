import React, { useState, useEffect } from 'react';
import './Quizzes.css';

const quizQuestions = [
  { 
    question: "What is React?", 
    options: ["A library", "A framework", "A language"], 
    correctAnswer: "A library" 
  },
  { 
    question: "What is JSX?", 
    options: ["A syntax extension for JavaScript", "A style sheet", "A library"], 
    correctAnswer: "A syntax extension for JavaScript" 
  },
  {
    question: "What does CSS stand for?", 
    options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets"], 
    correctAnswer: "Cascading Style Sheets" 
  },
  {
    question: "Which one is a JavaScript framework?", 
    options: ["React", "Bootstrap", "MongoDB"], 
    correctAnswer: "React" 
  },
  {
    question: "What does HTML stand for?", 
    options: ["HyperText Markup Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"], 
    correctAnswer: "HyperText Markup Language" 
  },
  {
    question: "What is the purpose of the `useState` hook in React?", 
    options: ["To store and manage local component state", "To fetch data from an API", "To create animations"], 
    correctAnswer: "To store and manage local component state" 
  },
  {
    question: "Which HTML tag is used to define a hyperlink?", 
    options: ["<link>", "<a>", "<href>"], 
    correctAnswer: "<a>" 
  },
  {
    question: "What is the correct syntax to add a comment in JavaScript?", 
    options: ["// This is a comment", "<!-- This is a comment -->", "# This is a comment"], 
    correctAnswer: "// This is a comment" 
  },
  {
    question: "Which of the following is used for state management in React?", 
    options: ["React Router", "Redux", "React DOM"], 
    correctAnswer: "Redux" 
  },
  {
    question: "Which programming language is used for machine learning?", 
    options: ["Python", "C#", "JavaScript"], 
    correctAnswer: "Python" // New question added
  },
];

function Quizzes() {
  const [answers, setAnswers] = useState([]); // Stores user answers
  const [score, setScore] = useState(0); // Tracks the score
  const [timeLeft, setTimeLeft] = useState(60); // Timer
  const [answered, setAnswered] = useState(false); // To disable further answers after submission

  // Timer countdown functionality
  useEffect(() => {
    if (timeLeft > 0 && !answered) {
      const timer = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, answered]);

  // Handle answer selection and score calculation
  const handleAnswer = (question, answer) => {
    if (answers.some((ans) => ans.question === question)) return; // Prevent multiple selections for the same question
    
    const correct = answer === question.correctAnswer;
    setAnswers((prevAnswers) => [...prevAnswers, { question, answer, correct }]);

    if (correct) {
      setScore(score + 1); // Increase score for correct answer
    }
    
    if (answers.length === quizQuestions.length - 1) {
      setAnswered(true); // End quiz when all questions are answered
    }
  };

  // Calculate progress bar percentage
  const progressPercentage = (answers.length / quizQuestions.length) * 100;

  return (
    <div className="quiz">
      <h2>Take the Quiz</h2>
      <p>Time left: {timeLeft}s</p>

      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
      </div>

      {quizQuestions.map((question, index) => (
        <div key={index} className="quiz-question">
          <p className="question-number">Question {index + 1}:</p>
          <p>{question.question}</p>
          {question.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(question, option)}
              disabled={answered}
              className={answers.some(ans => ans.question === question && ans.answer === option) ? 
                (option === question.correctAnswer ? 'correct' : 'incorrect') : ''}
            >
              {option}
            </button>
          ))}

          {/* Feedback for each answer */}
          {answers.filter(ans => ans.question === question).map((ans, idx) => (
            <p key={idx} style={{ color: ans.correct ? 'green' : 'red' }}>
              {ans.correct ? 'Correct' : 'Incorrect'}
            </p>
          ))}
        </div>
      ))}

      {/* Score display */}
      <h3>Your Score: {score}/{quizQuestions.length}</h3>
    </div>
  );
}

export default Quizzes;
