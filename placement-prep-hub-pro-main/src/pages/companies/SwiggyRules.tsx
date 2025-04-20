
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Building, Users, Award, Clock, AlertCircle, ArrowLeft, CreditCard } from 'lucide-react';

const SwiggyRules: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Swiggy - Company Rules</h1>
          <p className="text-gray-600 mt-2">Understand Swiggy's hiring processes and eligibility criteria</p>
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
            <CardDescription>Key facts about Swiggy</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div>
              <h3 className="font-medium">About</h3>
              <p className="text-sm text-gray-600">Swiggy is India's leading on-demand convenience platform, offering food delivery, quick commerce, and other services across the country.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Headquarters</h3>
              <p className="text-sm text-gray-600">Bengaluru, India</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Industry</h3>
              <p className="text-sm text-gray-600">Food Tech, Logistics, E-commerce</p>
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
              <p className="text-sm text-gray-600">₹12 LPA - ₹20 LPA (varies by experience and role)</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Business Analyst</h3>
              <p className="text-sm text-gray-600">₹10 LPA - ₹15 LPA</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Benefits</h3>
              <p className="text-sm text-gray-600">Health insurance, flexible working, food allowance, employee stock options (ESOPs), learning opportunities</p>
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
              <h3 className="font-medium">Round 1: Technical Assessment</h3>
              <p className="text-sm text-gray-600">Coding test or role-specific assignment to evaluate technical skills.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 2: First Technical Interview</h3>
              <p className="text-sm text-gray-600">Technical discussion on fundamentals, coding questions, and problem-solving.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 3: Second Technical Interview</h3>
              <p className="text-sm text-gray-600">More in-depth technical questions, system design, and architectural discussions.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 4: Managerial and HR Interview</h3>
              <p className="text-sm text-gray-600">Discussion about cultural fit, career aspirations, and team dynamics.</p>
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
              <p className="text-sm text-gray-600">Strong academic background, typically from tier-1 or tier-2 colleges, but emphasis on skills over grades.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Technical Skills</h3>
              <p className="text-sm text-gray-600">Strong programming skills (Java, Python, Go, JavaScript), system design knowledge for technical roles.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Experience</h3>
              <p className="text-sm text-gray-600">For entry-level: internships or projects; For experienced: relevant work experience in similar domains.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Eligible Degrees</h3>
              <p className="text-sm text-gray-600">For technical roles: BE/B.Tech, MCA, M.Tech; For business roles: MBA, BBA, Economics graduates.</p>
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
                  <li>Strong data structures and algorithms for technical roles</li>
                  <li>System design principles and scalability considerations</li>
                  <li>Problem-solving and analytical thinking</li>
                  <li>Understanding of food-tech/e-commerce business models</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Company Culture</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                  <li>Fast-paced, startup-like environment</li>
                  <li>Data-driven decision making</li>
                  <li>Innovation and experimentation</li>
                  <li>Customer-obsessed approach</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Additional Notes</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                  <li>Competitive compensation with strong ESOP component</li>
                  <li>Rapid growth opportunities in a scaling company</li>
                  <li>Work on high-scale, real-world problems</li>
                  <li>Flat organizational structure with access to leadership</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Recent Trends</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                  <li>Focus on AI/ML for personalization and operations</li>
                  <li>Expansion beyond food delivery into quick commerce</li>
                  <li>Infrastructure scaling and reliability engineering</li>
                  <li>Growth in data science and analytics teams</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SwiggyRules;
