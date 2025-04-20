
import { MockQuestion } from '@/types';

const easyEnglishQuestions: MockQuestion[] = [
  {
    id: 1,
    question: "Choose the correct spelling:",
    options: ["Accommadation", "Accomodation", "Accommodation", "Accomidation"],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "Choose the synonym for 'Happy':",
    options: ["Sad", "Joyful", "Angry", "Worried"],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Fill in the blank: She ___ to the store yesterday.",
    options: ["go", "goes", "went", "gone"],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "Choose the antonym for 'Generous':",
    options: ["Kind", "Stingy", "Wealthy", "Grateful"],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "Identify the error in the sentence: 'Neither of the boys have completed their homework.'",
    options: ["Neither", "boys", "have", "their"],
    correctAnswer: 2
  }
];

export default easyEnglishQuestions;
