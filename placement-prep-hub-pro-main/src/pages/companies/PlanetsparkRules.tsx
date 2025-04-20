
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Building, Users, Award, Clock, AlertCircle, ArrowLeft, CreditCard } from 'lucide-react';

const PlanetsparkRules: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">PlanetSpark - Company Rules</h1>
          <p className="text-gray-600 mt-2">Understand PlanetSpark's hiring processes and eligibility criteria</p>
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
            <CardDescription>Key facts about PlanetSpark</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div>
              <h3 className="font-medium">About</h3>
              <p className="text-sm text-gray-600">PlanetSpark is an EdTech company that provides online communication and public speaking classes for kids, focusing on developing 21st-century skills through personalized coaching.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Headquarters</h3>
              <p className="text-sm text-gray-600">Gurugram, India</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Industry</h3>
              <p className="text-sm text-gray-600">EdTech, Education, K-12 Learning</p>
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
              <h3 className="font-medium">Curriculum Developer</h3>
              <p className="text-sm text-gray-600">₹4.5 LPA - ₹6.0 LPA</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Software Engineer</h3>
              <p className="text-sm text-gray-600">₹6.0 LPA - ₹9.0 LPA</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Benefits</h3>
              <p className="text-sm text-gray-600">Health insurance, flexible working, learning & development opportunities, employee stock options (for certain roles)</p>
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
              <p className="text-sm text-gray-600">Resume screening and telephonic/video interview to assess basic qualifications.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 2: Assignment/Task</h3>
              <p className="text-sm text-gray-600">Role-specific assignment: curriculum development, coding challenge, or marketing plan based on role.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 3: Technical/Domain Interview</h3>
              <p className="text-sm text-gray-600">In-depth discussion on skills, experience, and domain knowledge.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 4: Founder/Leadership Round</h3>
              <p className="text-sm text-gray-600">Final interview with company leadership to assess culture fit and alignment with company vision.</p>
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
              <h3 className="font-medium">Academic Background</h3>
              <p className="text-sm text-gray-600">Relevant degree or diploma based on role applied for. Focus on skills more than academic scores.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Skills Requirements</h3>
              <p className="text-sm text-gray-600">For educational roles: teaching experience or relevant domain expertise; For tech roles: relevant programming skills.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Communication Skills</h3>
              <p className="text-sm text-gray-600">Excellent communication skills, especially for roles interacting with students or parents.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Eligible Degrees</h3>
              <p className="text-sm text-gray-600">For curriculum roles: Education degrees, English/Communication backgrounds; For tech: BE/B.Tech, MCA; For business: MBA, BBA with relevant experience.</p>
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
                  <li>Understanding of the EdTech landscape and PlanetSpark's model</li>
                  <li>Knowledge of communication skills development for children</li>
                  <li>Growth mindset and adaptability</li>
                  <li>Problem-solving and innovative thinking</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Company Culture</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                  <li>Fast-paced startup environment</li>
                  <li>Focus on innovation in education</li>
                  <li>Student-centric approach</li>
                  <li>Data-driven decision making</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Additional Notes</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                  <li>Opportunity to impact children's education directly</li>
                  <li>Learning and growth in a scaling EdTech company</li>
                  <li>Exposure to advanced teaching methodologies</li>
                  <li>Work with a diverse team of educators and technologists</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Recent Trends</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                  <li>Global expansion of online learning platforms</li>
                  <li>Focus on interactive and gamified learning experiences</li>
                  <li>AI-powered personalization in education</li>
                  <li>Growing emphasis on soft skills and communication training</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PlanetsparkRules;
