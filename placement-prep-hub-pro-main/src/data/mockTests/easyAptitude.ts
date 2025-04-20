
import { MockQuestion } from '@/types';

const easyAptitudeQuestions: MockQuestion[] = [
  {
    id: 1,
    question: "If a car travels at a speed of 60 km/hr, how many meters will it cover in 1 minute?",
    options: ["600 meters", "1000 meters", "1600 meters", "6000 meters"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "A person's salary is increased by 10% and then decreased by 10%. The final effect on his salary is:",
    options: ["No change", "1% increase", "1% decrease", "2% decrease"],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "The average of 5 consecutive numbers is 30. What is the largest number?",
    options: ["28", "30", "32", "34"],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "A and B can do a work in 15 days, B and C can do the same work in 12 days, A and C can do it in 10 days. How long will it take for all three working together?",
    options: ["5 days", "7.5 days", "8 days", "10 days"],
    correctAnswer: 1
  },
  {
    id: 5,
    question: "A train crosses a platform of length 100 meters in 10 seconds. If the speed of the train is 36 km/hr, then what is the length of the train?",
    options: ["50 meters", "60 meters", "80 meters", "100 meters"],
    correctAnswer: 0
  }
];

export default easyAptitudeQuestions;
