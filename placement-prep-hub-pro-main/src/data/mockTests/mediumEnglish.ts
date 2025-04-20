
import { MockQuestion } from '@/types';

const mediumEnglishQuestions: MockQuestion[] = [
  {
    id: 1,
    question: "Choose the correct meaning of the idiom 'Bite the bullet':",
    options: ["Be angry", "Do something difficult", "Waste time", "Start a fight"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Arrange the words to form a meaningful sentence: 1. intelligence 2. success 3. hard work 4. than 5. more 6. leads to 7. sometimes",
    options: ["1, 5, 4, 3, 7, 6, 2", "7, 1, 5, 4, 3, 6, 2", "3, 6, 2, 5, 4, 1, 7", "7, 3, 5, 4, 1, 6, 2"],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Choose the correct passive voice for: 'The chef is preparing the dinner.'",
    options: ["The dinner is prepared by the chef.", "The dinner is being prepared by the chef.", "The dinner was prepared by the chef.", "The dinner was being prepared by the chef."],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Complete the analogy: Pen : Write :: Knife : ?",
    options: ["Sharp", "Cut", "Kitchen", "Slice"],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "Identify the correct sentence:",
    options: ["They were going to the party, but changed their minds.", "They was going to the party, but changed their minds.", "They were going to the party, but changed its mind.", "They was going to the party, but changed its mind."],
    correctAnswer: 0
  }
];

export default mediumEnglishQuestions;
