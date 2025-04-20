
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Clock
} from 'lucide-react';
import IndexAboutUs from './IndexAboutUs';
import IndexContactUs from './IndexContactUs';
import IndexAchievements from './IndexAchievements';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

const Index: React.FC = () => {
  const [activeContent, setActiveContent] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleNavClick = (content: string) => {
    if (content === 'login') {
      navigate('/login');
    } else if (content === 'signup') {
      navigate('/signup');
    } else {
      setActiveContent(content);
    }
  };

  const handleBackToHome = () => {
    setActiveContent(null);
  };

  const floatVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }
    }
  };

  const typingText = "Your ultimate platform for placement preparation and career success...";
  const typingLetters = typingText.split("");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-placemate-blue text-white py-4 px-6 sticky top-0 z-50">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/11e83bd8-b75a-4421-89f2-a9e06d517016.png" 
              alt="PLACE-MATE-HUB Logo" 
              className="h-12 w-12 rounded-full object-cover"
            />
            <h1 className="text-2xl font-bold text-white">PLACE-MATE-HUB</h1>
          </div>
    
          <nav className="flex items-center space-x-6">
            <button 
              onClick={() => handleNavClick('about')} 
              className="hover:text-gray-300 transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => handleNavClick('achievements')}
              className="hover:text-gray-300 transition-colors"
            >
              Achievements
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="hover:text-gray-300 transition-colors"
            >
              Contact Us
            </button>
            <button 
              onClick={() => handleNavClick('login')}
              className="bg-yellow-400 text-placemate-blue font-semibold px-6 py-2 rounded-md hover:bg-yellow-300 transition-colors"
            >
              Login
            </button>
            <button 
              onClick={() => handleNavClick('signup')}
              className="text-white border border-white px-6 py-2 rounded-md hover:bg-white/10 transition-colors"
            >
              Sign Up
            </button>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="flex-grow relative">
        {activeContent ? (
          <div className="container mx-auto px-6 py-8">
            <div className="mb-6 flex justify-end">
              <button
                onClick={handleBackToHome}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2"
              >
                <span>←</span> Back to Home
              </button>
            </div>
            
            {activeContent === 'about' && <IndexAboutUs />}
            {activeContent === 'contact' && <IndexContactUs />}
            {activeContent === 'achievements' && <IndexAchievements />}
          </div>
        ) : (
          <>
            <div 
              className="absolute inset-0 bg-cover bg-center z-0" 
              style={{ 
                backgroundImage: "url('/lovable-uploads/11e83bd8-b75a-4421-89f2-a9e06d517016.png')",
                minHeight: "calc(100vh - 64px - 20rem)"
              }}
            />
            
            <div className="absolute inset-0 bg-black/10 z-10" style={{ minHeight: "calc(100vh - 64px - 20rem)" }} />
            
            <div className="relative z-20 flex items-center justify-center py-20 min-h-[70vh]">
              <div className="container mx-auto px-6 flex flex-col items-center justify-center">
                {/* Animated Title */}
                <motion.div
                  variants={floatVariants}
                  animate="animate"
                  className="mb-8 text-center"
                >
                  <motion.h1
                    className="text-white text-5xl md:text-7xl font-extrabold tracking-wide flex flex-wrap justify-center"
                    style={{ textShadow: "0 8px 16px rgba(0,0,0,0.7)" }}
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.1
                        }
                      }
                    }}
                  >
                    {"PLACE-MATE-HUB".split("").map((letter, index) => (
                      <motion.span
                        key={index}
                        variants={{
                          hidden: { y: -50, opacity: 0 },
                          visible: {
                            y: 0,
                            opacity: 1,
                            transition: {
                              type: "spring",
                              stiffness: 500,
                              damping: 20
                            }
                          }
                        }}
                      >
                        {letter === " " ? "\u00A0" : letter}
                      </motion.span>
                    ))}
                  </motion.h1>
                </motion.div>

                {/* Animated Typing Effect */}
                <motion.p
                  className="text-white text-lg md:text-xl font-medium mt-4 max-w-2xl text-center"
                  style={{ textShadow: "0 4px 8px rgba(0,0,0,0.6)", whiteSpace: 'pre-wrap' }}
                >
                  {typingLetters.map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05, repeat: Infinity, repeatDelay: 5 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.p>
                
                {/* Call to action buttons */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavClick('login')}
                    className="bg-yellow-400 text-placemate-blue font-bold px-8 py-3 rounded-md hover:bg-yellow-300 transition-colors text-lg"
                  >
                    Login Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavClick('signup')}
                    className="bg-white text-placemate-blue font-bold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors text-lg"
                  >
                    Sign Up
                  </motion.button>
                </div>
              </div>
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-lg font-semibold mb-4">🔒 Legal & Copyright</h3>
              <p className="mb-2">© 2025 PLACE-MATE-HUB. All rights reserved.</p>
              <div className="space-y-1">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Terms & Conditions</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">👨‍💻 Connect With Us</h3>
              <div className="flex space-x-4">
              <a href="https://www.instagram.com/glowifyofficial" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/glowifyofficial" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={24} />
              </a>
              <a href="https://twitter.com/glowifyhq" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={24} />
              </a>
              <a href="https://www.linkedin.com/company/glowify" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
              </a>
              <a href="https://www.youtube.com/@glowify" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Youtube size={24} />
              </a>
              </div>
              <div className="mt-4 flex items-center text-gray-400">
                <Clock size={18} className="mr-2" />
                <span>Business hours: Mon-Fri 9:00 AM - 6:00 PM</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">♿ About</h3>
              <p className="text-gray-400 mb-2">
                Designed by PLACE-MATE-HUB Team
              </p>
              <p className="text-gray-400">
                Powered by Modern Web Technologies
              </p>
              <div className="mt-4">
                <p className="text-gray-400">
                  License #PMH-2025-IN
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>Recognised by top companies in the industry</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
