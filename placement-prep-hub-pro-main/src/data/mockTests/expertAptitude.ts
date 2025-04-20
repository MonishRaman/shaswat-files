
import { MockQuestion } from '@/types';

const expertAptitudeQuestions: MockQuestion[] = [
  {
    id: 1,
    question: "A sum of money doubles itself in 8 years at simple interest. If the interest rate is increased by 4%, how long will it take for the money to double?",
    options: ["5 years", "5.5 years", "6 years", "6.5 years"],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "Water flows into a tank which is 200 m long and 150 m wide, through a pipe of cross-section 0.3 m² at 20 km/hr. The time taken for the level of water to rise by 2.5 cm is:",
    options: ["1 hour", "1.25 hours", "1.5 hours", "1.75 hours"],
    correctAnswer: 3
  },
  {
    id: 3,
    question: "If a man, a woman, and a child together receive Rs.1,600 per day, a man and two children receive Rs.1,400, and a woman and two children receive Rs.1,300, how much does each child get?",
    options: ["Rs. 400", "Rs. 500", "Rs. 600", "Rs. 700"],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Three pipes A, B and C can fill a tank in 6 hours, 8 hours, and 12 hours respectively. If all the pipes are opened simultaneously, find the time taken to fill the tank?",
    options: ["2 hours 40 minutes", "2 hours 50 minutes", "3 hours", "3 hours 10 minutes"],
    correctAnswer: 0
  },
  {
    id: 5,
    question: "Two trains start simultaneously from two stations 300 km apart towards each other. If the first train travels at 40 km/hr and the other at 50 km/hr, how far from the first station will they meet?",
    options: ["120 km", "150 km", "160 km", "180 km"],
    correctAnswer: 2
  }
];

export default expertAptitudeQuestions;
