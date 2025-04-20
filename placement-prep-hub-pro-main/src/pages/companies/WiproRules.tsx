
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Building, Users, Award, Clock, AlertCircle, ArrowLeft, CreditCard } from 'lucide-react';

const WiproRules: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Wipro - Company Rules</h1>
          <p className="text-gray-600 mt-2">Understand Wipro's hiring processes and eligibility criteria</p>
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
            <CardDescription>Key facts about Wipro</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div>
              <h3 className="font-medium">About</h3>
              <p className="text-sm text-gray-600">Wipro Limited is an Indian multinational corporation that provides information technology, consulting, and business process services globally.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Headquarters</h3>
              <p className="text-sm text-gray-600">Bengaluru, India</p>
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
              <h3 className="font-medium">Project Engineer</h3>
              <p className="text-sm text-gray-600">₹3.5 LPA - ₹4.0 LPA</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Elite/Turbo Package</h3>
              <p className="text-sm text-gray-600">₹6.5 LPA - ₹8.0 LPA</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Benefits</h3>
              <p className="text-sm text-gray-600">Health insurance, provident fund, gratuity, leave benefits, learning & development programs</p>
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
              <p className="text-sm text-gray-600">Aptitude test, logical reasoning, verbal ability, and coding test (for technical roles).</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 2: Technical Interview</h3>
              <p className="text-sm text-gray-600">Questions on technical concepts, programming, problem-solving, and projects.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 3: Technical Manager Round</h3>
              <p className="text-sm text-gray-600">Discussion on technical depth, project challenges, and solution approaches.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 4: HR Interview</h3>
              <p className="text-sm text-gray-600">Discussion about background, career goals, and cultural fit.</p>
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
              <p className="text-sm text-gray-600">Maximum 1 active backlog allowed at the time of application. Must be cleared before joining.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Gap Years</h3>
              <p className="text-sm text-gray-600">Maximum 1 year gap allowed in entire education with valid reason.</p>
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
                  <li>Strong programming fundamentals (C, Java, Python)</li>
                  <li>Data structures and algorithms</li>
                  <li>Database concepts and SQL</li>
                  <li>Communication and problem-solving skills</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Company Culture</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                  <li>Global collaborative environment</li>
                  <li>Strong focus on innovation</li>
                  <li>Emphasis on integrity and ethical practices</li>
                  <li>Customer-centric approach</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Additional Notes</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                  <li>Service agreement of 12-24 months for fresh graduates</li>
                  <li>Training period of 3-4 months</li>
                  <li>Opportunities for global assignments</li>
                  <li>Upskilling and certification programs</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Recent Trends</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                  <li>Focus on cloud, AI/ML, and cybersecurity skills</li>
                  <li>Digital transformation expertise</li>
                  <li>Growing emphasis on domain specialization</li>
                  <li>Sustainability initiatives across operations</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WiproRules;
