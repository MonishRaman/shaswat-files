
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Building, Users, Award, Clock, AlertCircle, ArrowLeft, CreditCard } from 'lucide-react';

const IciciRules: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">ICICI - Company Rules</h1>
          <p className="text-gray-600 mt-2">Understand ICICI's hiring processes and eligibility criteria</p>
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
            <CardDescription>Key facts about ICICI</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div>
              <h3 className="font-medium">About</h3>
              <p className="text-sm text-gray-600">ICICI Bank is an Indian multinational banking and financial services company offering a wide range of banking products and services.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Headquarters</h3>
              <p className="text-sm text-gray-600">Mumbai, India</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Industry</h3>
              <p className="text-sm text-gray-600">Banking and Financial Services</p>
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
              <h3 className="font-medium">Probationary Officer</h3>
              <p className="text-sm text-gray-600">₹6 LPA - ₹8 LPA</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Management Trainee</h3>
              <p className="text-sm text-gray-600">₹8 LPA - ₹10 LPA</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Benefits</h3>
              <p className="text-sm text-gray-600">Health insurance, provident fund, gratuity, housing loan benefits, education assistance, employee banking benefits</p>
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
              <h3 className="font-medium">Round 1: Online Aptitude Test</h3>
              <p className="text-sm text-gray-600">Quantitative aptitude, reasoning, English language, and general awareness (especially banking).</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 2: Group Discussion</h3>
              <p className="text-sm text-gray-600">Assessment of communication, leadership, and team participation skills.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 3: Technical/Domain Interview</h3>
              <p className="text-sm text-gray-600">Questions on banking knowledge, financial concepts, and role-specific skills.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 4: HR Interview</h3>
              <p className="text-sm text-gray-600">Discussion about background, motivation, career aspirations, and cultural fit.</p>
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
              <h3 className="font-medium">Age Limit</h3>
              <p className="text-sm text-gray-600">Generally between 21-30 years, may vary based on the role.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Backlogs</h3>
              <p className="text-sm text-gray-600">No active backlogs at the time of application.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Eligible Degrees</h3>
              <p className="text-sm text-gray-600">Graduate/Post-graduate in any discipline. For specialized roles: MBA (Finance), CA, CFA, B.Com, M.Com; For tech roles: BE/B.Tech, MCA.</p>
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
                  <li>Banking awareness and financial market knowledge</li>
                  <li>Current affairs, especially related to economy and finance</li>
                  <li>Quantitative aptitude and logical reasoning</li>
                  <li>Communication and interpersonal skills</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Company Culture</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                  <li>Professional and structured work environment</li>
                  <li>Customer-centric approach</li>
                  <li>Focus on integrity and ethical practices</li>
                  <li>Innovation in banking products and services</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Additional Notes</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                  <li>Structured training program (typically 6-12 months)</li>
                  <li>Job rotation across departments for comprehensive exposure</li>
                  <li>Opportunities for professional certifications</li>
                  <li>Clear career progression path</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Recent Trends</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                  <li>Digital banking transformation initiatives</li>
                  <li>Focus on innovation and fintech partnerships</li>
                  <li>Data analytics and AI applications in banking</li>
                  <li>Enhanced focus on cybersecurity skills</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default IciciRules;
