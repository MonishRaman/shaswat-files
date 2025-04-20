
import { MockQuestion } from '@/types';

const easyCodingQuestions: MockQuestion[] = [
  {
    id: 1,
    question: "What is the output of the following code? var x = 10; x += 5; console.log(x);",
    options: ["10", "15", "5", "Error"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Which data structure operates on the LIFO (Last In First Out) principle?",
    options: ["Queue", "Stack", "Linked List", "Tree"],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "What is the time complexity of searching for an element in a sorted array using binary search?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Which of the following is not a programming language?",
    options: ["Python", "Java", "HTML", "C++"],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "What does the following code print? for(int i=0; i<5; i++) { if(i==2) continue; console.log(i); }",
    options: ["0 1 2 3 4", "0 1 3 4", "0 1 2 4", "1 2 3 4"],
    correctAnswer: 1
  }
];

export default easyCodingQuestions;
