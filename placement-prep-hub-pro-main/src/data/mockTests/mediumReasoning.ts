
import { MockQuestion } from '@/types';

const mediumReasoningQuestions: MockQuestion[] = [
  {
    id: 1,
    question: "If in a certain language, MONKEY is coded as XDJMNL, how is TIGER coded in that language?",
    options: ["QDFHS", "SHFDQ", "SDFHS", "UJHFS"],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "If 'A' is coded as 1, 'B' as 2, and so on, what will be the sum of the code numbers for the word 'COMPUTER'?",
    options: ["87", "88", "89", "90"],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "In a row of 40 students, R is 11th from the right end and C is 12th from the left end. How many students are there between R and C?",
    options: ["17", "18", "19", "16"],
    correctAnswer: 0
  },
  {
    id: 4,
    question: "In the following series, what will be the 10th term? 3, 8, 15, 24, 35, ...",
    options: ["99", "108", "111", "115"],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "Statement: All pens are pencils. All pencils are inks. Conclusion I: All pens are inks. Conclusion II: All inks are pens.",
    options: ["Only I follows", "Only II follows", "Both I and II follow", "Neither I nor II follows"],
    correctAnswer: 0
  }
];

export default mediumReasoningQuestions;
