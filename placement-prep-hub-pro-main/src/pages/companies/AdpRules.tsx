
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Building, Users, Award, Clock, AlertCircle, ArrowLeft, CreditCard } from 'lucide-react';

const AdpRules: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">ADP - Company Rules</h1>
          <p className="text-gray-600 mt-2">Understand ADP's hiring processes and eligibility criteria</p>
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
            <CardDescription>Key facts about ADP</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div>
              <h3 className="font-medium">About</h3>
              <p className="text-sm text-gray-600">ADP (Automatic Data Processing) is a global provider of cloud-based human capital management solutions, offering HR, payroll, talent, time, tax, and benefits administration.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Headquarters</h3>
              <p className="text-sm text-gray-600">Roseland, New Jersey, USA</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Industry</h3>
              <p className="text-sm text-gray-600">Human Resources & Payroll Services, Business Process Outsourcing</p>
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
              <h3 className="font-medium">Software Engineer</h3>
              <p className="text-sm text-gray-600">₹5.5 LPA - ₹8.0 LPA</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Implementation Specialist</h3>
              <p className="text-sm text-gray-600">₹4.5 LPA - ₹6.5 LPA</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Benefits</h3>
              <p className="text-sm text-gray-600">Health insurance, retirement benefits, flexible working options, performance bonuses, wellness programs</p>
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
              <p className="text-sm text-gray-600">Aptitude, logical reasoning, and role-specific technical assessment.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 2: Technical Interview</h3>
              <p className="text-sm text-gray-600">Questions on technical skills, problem-solving, and domain knowledge.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 3: Behavioral Interview</h3>
              <p className="text-sm text-gray-600">Assessment of soft skills, teamwork, and fit with ADP's values.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 4: Manager Interview</h3>
              <p className="text-sm text-gray-600">Final discussion with the hiring manager about role expectations and team fit.</p>
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
              <p className="text-sm text-gray-600">Minimum 60% or 6.0 CGPA throughout academics.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Communication Skills</h3>
              <p className="text-sm text-gray-600">Strong English communication skills (written and verbal).</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Technical Skills</h3>
              <p className="text-sm text-gray-600">For technical roles: proficiency in relevant technologies (Java, .NET, Cloud, etc.).</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Eligible Degrees</h3>
              <p className="text-sm text-gray-600">For technical roles: BE/B.Tech, MCA, MSc (CS/IT); For business roles: MBA, BBA, BCom with relevant specializations.</p>
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
                  <li>Understanding of HR/payroll systems and processes</li>
                  <li>For technical roles: strong programming fundamentals</li>
                  <li>Problem-solving and analytical thinking</li>
                  <li>Client service orientation</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Company Culture</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                  <li>Focus on integrity and ethics</li>
                  <li>Client-centric approach</li>
                  <li>Innovation and continuous improvement</li>
                  <li>Diversity and inclusion</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Additional Notes</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                  <li>Global work environment with diverse teams</li>
                  <li>Structured training and development programs</li>
                  <li>Clear career progression paths</li>
                  <li>Opportunity to work with Fortune 500 clients</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Recent Trends</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                  <li>Cloud transformation and modernization</li>
                  <li>AI and machine learning in HR analytics</li>
                  <li>Mobile-first application development</li>
                  <li>Focus on user experience and design thinking</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdpRules;
