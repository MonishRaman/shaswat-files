import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { AlertCircle, CheckCircle, Clock, Trophy } from 'lucide-react';
import { MockQuestion } from '../types';
import { getMockTestQuestions } from '@/utils/mockTestUtils';

interface TestConfig {
  level: 'easy' | 'medium' | 'expert';
  category: 'aptitude' | 'reasoning' | 'english' | 'coding';
}

const MockTest: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'levels' | 'test' | 'results'>('levels');
  const [selectedLevel, setSelectedLevel] = useState<'easy' | 'medium' | 'expert' | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<'aptitude' | 'reasoning' | 'english' | 'coding' | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes
  const [testInProgress, setTestInProgress] = useState(false);
  const [testComplete, setTestComplete] = useState(false);
  const [questions, setQuestions] = useState<MockQuestion[]>([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Check URL parameters for test configuration
    const params = new URLSearchParams(location.search);
    const level = params.get('level') as 'easy' | 'medium' | 'expert' | null;
    const category = params.get('category') as 'aptitude' | 'reasoning' | 'english' | 'coding' | null;
    
    if (level && category) {
      startTest({ level, category });
    }
  }, [location]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (testInProgress && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && testInProgress) {
      finishTest();
    }
    
    return () => clearTimeout(timer);
  }, [timeLeft, testInProgress]);

  const startTest = (config: TestConfig) => {
    setSelectedLevel(config.level);
    setSelectedCategory(config.category);
    
    // Get questions for the selected category and difficulty level
    const testQuestions = getMockTestQuestions(config.category, config.level);
    console.log(`Loading ${config.level} ${config.category} questions:`, testQuestions);
    
    setQuestions(testQuestions);
    setCurrentQuestion(0);
    setSelectedAnswers(Array(testQuestions.length).fill(-1));
    setTimeLeft(900); // Reset timer to 15 minutes
    setTestInProgress(true);
    setTestComplete(false);
    setActiveTab('test');
    
    // Update URL
    navigate(`/mock-test?level=${config.level}&category=${config.category}`, { replace: true });
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const goToNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const finishTest = () => {
    setTestInProgress(false);
    setTestComplete(true);
    
    // Calculate score
    let correctAnswers = 0;
    for (let i = 0; i < questions.length; i++) {
      if (selectedAnswers[i] === questions[i].correctAnswer) {
        correctAnswers++;
      }
    }
    
    setScore(correctAnswers);
    setActiveTab('results');
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const renderLevelSelection = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Choose Difficulty Level</CardTitle>
          <CardDescription>Select the difficulty level for your mock test</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card 
              className="cursor-pointer hover:border-placemate-blue transition-colors"
              onClick={() => setSelectedLevel('easy')}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Easy Level</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Basic questions suitable for beginners and practice
                </p>
              </CardContent>
              <CardFooter>
                {selectedLevel === 'easy' && (
                  <span className="text-placemate-blue font-medium">Selected</span>
                )}
              </CardFooter>
            </Card>
            
            <Card 
              className="cursor-pointer hover:border-placemate-blue transition-colors"
              onClick={() => setSelectedLevel('medium')}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Medium Level</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Moderate difficulty questions for intermediate practice
                </p>
              </CardContent>
              <CardFooter>
                {selectedLevel === 'medium' && (
                  <span className="text-placemate-blue font-medium">Selected</span>
                )}
              </CardFooter>
            </Card>
            
            <Card 
              className="cursor-pointer hover:border-placemate-blue transition-colors"
              onClick={() => setSelectedLevel('expert')}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Expert Level</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Advanced questions for experienced test-takers
                </p>
              </CardContent>
              <CardFooter>
                {selectedLevel === 'expert' && (
                  <span className="text-placemate-blue font-medium">Selected</span>
                )}
              </CardFooter>
            </Card>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Choose Category</CardTitle>
          <CardDescription>Select the category for your mock test</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card 
              className="cursor-pointer hover:border-placemate-blue transition-colors"
              onClick={() => setSelectedCategory('aptitude')}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Aptitude</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Mathematical and logical aptitude questions
                </p>
              </CardContent>
              <CardFooter>
                {selectedCategory === 'aptitude' && (
                  <span className="text-placemate-blue font-medium">Selected</span>
                )}
              </CardFooter>
            </Card>
            
            <Card 
              className="cursor-pointer hover:border-placemate-blue transition-colors"
              onClick={() => setSelectedCategory('reasoning')}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Reasoning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Logical reasoning and problem-solving
                </p>
              </CardContent>
              <CardFooter>
                {selectedCategory === 'reasoning' && (
                  <span className="text-placemate-blue font-medium">Selected</span>
                )}
              </CardFooter>
            </Card>
            
            <Card 
              className="cursor-pointer hover:border-placemate-blue transition-colors"
              onClick={() => setSelectedCategory('english')}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">English</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Grammar, vocabulary, and comprehension
                </p>
              </CardContent>
              <CardFooter>
                {selectedCategory === 'english' && (
                  <span className="text-placemate-blue font-medium">Selected</span>
                )}
              </CardFooter>
            </Card>
            
            <Card 
              className="cursor-pointer hover:border-placemate-blue transition-colors"
              onClick={() => setSelectedCategory('coding')}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Coding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Programming and data structure concepts
                </p>
              </CardContent>
              <CardFooter>
                {selectedCategory === 'coding' && (
                  <span className="text-placemate-blue font-medium">Selected</span>
                )}
              </CardFooter>
            </Card>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-end">
        <Button 
          onClick={() => {
            if (selectedLevel && selectedCategory) {
              startTest({ level: selectedLevel, category: selectedCategory });
            }
          }}
          disabled={!selectedLevel || !selectedCategory}
          className="bg-placemate-blue hover:bg-placemate-darkblue"
        >
          Start Test
        </Button>
      </div>
    </div>
  );

  const renderTestInterface = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">
            {selectedCategory?.charAt(0).toUpperCase() + selectedCategory?.slice(1)} Test - {selectedLevel?.charAt(0).toUpperCase() + selectedLevel?.slice(1)} Level
          </h2>
          <p className="text-gray-600">Question {currentQuestion + 1} of {questions.length}</p>
        </div>
        <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-md">
          <Clock size={20} className="text-placemate-blue" />
          <span className="font-medium">{formatTime(timeLeft)}</span>
        </div>
      </div>
      
      <Progress value={(currentQuestion + 1) / questions.length * 100} className="h-2" />
      
      <Card>
        <CardHeader>
          <CardTitle>Question {currentQuestion + 1}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <p className="text-lg">{questions[currentQuestion]?.question}</p>
            
            <RadioGroup 
              value={selectedAnswers[currentQuestion]?.toString() || ''}
              onValueChange={(value) => handleAnswerSelect(parseInt(value))}
              className="space-y-4"
            >
              {questions[currentQuestion]?.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="cursor-pointer">{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={goToPreviousQuestion}
            disabled={currentQuestion === 0}
          >
            Previous
          </Button>
          
          {currentQuestion < questions.length - 1 ? (
            <Button onClick={goToNextQuestion}>Next</Button>
          ) : (
            <Button 
              onClick={finishTest}
              className="bg-placemate-blue hover:bg-placemate-darkblue"
            >
              Finish Test
            </Button>
          )}
        </CardFooter>
      </Card>
      
      <div className="grid grid-cols-5 md:grid-cols-15 gap-2">
        {Array.from({ length: questions.length }, (_, i) => (
          <Button
            key={i}
            variant={i === currentQuestion ? "default" : selectedAnswers[i] >= 0 ? "outline" : "ghost"}
            className={`w-10 h-10 p-0 ${selectedAnswers[i] >= 0 ? 'border-placemate-blue text-placemate-blue' : ''}`}
            onClick={() => setCurrentQuestion(i)}
          >
            {i + 1}
          </Button>
        ))}
      </div>
    </div>
  );

  const renderTestResults = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Test Results</CardTitle>
          <CardDescription>
            {selectedCategory?.charAt(0).toUpperCase() + selectedCategory?.slice(1)} Test - {selectedLevel?.charAt(0).toUpperCase() + selectedLevel?.slice(1)} Level
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-center">
            <div className="relative w-48 h-48">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  className="text-gray-200"
                  strokeWidth="8"
                  stroke="currentColor"
                  fill="transparent"
                  r="44"
                  cx="50"
                  cy="50"
                />
                <circle
                  className={`${score >= 40 ? 'text-green-500' : 'text-red-500'}`}
                  strokeWidth="8"
                  stroke="currentColor"
                  fill="transparent"
                  r="44"
                  cx="50"
                  cy="50"
                  strokeDasharray="276.5"
                  strokeDashoffset={276.5 - (276.5 * score) / questions.length}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-4xl font-bold">{score}</p>
                <p className="text-gray-500">out of {questions.length}</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            {score >= 40 ? (
              <div className="flex flex-col items-center text-green-600">
                <CheckCircle size={48} className="mb-2" />
                <h3 className="text-xl font-semibold">Congratulations!</h3>
                <p>You've passed the test with a score of {score} out of {questions.length}.</p>
              </div>
            ) : (
              <div className="flex flex-col items-center text-red-600">
                <AlertCircle size={48} className="mb-2" />
                <h3 className="text-xl font-semibold">Keep practicing!</h3>
                <p>You've scored {score} out of {questions.length}. Passing score is 40.</p>
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t pt-6">
            <div className="text-center">
              <h4 className="font-medium">Correct Answers</h4>
              <p className="text-2xl font-bold text-green-500">{score}</p>
            </div>
            <div className="text-center">
              <h4 className="font-medium">Incorrect Answers</h4>
              <p className="text-2xl font-bold text-red-500">{questions.length - score}</p>
            </div>
            <div className="text-center">
              <h4 className="font-medium">Accuracy</h4>
              <p className="text-2xl font-bold">{Math.round((score / questions.length) * 100)}%</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center gap-4">
          <Button 
            variant="outline" 
            onClick={() => setActiveTab('levels')}
          >
            Try Another Test
          </Button>
          <Button 
            className="bg-placemate-blue hover:bg-placemate-darkblue"
            onClick={() => {
              if (selectedLevel && selectedCategory) {
                startTest({ level: selectedLevel, category: selectedCategory });
              }
            }}
          >
            Retry Test
          </Button>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Question Analysis</CardTitle>
          <CardDescription>Review your answers and correct solutions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {questions.map((question, index) => (
            <div key={index} className="border rounded-md p-4">
              <div className="flex justify-between">
                <h3 className="font-medium">Question {index + 1}</h3>
                {selectedAnswers[index] === question.correctAnswer ? (
                  <span className="text-green-500 flex items-center">
                    <CheckCircle size={16} className="mr-1" /> Correct
                  </span>
                ) : (
                  <span className="text-red-500 flex items-center">
                    <AlertCircle size={16} className="mr-1" /> Incorrect
                  </span>
                )}
              </div>
              <p className="my-2">{question.question}</p>
              <div className="space-y-1 mt-2">
                {question.options.map((option, optIndex) => (
                  <div 
                    key={optIndex} 
                    className={`p-2 rounded ${
                      optIndex === question.correctAnswer 
                        ? 'bg-green-100 border-green-300 border' 
                        : optIndex === selectedAnswers[index] && optIndex !== question.correctAnswer
                          ? 'bg-red-100 border-red-300 border'
                          : ''
                    }`}
                  >
                    {option}
                    {optIndex === question.correctAnswer && (
                      <span className="ml-2 text-green-600 text-sm">(Correct Answer)</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Mock Test</h1>
        <p className="text-gray-600 mt-2">Practice with simulated placement tests</p>
      </div>

      <Tabs value={activeTab} className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger 
            value="levels" 
            onClick={() => !testInProgress && setActiveTab('levels')}
            disabled={testInProgress}
          >
            Select Test
          </TabsTrigger>
          <TabsTrigger 
            value="test" 
            disabled={!testInProgress}
          >
            Take Test
          </TabsTrigger>
          <TabsTrigger 
            value="results" 
            disabled={!testComplete}
          >
            Results
          </TabsTrigger>
        </TabsList>

        <TabsContent value="levels">
          {renderLevelSelection()}
        </TabsContent>

        <TabsContent value="test">
          {renderTestInterface()}
        </TabsContent>

        <TabsContent value="results">
          {renderTestResults()}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MockTest;
