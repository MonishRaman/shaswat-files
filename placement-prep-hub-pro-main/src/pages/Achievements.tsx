
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, GraduationCap, Lightbulb, Rocket, Building, Users, Award, Star, Globe, Trophy } from 'lucide-react';

const Achievements: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleBack = () => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      navigate('/');
    }
  };

  // Student placement data - adding one more student
  const studentPlacements = [
    {
      name: "Ravi Sharma",
      company: "Microsoft",
      package: "₹24 LPA",
      role: "Software Development Engineer",
      year: "2024"
    },
    {
      name: "Sneha Patel",
      company: "Amazon",
      package: "₹22 LPA",
      role: "Backend Developer",
      year: "2024"
    },
    {
      name: "Aditya Verma",
      company: "Google",
      package: "₹28 LPA",
      role: "Frontend Engineer",
      year: "2023"
    },
    {
      name: "Priya Mehta",
      company: "Adobe",
      package: "₹18 LPA",
      role: "UX Designer",
      year: "2024"
    },
    {
      name: "Karthik Reddy",
      company: "Salesforce",
      package: "₹20 LPA",
      role: "Cloud Solutions Engineer",
      year: "2023"
    },
    {
      name: "Nisha Singh",
      company: "Netflix",
      package: "₹26 LPA",
      role: "Full Stack Developer",
      year: "2024"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Achievements</h1>
        <Button 
          onClick={handleBack} 
          variant="outline" 
          className="flex items-center gap-2 bg-orange-500 text-white hover:bg-orange-600"
        >
          <ArrowLeft size={16} />
          {isAuthenticated ? 'Back to Dashboard' : 'Back to Home'}
        </Button>
      </div>
      <p className="text-gray-600 mt-2">Our success stories and milestones</p>

      {/* Student Placements Section */}
      <Card className="border-t-4 border-t-orange-500 overflow-hidden shadow-lg">
        <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50">
          <CardTitle className="flex items-center gap-2 text-2xl text-orange-700">
            <Users size={24} className="text-orange-500" />
            <span>Student Placements</span>
          </CardTitle>
          <CardDescription>Our students have secured positions at top companies</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {studentPlacements.map((student, index) => (
              <Card key={index} className="overflow-hidden border border-gray-200 hover:shadow-md transition-shadow hover:translate-y-[-5px] transition-transform duration-300">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2"></div>
                <CardContent className="pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg">{student.name}</h3>
                      <p className="text-sm text-gray-600">{student.role}</p>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      {student.year}
                    </Badge>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <Building size={16} className="text-blue-600" />
                    <span className="font-medium">{student.company}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <Award size={16} className="text-amber-500" />
                    <span className="font-semibold text-amber-700">{student.package}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Existing achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase size={20} className="text-blue-500" />
              <span>Industry Recognition</span>
            </CardTitle>
            <CardDescription>Awards and accolades from leading organizations</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              PLACE-MATE-HUB has been recognized by top companies for its contribution to student placement preparation.
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Awarded "Best Placement Prep Platform" by Tech Industry Leaders in 2024</li>
              <li>Featured in "Top 10 Education Platforms" by Education Today Magazine</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-purple-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap size={20} className="text-purple-500" />
              <span>Student Success Stories</span>
            </CardTitle>
            <CardDescription>Testimonials from students who secured top placements</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Our students have achieved remarkable success in their placement journeys. Here are a few stories:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Secured offers from multiple Fortune 500 companies</li>
              <li>Achieved 100% placement rate in participating colleges</li>
              <li>Received highest salary packages in their respective fields</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-yellow-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb size={20} className="text-yellow-500" />
              <span>Innovative Programs</span>
            </CardTitle>
            <CardDescription>Pioneering initiatives that set us apart</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              We are committed to innovation and continuously develop programs that enhance student preparation:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Launched AI-powered resume evaluation tool</li>
              <li>Introduced personalized learning paths based on skill assessments</li>
              <li>Conducted industry-specific mock interview series</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Rocket size={20} className="text-green-500" />
              <span>Key Milestones</span>
            </CardTitle>
            <CardDescription>Significant achievements in our journey</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              PLACE-MATE-HUB has reached several milestones since its inception:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Served over 10,000 students across 50+ colleges</li>
              <li>Expanded our network to include 200+ hiring partners</li>
              <li>Achieved a 95% user satisfaction rate</li>
            </ul>
          </CardContent>
        </Card>

        {/* New box 1 */}
        <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-red-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe size={20} className="text-red-500" />
              <span>Global Partnerships</span>
            </CardTitle>
            <CardDescription>Expanding our reach worldwide</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              PLACE-MATE-HUB has established strategic partnerships around the globe:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Partnered with 15+ international universities for student exchange programs</li>
              <li>Collaborated with multinational corporations for industry-aligned curriculum</li>
              <li>Conducted global placement drives with participants from 10+ countries</li>
            </ul>
          </CardContent>
        </Card>

        {/* New box 2 */}
        <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-indigo-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy size={20} className="text-indigo-500" />
              <span>Technological Excellence</span>
            </CardTitle>
            <CardDescription>Innovative tech-driven solutions</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Our platform leverages cutting-edge technology to provide unparalleled services:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Built an AI-driven interview simulator with real-time feedback</li>
              <li>Developed machine learning algorithms for personalized learning paths</li>
              <li>Created virtual reality-based workplace simulation environments</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Achievements;
