
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { validatePassword } from '../utils/passwordUtils';
import { Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';

const SignupForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  
  const { signup } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (password) {
      setPasswordErrors(validatePassword(password));
    } else {
      setPasswordErrors([]);
    }
  }, [password]);

  const validateForm = () => {
    if (password !== confirmPassword) {
      setFormError("Passwords don't match. Please try again.");
      toast({
        variant: "destructive",
        title: "Password mismatch",
        description: "Passwords don't match. Please try again.",
      });
      return false;
    }
    
    if (passwordErrors.length > 0) {
      setFormError("Please fix the password issues before continuing.");
      toast({
        variant: "destructive",
        title: "Password requirements not met",
        description: "Please fix the password issues before continuing.",
      });
      return false;
    }
    
    setFormError(null);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setFormError(null);
    
    try {
      // First call the context method to ensure we have a working signup flow
      const success = await signup(name, email, phone, password);
      
      // Try to call backend but don't wait for it or make it critical for the flow
      try {
        // Create form data to send to PHP backend
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('password', password);
        
        fetch('https://place-mate-hub.000webhostapp.com/placemate/Signup.php', {
          method: 'POST',
          body: formData,
        })
        .then(response => {
          console.log('Backend response received:', response);
        })
        .catch(error => {
          console.log('Non-critical backend error:', error);
        });
      } catch (backendError) {
        // Log but don't throw - this shouldn't block the main flow
        console.log('Non-critical backend error:', backendError);
      }
      
      if (success) {
        toast({
          title: "Signup successful",
          description: "Welcome to PLACE-MATE-HUB!",
        });
        
        navigate('/dashboard');
      } else {
        setFormError("Failed to create account. Please try with a different email.");
        toast({
          variant: "destructive",
          title: "Signup failed",
          description: "Failed to create account. Please try with a different email.",
        });
      }
    } catch (error) {
      console.error('Signup error:', error);
      setFormError("An unexpected error occurred. Please try again.");
      toast({
        variant: "destructive",
        title: "Signup error",
        description: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <motion.div 
      className="w-full"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Create an Account</h2>
        <p className="text-gray-600 mt-1">Sign up to start your placement preparation journey</p>
      </div>
      
      {formError && (
        <div className="mb-4 p-3 bg-red-100 border border-red-300 text-red-600 rounded">
          <p className="font-medium">Signup error</p>
          <p>{formError}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button 
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={toggleShowPassword}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {passwordErrors.length > 0 && (
            <div className="mt-2 space-y-1">
              <p className="text-sm font-medium text-amber-600">Password must contain:</p>
              <ul className="text-xs space-y-1 list-disc pl-5">
                {passwordErrors.map((error, index) => (
                  <li key={index} className="text-red-500">{error}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <div className="relative">
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button 
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={toggleShowConfirmPassword}
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
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
              Creating account...
            </span>
          ) : 'Sign Up'}
        </Button>
      </form>
    </motion.div>
  );
};

export default SignupForm;
