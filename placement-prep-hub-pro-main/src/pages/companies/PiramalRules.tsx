
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Building, Users, Award, Clock, AlertCircle, ArrowLeft, CreditCard } from 'lucide-react';

const PiramalRules: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Piramal - Company Rules</h1>
          <p className="text-gray-600 mt-2">Understand Piramal Group's hiring processes and eligibility criteria</p>
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
            <CardDescription>Key facts about Piramal Group</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div>
              <h3 className="font-medium">About</h3>
              <p className="text-sm text-gray-600">Piramal Group is a diversified conglomerate with interests in pharmaceuticals, financial services, real estate, and more.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Headquarters</h3>
              <p className="text-sm text-gray-600">Mumbai, India</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Industry</h3>
              <p className="text-sm text-gray-600">Pharmaceuticals, Financial Services, Real Estate, Information Management</p>
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
              <h3 className="font-medium">Management Trainee</h3>
              <p className="text-sm text-gray-600">₹7 LPA - ₹9 LPA</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Associate (Technical/Business)</h3>
              <p className="text-sm text-gray-600">₹8 LPA - ₹12 LPA</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Benefits</h3>
              <p className="text-sm text-gray-600">Health insurance, provident fund, gratuity, performance bonuses, learning & development programs</p>
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
              <h3 className="font-medium">Round 1: Initial Screening</h3>
              <p className="text-sm text-gray-600">Resume screening and preliminary assessment (aptitude/domain).</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 2: Group Discussion</h3>
              <p className="text-sm text-gray-600">Assessment of communication, leadership, and analytical abilities.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 3: Technical/Domain Interview</h3>
              <p className="text-sm text-gray-600">In-depth discussion on technical/domain knowledge based on role.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 4: HR Interview</h3>
              <p className="text-sm text-gray-600">Discussion about background, career aspirations, and cultural fit.</p>
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
              <p className="text-sm text-gray-600">No active backlogs at the time of application.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Gap Years</h3>
              <p className="text-sm text-gray-600">Generally, no significant gaps in education preferred.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Eligible Degrees</h3>
              <p className="text-sm text-gray-600">Varies by role - For Pharma: B.Pharm, M.Pharm, Chemistry backgrounds; For Finance: MBA (Finance), CA, CFA; For Tech: BE/B.Tech in relevant fields.</p>
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
                  <li>Strong domain knowledge relevant to the specific business unit</li>
                  <li>Understanding of industry trends and market dynamics</li>
                  <li>Analytical and problem-solving abilities</li>
                  <li>Communication and leadership skills</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Company Culture</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                  <li>Professional and structured work environment</li>
                  <li>Focus on excellence and quality</li>
                  <li>Entrepreneurial mindset</li>
                  <li>Customer-centric approach</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Additional Notes</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                  <li>Structured training and development programs</li>
                  <li>Exposure to multiple business verticals</li>
                  <li>Mentorship opportunities</li>
                  <li>Focus on ethical business practices</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Recent Trends</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                  <li>Digital transformation across business units</li>
                  <li>Innovation in pharmaceutical research and development</li>
                  <li>Expansion in financial services and fintech</li>
                  <li>Data analytics and business intelligence focus</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PiramalRules;
