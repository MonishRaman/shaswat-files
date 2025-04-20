
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  FileQuestion, 
  BookOpen, 
  GraduationCap, 
  FileText, 
  FileEdit, 
  TestTube 
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();
  
  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: FileQuestion, label: 'Placement Questions', path: '/placement-questions' },
    { icon: BookOpen, label: 'Company Rules', path: '/company-rules' },
    { icon: GraduationCap, label: 'Skill Guide', path: '/skill-guide' },
    { icon: FileText, label: 'Resume Reader', path: '/resume-reader' },
    { icon: FileEdit, label: 'Resume Builder', path: '/resume-builder' },
    { icon: TestTube, label: 'Mock Test', path: '/mock-test' },
  ];

  return (
    <div className="placemate-sidebar">
      <div className="py-4 px-4 border-b border-placemate-darkblue">
        <Link to="/dashboard">
          <span className="text-xl font-bold">Dashboard</span>
        </Link>
      </div>
      <div className="mt-4">
        {menuItems.map((item) => (
          <Link 
            key={item.path} 
            to={item.path} 
            className={`sidebar-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
