
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { User, LogOut } from 'lucide-react';
import Logo from './Logo';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  
  return (
    <nav className="bg-white border-b px-6 py-3 z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Logo />
        </div>
        
        <div className="flex items-center gap-6">
          {/* Navigation links moved to the right */}
          <div className="hidden md:flex gap-6">
            <Link to="/dashboard" className="text-gray-700 hover:text-placemate-blue font-medium">Home</Link>
            <Link to="/dashboard-about" className="text-gray-700 hover:text-placemate-blue font-medium">About Us</Link>
            <Link to="/dashboard-contact" className="text-gray-700 hover:text-placemate-blue font-medium">Contact Us</Link>
            <Link to="/dashboard-achievements" className="text-gray-700 hover:text-placemate-blue font-medium">Achievements</Link>
          </div>
          
          {/* User icon dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center hover:bg-gray-100 p-2 rounded-full">
              <User size={20} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-white p-2">
              <DropdownMenuItem className="cursor-pointer">
                <div className="flex items-center justify-between w-full">
                  <span>{user?.email}</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer" onClick={logout}>
                <div className="flex items-center gap-2 text-red-500">
                  <LogOut size={16} />
                  <span>Logout</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
