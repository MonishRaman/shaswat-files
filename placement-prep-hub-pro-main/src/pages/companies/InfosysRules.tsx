
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Building, Users, Award, Clock, AlertCircle, ArrowLeft, CreditCard } from 'lucide-react';

const InfosysRules: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Infosys - Company Rules</h1>
          <p className="text-gray-600 mt-2">Understand Infosys' hiring processes and eligibility criteria</p>
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
            <CardDescription>Key facts about Infosys</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div>
              <h3 className="font-medium">About</h3>
              <p className="text-sm text-gray-600">Infosys is a global leader in next-generation digital services and consulting, enabling clients in 46 countries to navigate their digital transformation.</p>
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
              <h3 className="font-medium">Systems Engineer Package</h3>
              <p className="text-sm text-gray-600">₹3.6 LPA - ₹4.0 LPA</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Power Programmer Package</h3>
              <p className="text-sm text-gray-600">₹8 LPA - ₹9 LPA</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Digital Specialist Engineer</h3>
              <p className="text-sm text-gray-600">₹5 LPA - ₹6.5 LPA</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Benefits</h3>
              <p className="text-sm text-gray-600">Health insurance, provident fund, gratuity, relocation assistance, professional development program</p>
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
              <h3 className="font-medium">Round 1: Online Test (InfyTQ)</h3>
              <p className="text-sm text-gray-600">Aptitude test covering mathematical, logical, verbal, and programming sections.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 2: Coding Assessment</h3>
              <p className="text-sm text-gray-600">For technical roles - problem-solving using programming (Python, Java, C++).</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 3: Technical Interview</h3>
              <p className="text-sm text-gray-600">Discussion on technical knowledge, projects, and problem-solving abilities.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 4: HR Interview</h3>
              <p className="text-sm text-gray-600">Final round covering background verification, career aspirations, and company fit.</p>
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
              <p className="text-sm text-gray-600">Minimum 60% or 6.0 CGPA in X, XII, and graduation. No standing arrears at the time of selection.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Backlogs</h3>
              <p className="text-sm text-gray-600">No active backlogs allowed during the recruitment process.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Gap Years</h3>
              <p className="text-sm text-gray-600">Maximum 1 year gap in education. Gaps need to be explained with valid reasons.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Eligible Degrees</h3>
              <p className="text-sm text-gray-600">BE/B.Tech, ME/M.Tech, MCA, M.Sc (CS/IT), BCA from AICTE/UGC approved institutions.</p>
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
                  <li>Strong fundamentals in data structures and algorithms</li>
                  <li>Proficiency in at least one programming language</li>
                  <li>Database concepts and SQL queries</li>
                  <li>Problem-solving and analytical thinking</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Company Culture</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                  <li>Client value creation</li>
                  <li>Leadership by example</li>
                  <li>Integrity and transparency</li>
                  <li>Fairness and excellence</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Additional Notes</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                  <li>Service agreement for 1 year for Systems Engineer role</li>
                  <li>Training period at Mysore campus (12-14 weeks)</li>
                  <li>Offer validity typically for 6 months after selection</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Recent Trends</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                  <li>Focus on AI, cloud, and cybersecurity skills</li>
                  <li>Digital transformation projects</li>
                  <li>Remote work options post-pandemic</li>
                  <li>Higher packages for specialized skills</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InfosysRules;
