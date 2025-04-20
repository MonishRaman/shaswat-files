
export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface MockQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface MockTest {
  id: number;
  category: 'aptitude' | 'reasoning' | 'english' | 'coding';
  difficulty: 'easy' | 'medium' | 'expert';
  questions: MockQuestion[];
}

export interface ResumeData {
  personalInfo: {
    fullName: string;
    address: string;
    phone: string;
    email: string;
    objective: string;
    profileImage?: string;
  };
  education: {
    degree: string;
    institution: string;
    graduationDate: string;
    gpa?: string;
    achievements?: string;
  };
  experience: {
    internship: string;
    company: string;
    duration: string;
    role: string;
    responsibilities: string;
  };
  skills: string[];
  projects: {
    name: string;
    description: string;
  }[];
  achievements?: string[];
}

export type ResumeTemplate = 'blue' | 'orange' | 'brown';
