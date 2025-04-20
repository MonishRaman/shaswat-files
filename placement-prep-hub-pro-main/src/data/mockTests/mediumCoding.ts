
import { MockQuestion } from '@/types';

const mediumCodingQuestions: MockQuestion[] = [
  {
    id: 1,
    question: "What is the output of the following code? let arr = [1, 2, 3]; console.log(arr.map(x => x * 2));",
    options: ["[1, 2, 3]", "[2, 4, 6]", "[3, 6, 9]", "Error"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Which sorting algorithm has the best average-case time complexity?",
    options: ["Bubble Sort", "Quick Sort", "Insertion Sort", "Selection Sort"],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "In object-oriented programming, what is encapsulation?",
    options: ["The ability of a class to inherit from multiple parent classes", "The process of combining data and functions into a single unit", "The ability to hide implementation details while showing functionality", "The practice of creating multiple objects from a single class"],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "What does the async keyword do in JavaScript?",
    options: ["Makes a function run in a separate thread", "Makes a function return a Promise", "Makes a function run synchronously", "Prevents a function from being called more than once"],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "What is the result of the following expression in JavaScript? null == undefined",
    options: ["true", "false", "TypeError", "ReferenceError"],
    correctAnswer: 0
  }
];

export default mediumCodingQuestions;
