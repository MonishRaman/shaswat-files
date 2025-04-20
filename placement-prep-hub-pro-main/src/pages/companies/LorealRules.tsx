
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Building, Users, Award, Clock, AlertCircle, ArrowLeft, CreditCard } from 'lucide-react';

const LorealRules: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">L'Oréal - Company Rules</h1>
          <p className="text-gray-600 mt-2">Understand L'Oréal's hiring processes and eligibility criteria</p>
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
            <CardDescription>Key facts about L'Oréal</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div>
              <h3 className="font-medium">About</h3>
              <p className="text-sm text-gray-600">L'Oréal is the world's largest cosmetics company, developing activities in the field of cosmetics with a concentration on hair color, skin care, sun protection, make-up, perfumes, and hair care.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Headquarters</h3>
              <p className="text-sm text-gray-600">Clichy, Hauts-de-Seine, France</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Industry</h3>
              <p className="text-sm text-gray-600">Consumer Goods, Cosmetics, Beauty</p>
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
              <p className="text-sm text-gray-600">₹8 LPA - ₹10 LPA</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Brand Manager</h3>
              <p className="text-sm text-gray-600">₹12 LPA - ₹18 LPA</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Benefits</h3>
              <p className="text-sm text-gray-600">Health insurance, employee discount on products, flexible working, performance bonuses, wellness programs</p>
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
              <p className="text-sm text-gray-600">Aptitude test, personality assessment, and situational judgment tests.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 2: Group Discussion</h3>
              <p className="text-sm text-gray-600">Assessment of communication, leadership, and analytical abilities.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 3: Case Study Presentation</h3>
              <p className="text-sm text-gray-600">Analysis and presentation of a business case related to marketing, sales, or business strategy.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Round 4: Panel Interview</h3>
              <p className="text-sm text-gray-600">Discussion with senior management about experience, skills, and cultural fit.</p>
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
              <p className="text-sm text-gray-600">Strong academic background from reputed institutions, typically minimum 60% or equivalent.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Communication Skills</h3>
              <p className="text-sm text-gray-600">Excellent verbal and written communication skills.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Leadership Experience</h3>
              <p className="text-sm text-gray-600">Demonstrated leadership and extracurricular activities.</p>
            </div>
            <Separator />
            <div>
              <h3 className="font-medium">Eligible Degrees</h3>
              <p className="text-sm text-gray-600">For marketing/sales roles: MBA with relevant specialization; For R&D: Science/Pharmacy degrees; For operations: Engineering/Supply Chain backgrounds.</p>
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
                  <li>Strong understanding of the beauty and cosmetics industry</li>
                  <li>Knowledge of consumer behavior and market trends</li>
                  <li>Brand management and marketing concepts</li>
                  <li>Analytical and strategic thinking</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Company Culture</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                  <li>Innovation and creativity</li>
                  <li>Entrepreneurial spirit</li>
                  <li>Diversity and inclusion</li>
                  <li>Sustainability focus</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Additional Notes</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                  <li>Structured management trainee program</li>
                  <li>International exposure and career opportunities</li>
                  <li>Focus on personal development and growth</li>
                  <li>Fast-paced and dynamic work environment</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium">Recent Trends</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mt-2">
                  <li>Digital transformation in beauty industry</li>
                  <li>Sustainable and clean beauty initiatives</li>
                  <li>Personalization and AI in beauty tech</li>
                  <li>E-commerce and direct-to-consumer strategies</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LorealRules;
