
import { MockQuestion } from '@/types';

const expertCodingQuestions: MockQuestion[] = [
  {
    id: 1,
    question: "Which of the following is NOT a way to handle asynchronous operations in JavaScript?",
    options: ["Callbacks", "Promises", "Async/Await", "For loops"],
    correctAnswer: 3
  },
  {
    id: 2,
    question: "What's the time complexity of the following code? function f(n) { if (n <= 1) return 1; return f(n - 1) + f(n - 1); }",
    options: ["O(n)", "O(n log n)", "O(2^n)", "O(n^2)"],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "In a React component, what is the purpose of the useEffect hook?",
    options: ["To create state variables", "To perform side effects", "To optimize rendering", "To define component props"],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "What is the output of the following code? console.log(typeof NaN);",
    options: ["'number'", "'NaN'", "'undefined'", "'object'"],
    correctAnswer: 0
  },
  {
    id: 5,
    question: "Which of the following is NOT a valid way to create a new object in JavaScript?",
    options: ["let obj = {}", "let obj = new Object()", "let obj = Object.create(null)", "let obj = Object()"],
    correctAnswer: 3
  }
];

export default expertCodingQuestions;
