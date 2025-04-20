
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Building, Users, Award, Clock, AlertCircle, ArrowLeft, CreditCard } from 'lucide-react';

const GenpactRules: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Genpact - Company Rules</h1>
          <p className="text-gray-600 mt-2">Understand Genpact's hiring processes and eligibility criteria</p>
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
            <CardDescription>Key facts about Genpact</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div>
              <h3 className="font-medium">About</h3>
              <p className="text-sm text-gray-600">Genpact is a global professional services firm delivering digital transformation by putting digital and data to work to create competitive advantage.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Headquarters</h3>
              <p className="text-sm text-gray-600">New York, USA</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Industry</h3>
              <p className="text-sm text-gray-600">Business Process Management & IT Services</p>
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
              <h3 className="font-medium">Process Associate</h3>
              <p className="text-sm text-gray-600">₹2.5 LPA - ₹3.5 LPA</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Software Engineer</h3>
              <p className="text-sm text-gray-600">₹3.5 LPA - ₹5.0 LPA</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Benefits</h3>
              <p className="text-sm text-gray-600">Health insurance, flexible working, learning & development programs, employee assistance program</p>
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
              <p className="text-sm text-gray-600">Aptitude, verbal ability, and basic domain knowledge.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 2: Group Discussion</h3>
              <p className="text-sm text-gray-600">Assessment of communication and interpersonal skills.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 3: Technical Interview</h3>
              <p className="text-sm text-gray-600">Domain-specific questions based on the role.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 4: HR Interview</h3>
              <p className="text-sm text-gray-600">Discussion about career goals, background, and cultural fit.</p>
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
              <p className="text-sm text-gray-600">Minimum 55-60% throughout academics (X, XII, and graduation).</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Backlogs</h3>
              <p className="text-sm text-gray-600">No active backlogs at the time of application.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Gap Years</h3>
              <p className="text-sm text-gray-600">Generally, no gap year in education preferred.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Eligible Degrees</h3>
              <p className="text-sm text-gray-600">Any graduate/post-graduate degree based on the role requirements. For IT roles: B.E./B.Tech, MCA, BCA preferred.</p>
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
                  <li>Process orientation and analytical thinking</li>
                  <li>Strong communication skills (verbal and written)</li>
                  <li>Domain knowledge relevant to the role</li>
                  <li>Basic computer and technical skills</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Company Culture</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                  <li>Process excellence and continuous improvement</li>
                  <li>Client-centric approach</li>
                  <li>Innovation and agility</li>
                  <li>Diversity and inclusion</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Additional Notes</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                  <li>Service agreement of 1 year for some roles</li>
                  <li>Training period of 1-2 months</li>
                  <li>Shift-based work for certain roles</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Recent Trends</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                  <li>Focus on digital transformation skills</li>
                  <li>Data analytics and AI capabilities</li>
                  <li>Process automation expertise</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GenpactRules;
