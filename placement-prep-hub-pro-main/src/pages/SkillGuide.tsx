
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Brain, Code, BookOpen, MessageSquare, Trophy } from 'lucide-react';

const SkillGuide: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Skill Guide</h1>
        <p className="text-gray-600 mt-2">Learn what skills to focus on for placement success</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Preparation Roadmap</CardTitle>
          <CardDescription>A comprehensive guide to prepare for placements</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="beginner" className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="beginner">Beginner Level</TabsTrigger>
              <TabsTrigger value="intermediate">Intermediate Level</TabsTrigger>
              <TabsTrigger value="advanced">Advanced Level</TabsTrigger>
            </TabsList>

            <TabsContent value="beginner" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Brain className="text-placemate-blue mt-1" />
                    <div>
                      <h3 className="font-semibold">Aptitude Basics</h3>
                      <p className="text-sm text-gray-600">
                        Focus on building a strong foundation in basic mathematics: arithmetic, percentages, time and work, probability, and data interpretation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Brain className="text-placemate-blue mt-1" />
                    <div>
                      <h3 className="font-semibold">Logical Reasoning</h3>
                      <p className="text-sm text-gray-600">
                        Practice simple puzzles, series completion, coding-decoding exercises, and basic logical deductions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageSquare className="text-placemate-blue mt-1" />
                    <div>
                      <h3 className="font-semibold">Communication Skills</h3>
                      <p className="text-sm text-gray-600">
                        Work on basic grammar, vocabulary, and simple conversational English. Practice speaking clearly and confidently.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Code className="text-placemate-blue mt-1" />
                    <div>
                      <h3 className="font-semibold">Programming Fundamentals</h3>
                      <p className="text-sm text-gray-600">
                        Learn one programming language thoroughly. Master variables, loops, conditionals, functions, and basic data structures like arrays.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <BookOpen className="text-placemate-blue mt-1" />
                    <div>
                      <h3 className="font-semibold">Core Subjects</h3>
                      <p className="text-sm text-gray-600">
                        Review fundamental concepts in your core subjects. For CS/IT: Computer Networks, Operating Systems, and Database basics.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Trophy className="text-placemate-blue mt-1" />
                    <div>
                      <h3 className="font-semibold">Project Work</h3>
                      <p className="text-sm text-gray-600">
                        Start building simple projects to apply your learning and add to your resume.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="intermediate" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Brain className="text-placemate-blue mt-1" />
                    <div>
                      <h3 className="font-semibold">Advanced Aptitude</h3>
                      <p className="text-sm text-gray-600">
                        Tackle more complex problems in permutation, combination, probability, and advanced arithmetic. Practice time-bound solving.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Brain className="text-placemate-blue mt-1" />
                    <div>
                      <h3 className="font-semibold">Complex Reasoning</h3>
                      <p className="text-sm text-gray-600">
                        Practice complex puzzles, seating arrangements, syllogisms, and logical deductions with multiple variables.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Code className="text-placemate-blue mt-1" />
                    <div>
                      <h3 className="font-semibold">Data Structures</h3>
                      <p className="text-sm text-gray-600">
                        Master linked lists, stacks, queues, trees, and basic graph implementations. Understand their applications.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Code className="text-placemate-blue mt-1" />
                    <div>
                      <h3 className="font-semibold">Basic Algorithms</h3>
                      <p className="text-sm text-gray-600">
                        Learn sorting algorithms, binary search, recursion, and basic dynamic programming. Analyze time and space complexity.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageSquare className="text-placemate-blue mt-1" />
                    <div>
                      <h3 className="font-semibold">Interview Preparation</h3>
                      <p className="text-sm text-gray-600">
                        Practice answering common interview questions. Develop your personal story and learn to articulate your strengths.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Trophy className="text-placemate-blue mt-1" />
                    <div>
                      <h3 className="font-semibold">Complex Projects</h3>
                      <p className="text-sm text-gray-600">
                        Build more sophisticated projects implementing different technologies and frameworks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="advanced" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Code className="text-placemate-blue mt-1" />
                    <div>
                      <h3 className="font-semibold">Advanced Algorithms</h3>
                      <p className="text-sm text-gray-600">
                        Master advanced topics like dynamic programming, graph algorithms, greedy algorithms, and backtracking. Solve complex problems efficiently.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <BookOpen className="text-placemate-blue mt-1" />
                    <div>
                      <h3 className="font-semibold">System Design</h3>
                      <p className="text-sm text-gray-600">
                        Learn fundamentals of designing scalable systems. Understand load balancing, caching, database sharding, and microservices architecture.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Brain className="text-placemate-blue mt-1" />
                    <div>
                      <h3 className="font-semibold">Competitive Programming</h3>
                      <p className="text-sm text-gray-600">
                        Participate in contests on platforms like LeetCode, CodeForces, and HackerRank to improve problem-solving speed and accuracy.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MessageSquare className="text-placemate-blue mt-1" />
                    <div>
                      <h3 className="font-semibold">Mock Interviews</h3>
                      <p className="text-sm text-gray-600">
                        Conduct regular mock interviews with peers or mentors. Get feedback and work on improving your weak areas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Trophy className="text-placemate-blue mt-1" />
                    <div>
                      <h3 className="font-semibold">Industry Projects</h3>
                      <p className="text-sm text-gray-600">
                        Build end-to-end solutions addressing real-world problems. Consider contributing to open-source projects.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <BookOpen className="text-placemate-blue mt-1" />
                    <div>
                      <h3 className="font-semibold">Company-Specific Preparation</h3>
                      <p className="text-sm text-gray-600">
                        Research target companies and tailor your preparation to their specific requirements, technologies, and interview patterns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default SkillGuide;
