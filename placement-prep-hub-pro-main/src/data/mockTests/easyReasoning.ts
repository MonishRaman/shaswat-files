
import { MockQuestion } from '@/types';

const easyReasoningQuestions: MockQuestion[] = [
  {
    id: 1,
    question: "In a certain code, COMPUTER is written as PMCORETU. How will TELEPHONE be written in the same code?",
    options: ["LETEPEHON", "HPOEETLEN", "ETELPHONE", "TELEPHONE"],
    correctAnswer: 0
  },
  {
    id: 2,
    question: "If 3 + 5 = 28, 6 + 8 = 98, 2 + 7 = 63, then what is 4 + 9 = ?",
    options: ["67", "85", "113", "104"],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "Find the odd one out: Apple, Banana, Orange, Tomato, Mango",
    options: ["Apple", "Banana", "Orange", "Tomato"],
    correctAnswer: 3
  },
  {
    id: 4,
    question: "In a row of children, Ravi is 15th from the left end and 20th from the right end. How many children are there in the row?",
    options: ["33", "34", "35", "36"],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "Which figure comes next in the sequence? □, △, ○, □, △, ?",
    options: ["□", "△", "○", "☆"],
    correctAnswer: 2
  }
];

export default easyReasoningQuestions;
