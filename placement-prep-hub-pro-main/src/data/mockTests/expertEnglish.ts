
import { MockQuestion } from '@/types';

const expertEnglishQuestions: MockQuestion[] = [
  {
    id: 1,
    question: "Choose the correct meaning of the phrase 'Pyrrhic victory':",
    options: ["A victory with no casualties", "A victory with fire", "A victory that comes at a great cost", "A victory against all odds"],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "Identify the rhetorical device used in: 'The dark clouds gathered like an army preparing for battle.'",
    options: ["Metaphor", "Simile", "Hyperbole", "Personification"],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Choose the correct word to complete the sentence: 'The professor's lecture was so _____ that most students fell asleep.'",
    options: ["Soporific", "Energetic", "Stimulating", "Captivating"],
    correctAnswer: 0
  },
  {
    id: 4,
    question: "Which sentence demonstrates correct subject-verb agreement?",
    options: ["Either the manager or his assistants is going to the conference.", "Neither the flowers nor the vase were expensive.", "Both the doctor and the nurse has been notified.", "Each of the students have completed their assignments."],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "In the sentence 'The professor, along with her research assistants, is conducting groundbreaking research,' why is 'is' the correct verb form?",
    options: ["Because 'professor' is singular", "Because 'research assistants' is plural", "Because 'along with' creates a plural subject", "Because 'conducting' is the main verb"],
    correctAnswer: 0
  }
];

export default expertEnglishQuestions;
