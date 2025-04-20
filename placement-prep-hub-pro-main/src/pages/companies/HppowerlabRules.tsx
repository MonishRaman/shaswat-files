
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Building, Users, Award, Clock, AlertCircle, ArrowLeft, CreditCard } from 'lucide-react';

const HppowerlabRules: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">HP Power Lab - Company Rules</h1>
          <p className="text-gray-600 mt-2">Understand HP Power Lab's hiring processes and eligibility criteria</p>
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
            <CardDescription>Key facts about HP Power Lab</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div>
              <h3 className="font-medium">About</h3>
              <p className="text-sm text-gray-600">HP Power Lab is the research and development division of HP Inc., focusing on innovative technologies in printing, personal computing, and emerging solutions like 3D printing.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Headquarters</h3>
              <p className="text-sm text-gray-600">Palo Alto, California, USA (with R&D centers in Bangalore and other global locations)</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Industry</h3>
              <p className="text-sm text-gray-600">Technology, Research & Development, Computing Hardware</p>
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
              <h3 className="font-medium">R&D Engineer</h3>
              <p className="text-sm text-gray-600">₹8 LPA - ₹12 LPA</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Senior Research Engineer</h3>
              <p className="text-sm text-gray-600">₹15 LPA - ₹25 LPA</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Benefits</h3>
              <p className="text-sm text-gray-600">Health insurance, retirement plans, stock purchase plan, patent incentives, wellness programs, professional development</p>
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
              <p className="text-sm text-gray-600">Online coding/technical test relevant to the specific role.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 2: Technical Interview</h3>
              <p className="text-sm text-gray-600">In-depth discussion on technical skills, problem-solving approach, and domain knowledge.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 3: System Design/Research Methodology</h3>
              <p className="text-sm text-gray-600">Assessment of system design skills or research methodology understanding based on role.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 4: Team and Management Interviews</h3>
              <p className="text-sm text-gray-600">Multiple interviews with potential team members and managers to assess team fit and research alignment.</p>
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
              <p className="text-sm text-gray-600">Strong academic performance from top-tier institutions. For research positions: M.Tech/MS/PhD in relevant fields preferred.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Technical Expertise</h3>
              <p className="text-sm text-gray-600">Deep technical knowledge in relevant domains (hardware, firmware, software, materials science, etc.).</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Research Experience</h3>
              <p className="text-sm text-gray-600">For senior roles: publication record, patents, or demonstrated research capabilities.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Eligible Degrees</h3>
              <p className="text-sm text-gray-600">B.Tech/BE, M.Tech/ME, MS, PhD in Computer Science, Electrical Engineering, Electronics, Mechanical Engineering, Materials Science, or related fields.</p>
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
                  <li>Strong fundamental knowledge in the relevant technical domain</li>
                  <li>Problem-solving and analytical thinking</li>
                  <li>Understanding of research methodologies</li>
                  <li>Knowledge of HP's products and technology areas</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Company Culture</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                  <li>Innovation and technical excellence</li>
                  <li>Collaborative research environment</li>
                  <li>Focus on impactful, practical research</li>
                  <li>Diversity and inclusion</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Additional Notes</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                  <li>Opportunities to work on cutting-edge technologies</li>
                  <li>Patent filing and intellectual property creation</li>
                  <li>Collaboration with global research teams</li>
                  <li>Publication opportunities in relevant conferences/journals</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Recent Trends</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                  <li>3D printing and additive manufacturing technologies</li>
                  <li>Sustainable materials and environmental innovations</li>
                  <li>AI and machine learning applications</li>
                  <li>Next-generation computing platforms and interfaces</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HppowerlabRules;
