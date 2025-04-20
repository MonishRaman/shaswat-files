
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);
    
    try {
      // First use the context login method
      const success = await login(email, password);
      
      // Also try to call backend but don't make it critical
      try {
        // Create form data to send to PHP backend
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        
        // Detect environment and use appropriate URL
        const backendUrl = window.location.hostname === 'localhost' 
          ? 'http://localhost/placemate/Login.php'
          : 'https://place-mate-hub.000webhostapp.com/placemate/login.php';
        
        fetch(backendUrl, {
          method: 'POST',
          body: formData,
        })
        .then(response => {
          console.log('Backend login response received:', response);
        })
        .catch(error => {
          console.log('Non-critical backend login error:', error);
        });
      } catch (backendError) {
        // Log but don't throw - this shouldn't block the main flow
        console.log('Non-critical backend login error:', backendError);
      }
      
      if (success) {
        toast({
          title: "Login successful",
          description: "Welcome back to PLACE-MATE-HUB!",
        });
        navigate('/dashboard');
      } else {
        setFormError("Invalid email or password. Please try again.");
        toast({
          variant: "destructive",
          title: "Login failed",
          description: "Invalid email or password. Please try again.",
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      setFormError("An unexpected error occurred. Please try again.");
      toast({
        variant: "destructive",
        title: "Login error",
        description: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <motion.div 
      className="w-full"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Login</h2>
        <p className="text-gray-600 mt-1">Enter your credentials to access your account</p>
      </div>
      
      {formError && (
        <div className="mb-4 p-3 bg-red-100 border border-red-300 text-red-600 rounded">
          <p className="font-medium">Login error</p>
          <p>{formError}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border-placemate-blue/30 focus:border-placemate-blue focus:ring-1 focus:ring-placemate-blue"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border-placemate-blue/30 focus:border-placemate-blue focus:ring-1 focus:ring-placemate-blue"
            />
            <button 
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={toggleShowPassword}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <div className="text-right">
            <Link to="/forgot-password" className="text-sm text-placemate-blue hover:underline">
              Forgot password?
            </Link>
          </div>
        </div>
        <Button 
          type="submit" 
          className="w-full bg-placemate-blue hover:bg-placemate-darkblue"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Logging in...
            </span>
          ) : 'Login'}
        </Button>
      </form>
    </motion.div>
  );
};

export default LoginForm;
