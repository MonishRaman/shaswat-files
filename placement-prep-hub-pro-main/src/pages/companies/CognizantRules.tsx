
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Building, Users, Award, Clock, AlertCircle, ArrowLeft, CreditCard } from 'lucide-react';

const CognizantRules: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Cognizant - Company Rules</h1>
          <p className="text-gray-600 mt-2">Understand Cognizant's hiring processes and eligibility criteria</p>
        </div>
        <Button 
          variant="outline" 
          onClick={() => navigate('/select-company')}
          className="flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          Back to Companies
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="bg-primary/5">
            <div className="flex items-center gap-2">
              <Building className="h-5 w-5 text-primary" />
              <CardTitle>Company Overview</CardTitle>
            </div>
            <CardDescription>Key facts about Cognizant</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div>
              <h3 className="font-medium">About</h3>
              <p className="text-sm text-gray-600">Cognizant is an American multinational information technology services and consulting company that provides business consulting, information technology and outsourcing services.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Headquarters</h3>
              <p className="text-sm text-gray-600">Teaneck, New Jersey, USA</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Industry</h3>
              <p className="text-sm text-gray-600">IT Services & Consulting</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-primary/5">
            <div className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-primary" />
              <CardTitle>Compensation Package</CardTitle>
            </div>
            <CardDescription>Salary and benefits information</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div>
              <h3 className="font-medium">Programmer Analyst Trainee</h3>
              <p className="text-sm text-gray-600">₹4.0 LPA - ₹4.5 LPA</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Programmer Analyst</h3>
              <p className="text-sm text-gray-600">₹5.5 LPA - ₹6.5 LPA</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Benefits</h3>
              <p className="text-sm text-gray-600">Health insurance, retirement benefits, flexible working, education assistance, wellness programs</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-primary/5">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <CardTitle>Interview Process</CardTitle>
            </div>
            <CardDescription>Typical stages in the selection process</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div>
              <h3 className="font-medium">Round 1: Online Assessment</h3>
              <p className="text-sm text-gray-600">Aptitude, logical reasoning, verbal ability, and technical questions.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 2: Technical Interview</h3>
              <p className="text-sm text-gray-600">Questions on core concepts, programming, and problem-solving.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 3: HR Interview</h3>
              <p className="text-sm text-gray-600">Discussion about background, career goals, and company fit.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 4: Managerial Round (For Some Positions)</h3>
              <p className="text-sm text-gray-600">Assessment of leadership skills and fit for specific roles.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-primary/5">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <CardTitle>Eligibility Criteria</CardTitle>
            </div>
            <CardDescription>Requirements to apply</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div>
              <h3 className="font-medium">Academic Performance</h3>
              <p className="text-sm text-gray-600">Minimum 60% or 6.0 CGPA throughout academics (X, XII, and graduation).</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Backlogs</h3>
              <p className="text-sm text-gray-600">Maximum 2 backlogs allowed, must be cleared before joining.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Gap Years</h3>
              <p className="text-sm text-gray-600">Maximum 1 year gap allowed in education with valid justification.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Eligible Degrees</h3>
              <p className="text-sm text-gray-600">BE/B.Tech, ME/M.Tech, MCA, MSc (CS/IT), BCA from recognized universities.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 md:col-span-2">
          <CardHeader className="bg-primary/5">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-primary" />
              <CardTitle>Selection Tips & Notes</CardTitle>
            </div>
            <CardDescription>Important information for candidates</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium">Preparation Focus</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                  <li>Strong programming fundamentals (Java, Python, C++)</li>
                  <li>Database concepts and SQL queries</li>
                  <li>Data structures and algorithms</li>
                  <li>Communication and problem-solving skills</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Company Culture</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                  <li>Client-first approach</li>
                  <li>Collaborative work environment</li>
                  <li>Innovation and continuous learning</li>
                  <li>Work-life balance focus</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Additional Notes</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                  <li>Service agreement of 12-24 months for fresh graduates</li>
                  <li>Comprehensive training period of 3-4 months</li>
                  <li>Global project opportunities</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Recent Trends</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                  <li>Increased focus on digital engineering skills</li>
                  <li>Cloud and DevOps expertise in high demand</li>
                  <li>AI and machine learning capabilities valued</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CognizantRules;
