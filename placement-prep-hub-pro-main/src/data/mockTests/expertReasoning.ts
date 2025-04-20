
import { MockQuestion } from '@/types';

const expertReasoningQuestions: MockQuestion[] = [
  {
    id: 1,
    question: "In a certain code language, 'pit dar na' means 'you are good', 'dar tok pa' means 'good and bad' and 'tim na tok' means 'they are bad'. What is the code for 'and' in that language?",
    options: ["na", "dar", "tok", "pa"],
    correctAnswer: 3
  },
  {
    id: 2,
    question: "Complete the analogy: Clock : Time :: Thermometer : ?",
    options: ["Heat", "Energy", "Temperature", "Weather"],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "In a 4×4 grid of letters, if A appears in position (2,3), B appears in position (1,2), C appears in position (3,1), and D appears in position (4,4), where will E appear if the pattern continues?",
    options: ["(1,4)", "(2,1)", "(3,4)", "(4,2)"],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Four friends A, B, C, and D are seated in a row. A sits next to B but not next to C. D does not sit next to A. C and D sit next to each other. Who sits at the extreme ends?",
    options: ["A and B", "A and C", "B and C", "B and D"],
    correctAnswer: 3
  },
  {
    id: 5,
    question: "6 people - A, B, C, D, E, and F - need to be arranged in a line. If B must be to the left of C, E must be to the right of D, and F must be either first or last, how many possible arrangements are there?",
    options: ["144", "240", "288", "360"],
    correctAnswer: 2
  }
];

export default expertReasoningQuestions;
