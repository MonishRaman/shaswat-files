
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Building, Award, Clock, AlertCircle, ArrowLeft, CreditCard } from 'lucide-react';

// Company name mapping for display
const companyNames: Record<string, string> = {
  'accenture': 'Accenture',
  'deloitte': 'Deloitte',
  'tcs': 'TCS',
  'infosys': 'Infosys',
  'cognizant': 'Cognizant',
  'genpact': 'Genpact',
  'techmahindra': 'Tech Mahindra',
  'eygds': 'EY GDS',
  'smartrecon': 'Smart Recon',
  'swiggy': 'Swiggy',
  'idfc': 'IDFC',
  'icici': 'ICICI',
  'wipro': 'Wipro',
  'jaro': 'Jaro',
  'piramal': 'Piramal',
  'adp': 'ADP',
  'loreal': 'L\'Oreal',
  'planetspark': 'PlanetSpark',
  'hppowerlab': 'HP Power Lab'
};

const GenericCompanyRules: React.FC = () => {
  const navigate = useNavigate();
  const { companyId } = useParams<{ companyId: string }>();
  
  // Handle undefined or invalid company ID
  const companyName = companyId && companyNames[companyId] 
    ? companyNames[companyId] 
    : 'Selected Company';

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">{companyName} - Company Rules</h1>
          <p className="text-gray-600 mt-2">Understand {companyName}'s hiring processes and eligibility criteria</p>
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
            <CardDescription>Key facts about {companyName}</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div>
              <h3 className="font-medium">About</h3>
              <p className="text-sm text-gray-600">{companyName} is a leading company in its industry, providing various products and services to clients worldwide.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Headquarters</h3>
              <p className="text-sm text-gray-600">Details coming soon</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Industry</h3>
              <p className="text-sm text-gray-600">IT/Technology/Services</p>
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
              <h3 className="font-medium">Entry Level Package</h3>
              <p className="text-sm text-gray-600">₹3.5 LPA - ₹6.0 LPA (varies based on role and performance)</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Advanced Roles</h3>
              <p className="text-sm text-gray-600">₹6.0 LPA - ₹10.0 LPA</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Benefits</h3>
              <p className="text-sm text-gray-600">Standard benefits include health insurance, provident fund, and performance bonuses</p>
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
              <p className="text-sm text-gray-600">Aptitude test covering mathematical, logical, and verbal sections.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 2: Technical Assessment</h3>
              <p className="text-sm text-gray-600">For technical roles - programming and domain knowledge assessment.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 3: Technical Interview</h3>
              <p className="text-sm text-gray-600">In-depth discussion on technical skills and problem-solving abilities.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 4: HR Interview</h3>
              <p className="text-sm text-gray-600">Final round covering background verification and cultural fit.</p>
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
              <p className="text-sm text-gray-600">Typically 60% or above throughout academics (X, XII, and graduation).</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Backlogs</h3>
              <p className="text-sm text-gray-600">Most companies require zero active backlogs during recruitment.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Gap Years</h3>
              <p className="text-sm text-gray-600">Usually, a maximum of 1-2 years gap allowed in the entire academic career.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Eligible Degrees</h3>
              <p className="text-sm text-gray-600">Typically BE/B.Tech, ME/M.Tech, MCA, M.Sc from recognized institutions.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 md:col-span-2">
          <CardHeader className="bg-primary/5">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-primary" />
              <CardTitle>Note</CardTitle>
            </div>
            <CardDescription>Information about this page</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-gray-600">
              We're currently working on providing detailed information about {companyName}'s selection process and eligibility criteria.
              The information above represents general industry standards and may vary for {companyName}.
              For the most accurate and up-to-date information, please visit the company's official career page or contact their HR department.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GenericCompanyRules;
