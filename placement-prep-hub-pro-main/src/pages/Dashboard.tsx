
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, FileText, Book, Edit, TestTube, GraduationCap } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Welcome to PLACE-MATE-HUB</h1>
        <p className="text-gray-600 mt-2">Your ultimate platform for placement preparation</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Card className="col-span-1 md:col-span-2">
          <CardHeader>
            <CardTitle>User Guide</CardTitle>
            <CardDescription>Watch this video to learn how to use PLACE-MATE-HUB</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-gray-100 rounded-md overflow-hidden border">
              <video 
                className="w-full h-full object-cover" 
                controls
                // poster="/placeholder.svg"
              >
                <source src="/public/WhatsApp Video 2025-04-10 at 13.15.45_acef065a revenshaw.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </CardContent>
        </Card>

        <Link to="/placement-questions">
          <Card className="h-full hover:shadow-md transition-all cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText size={20} />
                <span>Placement Questions</span>
              </CardTitle>
              <CardDescription>Access placement question sets for various topics</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Practice with carefully curated question sets for aptitude, reasoning, English, coding, and HR rounds.</p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/company-rules">
          <Card className="h-full hover:shadow-md transition-all cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book size={20} />
                <span>Company Rules</span>
              </CardTitle>
              <CardDescription>Understand hiring processes and eligibility criteria</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Learn about interview rounds, company criteria, and requirements for successful placement.</p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/skill-guide">
          <Card className="h-full hover:shadow-md transition-all cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap size={20} />
                <span>Skill Guide</span>
              </CardTitle>
              <CardDescription>Guidance on essential skills for placement</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Discover what skills to focus on and how to prepare effectively for placement interviews.</p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/resume-reader">
          <Card className="h-full hover:shadow-md transition-all cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Edit size={20} />
                <span>Resume Tools</span>
              </CardTitle>
              <CardDescription>Build and evaluate your resume</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Create professional resumes with our builder and get evaluations on your existing resume.</p>
            </CardContent>
          </Card>
        </Link>
        
        <Link to="/mock-test">
          <Card className="h-full hover:shadow-md transition-all cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TestTube size={20} />
                <span>Mock Tests</span>
              </CardTitle>
              <CardDescription>Practice with simulated placement tests</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Take mock tests at different difficulty levels to prepare for the real placement exams.</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
