
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap, Trophy, Users } from 'lucide-react';

const IndexAboutUs: React.FC = () => {
  // Team member data with placeholder images
  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Technical Expert",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format"
    },
    {
      name: "Priya Sharma",
      role: "Career Counselor",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format"
    },
    {
      name: "Vikram Singh",
      role: "Content Creator",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format"
    },
    {
      name: "Ananya Patel",
      role: "Student Mentor",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format"
    },
    {
      name: "Rohan Verma",
      role: "Industry Liaison",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="text-gray-600">Learn more about PLACE-MATE-HUB</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
            <CardDescription>Empowering students for successful placements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              PLACE-MATE-HUB is dedicated to preparing students for successful placement opportunities by providing comprehensive resources, tools, and guidance. We understand the challenges students face during the placement process and aim to simplify this journey.
            </p>
            <p>
              Our platform offers structured learning materials, practice tests, resume building tools, and industry insights to help students develop the skills and confidence needed to excel in placement interviews.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy size={20} />
                <span>Why Choose Us</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-placemate-blue w-6 h-6 flex items-center justify-center text-white flex-shrink-0 mt-0.5">1</div>
                  <div>
                    <p className="font-medium">Comprehensive Resources</p>
                    <p className="text-sm text-gray-600">Access a wide range of placement preparation materials across various domains</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-placemate-blue w-6 h-6 flex items-center justify-center text-white flex-shrink-0 mt-0.5">2</div>
                  <div>
                    <p className="font-medium">Practical Tools</p>
                    <p className="text-sm text-gray-600">Utilize resume builders, mock tests, and skill assessments to track your progress</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-placemate-blue w-6 h-6 flex items-center justify-center text-white flex-shrink-0 mt-0.5">3</div>
                  <div>
                    <p className="font-medium">Industry Insights</p>
                    <p className="text-sm text-gray-600">Learn about company requirements and interview processes from real-world experiences</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-placemate-blue w-6 h-6 flex items-center justify-center text-white flex-shrink-0 mt-0.5">4</div>
                  <div>
                    <p className="font-medium">User-Friendly Platform</p>
                    <p className="text-sm text-gray-600">Enjoy a seamless learning experience with our intuitive interface</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap size={20} />
                <span>Our Approach</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                At PLACE-MATE-HUB, we believe in a holistic approach to placement preparation that focuses on:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded-md p-4">
                  <h3 className="font-medium text-placemate-blue mb-2">Technical Skills</h3>
                  <p className="text-sm">Developing core technical competencies required for your field</p>
                </div>
                <div className="border rounded-md p-4">
                  <h3 className="font-medium text-placemate-blue mb-2">Aptitude Training</h3>
                  <p className="text-sm">Strengthening mathematical and logical reasoning abilities</p>
                </div>
                <div className="border rounded-md p-4">
                  <h3 className="font-medium text-placemate-blue mb-2">Soft Skills</h3>
                  <p className="text-sm">Enhancing communication and interview performance</p>
                </div>
                <div className="border rounded-md p-4">
                  <h3 className="font-medium text-placemate-blue mb-2">Profile Building</h3>
                  <p className="text-sm">Creating professional resumes and portfolios</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users size={20} />
              <span>Our Team</span>
            </CardTitle>
            <CardDescription>Passionate educators and industry professionals</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-6">
              PLACE-MATE-HUB is powered by a team of dedicated professionals who are passionate about student success:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-24 h-24 mx-auto mb-3 overflow-hidden rounded-full">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-medium">{member.name}</h3>
                  <p className="text-sm text-gray-600">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default IndexAboutUs;
