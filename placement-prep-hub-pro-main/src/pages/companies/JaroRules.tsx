
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Building, Users, Award, Clock, AlertCircle, ArrowLeft, CreditCard } from 'lucide-react';

const JaroRules: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Jaro - Company Rules</h1>
          <p className="text-gray-600 mt-2">Understand Jaro's hiring processes and eligibility criteria</p>
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
            <CardDescription>Key facts about Jaro</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div>
              <h3 className="font-medium">About</h3>
              <p className="text-sm text-gray-600">Jaro is a technology company specializing in education technology solutions, focusing on bridging education and technology gaps.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Headquarters</h3>
              <p className="text-sm text-gray-600">Bengaluru, India</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Industry</h3>
              <p className="text-sm text-gray-600">EdTech, Technology Solutions</p>
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
              <p className="text-sm text-gray-600">₹4.5 LPA - ₹6.0 LPA</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Product Manager</h3>
              <p className="text-sm text-gray-600">₹7.0 LPA - ₹9.0 LPA</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Benefits</h3>
              <p className="text-sm text-gray-600">Health insurance, flexible working, learning allowance, performance bonuses</p>
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
              <p className="text-sm text-gray-600">Resume screening and basic telephonic/video interview.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 2: Technical/Skills Assessment</h3>
              <p className="text-sm text-gray-600">Role-specific assessment: coding test for developers, case study for product roles.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 3: Technical Interview</h3>
              <p className="text-sm text-gray-600">In-depth discussion on technical skills, problem-solving, and domain knowledge.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 4: Culture Fit Interview</h3>
              <p className="text-sm text-gray-600">Discussion with team members to assess cultural fit and team compatibility.</p>
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
              <p className="text-sm text-gray-600">Preference for candidates with strong academic background, but focus on skills and potential.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Technical Skills</h3>
              <p className="text-sm text-gray-600">For technical roles: proficiency in relevant technologies (web/mobile development, cloud, etc.).</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Experience</h3>
              <p className="text-sm text-gray-600">For entry-level: relevant projects or internships; For experienced roles: demonstrated expertise.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Eligible Degrees</h3>
              <p className="text-sm text-gray-600">For technical roles: BE/B.Tech, MCA, MSc (CS/IT); For product/business roles: any degree with relevant skills.</p>
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
                  <li>Strong understanding of educational technology landscape</li>
                  <li>Problem-solving and critical thinking abilities</li>
                  <li>For technical roles: relevant programming skills</li>
                  <li>Understanding of user experience and design thinking</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Company Culture</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                  <li>Startup-like agile environment</li>
                  <li>Innovation and experimentation</li>
                  <li>Focus on impact in education sector</li>
                  <li>Collaborative and supportive team dynamics</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Additional Notes</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                  <li>Opportunity to work on impactful education projects</li>
                  <li>Exposure to end-to-end product development</li>
                  <li>Learning-oriented environment</li>
                  <li>Regular feedback and growth discussions</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Recent Trends</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                  <li>Focus on AI and personalized learning solutions</li>
                  <li>Mobile-first approach for educational tools</li>
                  <li>Data-driven decision making in educational outcomes</li>
                  <li>Gamification and interactive learning experiences</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JaroRules;
