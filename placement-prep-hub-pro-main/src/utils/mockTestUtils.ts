
import { MockQuestion } from '@/types';

// Import all question sets
import easyAptitudeQuestions from '@/data/mockTests/easyAptitude';
import mediumAptitudeQuestions from '@/data/mockTests/mediumAptitude';
import expertAptitudeQuestions from '@/data/mockTests/expertAptitude';

import easyReasoningQuestions from '@/data/mockTests/easyReasoning';
import mediumReasoningQuestions from '@/data/mockTests/mediumReasoning';
import expertReasoningQuestions from '@/data/mockTests/expertReasoning';

import easyEnglishQuestions from '@/data/mockTests/easyEnglish';
import mediumEnglishQuestions from '@/data/mockTests/mediumEnglish';
import expertEnglishQuestions from '@/data/mockTests/expertEnglish';

import easyCodingQuestions from '@/data/mockTests/easyCoding';
import mediumCodingQuestions from '@/data/mockTests/mediumCoding';
import expertCodingQuestions from '@/data/mockTests/expertCoding';

// Function to get questions based on category and difficulty
export const getMockTestQuestions = (
  category: 'aptitude' | 'reasoning' | 'english' | 'coding',
  difficulty: 'easy' | 'medium' | 'expert'
): MockQuestion[] => {
  const questionSets = {
    aptitude: {
      easy: easyAptitudeQuestions,
      medium: mediumAptitudeQuestions,
      expert: expertAptitudeQuestions
    },
    reasoning: {
      easy: easyReasoningQuestions,
      medium: mediumReasoningQuestions,
      expert: expertReasoningQuestions
    },
    english: {
      easy: easyEnglishQuestions,
      medium: mediumEnglishQuestions,
      expert: expertEnglishQuestions
    },
    coding: {
      easy: easyCodingQuestions,
      medium: mediumCodingQuestions,
      expert: expertCodingQuestions
    }
  };

  return questionSets[category][difficulty];
};
