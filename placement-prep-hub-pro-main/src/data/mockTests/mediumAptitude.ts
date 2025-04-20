
import { MockQuestion } from '@/types';

const mediumAptitudeQuestions: MockQuestion[] = [
  {
    id: 1,
    question: "Two trains are running at 40 km/hr and 60 km/hr in opposite directions. How much time will they take to cross each other if the length of each train is 120 meters?",
    options: ["6 seconds", "9 seconds", "12 seconds", "18 seconds"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "A mixture of 75 liters contains milk and water in the ratio 7:8. How much water must be added to make the ratio 7:10?",
    options: ["5 liters", "8.75 liters", "10 liters", "15 liters"],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "The compound interest on a certain sum of money for 2 years at 10% per annum is Rs. 525. The simple interest on the same sum at the same rate and for the same time is:",
    options: ["Rs. 500", "Rs. 505", "Rs. 510", "Rs. 515"],
    correctAnswer: 0
  },
  {
    id: 4,
    question: "If a man walks at 5 km/hr instead of 4 km/hr, he would have walked 20 km more in the same time. The actual distance is:",
    options: ["80 km", "100 km", "120 km", "160 km"],
    correctAnswer: 0
  },
  {
    id: 5,
    question: "A can finish a work in 18 days and B can do the same work in 15 days. B worked for 10 days and left the job. In how many days, A alone can finish the remaining work?",
    options: ["5 days", "6 days", "8 days", "9 days"],
    correctAnswer: 1
  }
];

export default mediumAptitudeQuestions;
