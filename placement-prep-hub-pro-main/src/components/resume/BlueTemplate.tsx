
import React from 'react';
import { Mail, Phone, MapPin, Award, BookOpen } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ResumeData } from "@/types";

interface BlueTemplateProps {
  data: ResumeData;
}

export const BlueTemplate: React.FC<BlueTemplateProps> = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-[800px]">
      {/* Left sidebar */}
      <div className="bg-[#004167] text-white w-full md:w-64 p-6 flex flex-col">
        <div className="w-32 h-32 rounded-full bg-white/20 mx-auto mb-6 flex items-center justify-center overflow-hidden">
          {data.personalInfo.profileImage ? (
            <Avatar className="w-full h-full">
              <AvatarImage src={data.personalInfo.profileImage} alt={data.personalInfo.fullName} className="object-cover" />
              <AvatarFallback className="text-4xl font-bold">
                {data.personalInfo.fullName.split(' ').map(name => name[0]).join('')}
              </AvatarFallback>
            </Avatar>
          ) : (
            <span className="text-4xl font-bold">
              {data.personalInfo.fullName.split(' ').map(name => name[0]).join('')}
            </span>
          )}
        </div>
        
        <h3 className="uppercase text-sm font-bold border-b border-white/30 pb-2 mb-3">
          Contact
        </h3>
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 flex-shrink-0" />
            <span>{data.personalInfo.phone}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 flex-shrink-0" />
            <span className="break-all">{data.personalInfo.email}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 flex-shrink-0" />
            <span>{data.personalInfo.address}</span>
          </div>
        </div>
        
        <h3 className="uppercase text-sm font-bold border-b border-white/30 pb-2 mb-3">
          Skills
        </h3>
        <div className="mb-6">
          <ul className="list-disc pl-5 text-sm space-y-1">
            {data.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        
        <h3 className="uppercase text-sm font-bold border-b border-white/30 pb-2 mb-3">
          Achievements
        </h3>
        <div>
          <ul className="list-disc pl-5 text-sm space-y-1">
            {data.achievements?.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Main content */}
      <div className="bg-white flex-1 p-6">
        <h1 className="text-3xl font-bold text-[#004167] mb-1">
          {data.personalInfo.fullName}
        </h1>
        <p className="text-gray-600 mb-4">{data.personalInfo.objective}</p>
        
        <hr className="border-[#004167]/20 my-4" />
        
        <div className="mb-6">
          <h2 className="text-xl font-bold text-[#004167] flex items-center gap-2 mb-3">
            <BookOpen className="h-5 w-5" /> Education
          </h2>
          <div className="ml-7">
            <h3 className="font-bold">{data.education.degree}</h3>
            <p className="text-gray-700">{data.education.institution}</p>
            <p className="text-gray-500 text-sm">{data.education.graduationDate}</p>
            {data.education.gpa && (
              <p className="text-gray-700 mt-1">CGPA: {data.education.gpa}</p>
            )}
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-bold text-[#004167] flex items-center gap-2 mb-3">
            <Award className="h-5 w-5" /> Internship Experience
          </h2>
          <div className="ml-7">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold">{data.experience.internship}</h3>
                <p className="text-gray-700">{data.experience.company}</p>
              </div>
              <p className="text-gray-500 text-sm">{data.experience.duration}</p>
            </div>
            <p className="italic text-gray-700 mt-1">{data.experience.role}</p>
            <p className="text-gray-600 mt-2">{data.experience.responsibilities}</p>
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-bold text-[#004167] flex items-center gap-2 mb-3">
            Projects
          </h2>
          <div className="space-y-4 ml-7">
            {data.projects.map((project, index) => (
              <div key={index}>
                <h3 className="font-bold">{project.name}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
