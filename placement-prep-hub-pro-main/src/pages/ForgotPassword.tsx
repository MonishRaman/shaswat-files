
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { useToast } from '@/components/ui/use-toast';

// const ForgotPassword: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [otpSent, setOtpSent] = useState(false);
//   const { toast } = useToast();

//   const handleSendOTP = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     try {
//       // Simulating an API call to send OTP
//       await new Promise(resolve => setTimeout(resolve, 1500));
      
//       // For demo purposes - always succeed
//       setOtpSent(true);
//       toast({
//         title: "OTP Sent",
//         description: `A verification code has been sent to ${email}. Please check your inbox.`,
//       });
//     } catch (error) {
//       toast({
//         variant: "destructive",
//         title: "Error",
//         description: "Failed to send verification code. Please try again.",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (otpSent) {
//     return <OTPVerification email={email} />;
//   }

//   return (
//     <div className="h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
//       <div className="w-full max-w-md">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-placemate-blue">PLACE-MATE-HUB</h1>
//           <p className="text-gray-600 mt-2">Your placement preparation partner</p>
//         </div>
        
//         <Card>
//           <CardHeader>
//             <CardTitle>Forgot Password</CardTitle>
//             <CardDescription>
//               Enter your email address to receive a verification code
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleSendOTP} className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <Button 
//                 type="submit" 
//                 className="w-full bg-placemate-blue hover:bg-placemate-darkblue"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? 'Sending...' : 'Send Verification Code'}
//               </Button>
//             </form>
//           </CardContent>
//           <CardFooter className="flex justify-center">
//             <p className="text-sm text-gray-600">
//               Remember your password? <Link to="/login" className="text-placemate-blue hover:underline">Login</Link>
//             </p>
//           </CardFooter>
//         </Card>
//       </div>
//     </div>
//   );
// };

// const OTPVerification: React.FC<{ email: string }> = ({ email }) => {
//   const [otp, setOtp] = useState('');
//   const [isVerifying, setIsVerifying] = useState(false);
//   const [verified, setVerified] = useState(false);
//   const { toast } = useToast();

//   const handleVerifyOTP = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsVerifying(true);
    
//     try {
//       // Simulating an API call to verify OTP
//       await new Promise(resolve => setTimeout(resolve, 1500));
      
//       // For demo purposes - always succeed unless OTP is "wrong"
//       if (otp === "wrong") {
//         toast({
//           variant: "destructive",
//           title: "Invalid Code",
//           description: "The verification code is incorrect. Please try again.",
//         });
//       } else {
//         setVerified(true);
//       }
//     } catch (error) {
//       toast({
//         variant: "destructive",
//         title: "Error",
//         description: "Failed to verify code. Please try again.",
//       });
//     } finally {
//       setIsVerifying(false);
//     }
//   };

//   if (verified) {
//     return <ResetPassword email={email} />;
//   }

//   return (
//     <div className="h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
//       <div className="w-full max-w-md">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-placemate-blue">PLACE-MATE-HUB</h1>
//           <p className="text-gray-600 mt-2">Your placement preparation partner</p>
//         </div>
        
//         <Card>
//           <CardHeader>
//             <CardTitle>Verify Your Email</CardTitle>
//             <CardDescription>
//               Enter the verification code sent to {email}
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleVerifyOTP} className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="otp">Verification Code</Label>
//                 <Input
//                   id="otp"
//                   placeholder="Enter verification code"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                   required
//                   className="text-center tracking-widest text-lg"
//                   maxLength={6}
//                 />
//               </div>
//               <Button 
//                 type="submit" 
//                 className="w-full bg-placemate-blue hover:bg-placemate-darkblue"
//                 disabled={isVerifying}
//               >
//                 {isVerifying ? 'Verifying...' : 'Verify Code'}
//               </Button>
//             </form>
//           </CardContent>
//           <CardFooter className="flex flex-col items-center space-y-2">
//             <p className="text-sm text-gray-600">
//               Didn't receive a code? <button className="text-placemate-blue hover:underline">Resend Code</button>
//             </p>
//             <p className="text-sm text-gray-600">
//               <Link to="/forgot-password" className="text-placemate-blue hover:underline">Use a different email</Link>
//             </p>
//           </CardFooter>
//         </Card>
//       </div>
//     </div>
//   );
// };

// const ResetPassword: React.FC<{ email: string }> = ({ email }) => {
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [isResetting, setIsResetting] = useState(false);
//   const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const { toast } = useToast();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (password) {
//       setPasswordErrors(validatePassword(password));
//     } else {
//       setPasswordErrors([]);
//     }
//   }, [password]);

//   const handleResetPassword = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (password !== confirmPassword) {
//       toast({
//         variant: "destructive",
//         title: "Password mismatch",
//         description: "Passwords don't match. Please try again.",
//       });
//       return;
//     }
    
//     if (passwordErrors.length > 0) {
//       toast({
//         variant: "destructive",
//         title: "Password requirements not met",
//         description: "Please fix the password issues before continuing.",
//       });
//       return;
//     }
    
//     setIsResetting(true);
    
//     try {
//       // Simulating an API call to reset password
//       await new Promise(resolve => setTimeout(resolve, 1500));
      
//       // For demo purposes - always succeed
//       toast({
//         title: "Password Reset Successful",
//         description: "Your password has been reset successfully. You can now login with your new password.",
//       });
      
//       navigate('/login');
//     } catch (error) {
//       toast({
//         variant: "destructive",
//         title: "Error",
//         description: "Failed to reset password. Please try again.",
//       });
//     } finally {
//       setIsResetting(false);
//     }
//   };

//   const toggleShowPassword = () => setShowPassword(!showPassword);
//   const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

//   return (
//     <div className="h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
//       <div className="w-full max-w-md">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-placemate-blue">PLACE-MATE-HUB</h1>
//           <p className="text-gray-600 mt-2">Your placement preparation partner</p>
//         </div>
        
//         <Card>
//           <CardHeader>
//             <CardTitle>Reset Password</CardTitle>
//             <CardDescription>
//               Create a new password for {email}
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleResetPassword} className="space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="password">New Password</Label>
//                 <div className="relative">
//                   <Input
//                     id="password"
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Create a new password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                   <button 
//                     type="button"
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//                     onClick={toggleShowPassword}
//                   >
//                     {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                   </button>
//                 </div>
//                 {passwordErrors.length > 0 && (
//                   <div className="mt-2 space-y-1">
//                     <p className="text-sm font-medium text-amber-600">Password must contain:</p>
//                     <ul className="text-xs space-y-1 list-disc pl-5">
//                       {passwordErrors.map((error, index) => (
//                         <li key={index} className="text-red-500">{error}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="confirmPassword">Confirm New Password</Label>
//                 <div className="relative">
//                   <Input
//                     id="confirmPassword"
//                     type={showConfirmPassword ? "text" : "password"}
//                     placeholder="Confirm your new password"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     required
//                   />
//                   <button 
//                     type="button"
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
//                     onClick={toggleShowConfirmPassword}
//                   >
//                     {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                   </button>
//                 </div>
//               </div>
//               <Button 
//                 type="submit" 
//                 className="w-full bg-placemate-blue hover:bg-placemate-darkblue"
//                 disabled={isResetting}
//               >
//                 {isResetting ? 'Resetting Password...' : 'Reset Password'}
//               </Button>
//             </form>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// // Needed imports for the nested components
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
// import { validatePassword } from '../utils/passwordUtils';
// import { Eye, EyeOff } from 'lucide-react';

// export default ForgotPassword;


import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { validatePassword } from '../utils/passwordUtils';
import { Eye, EyeOff } from 'lucide-react';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const { toast } = useToast();

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create form data to send to PHP backend
      const formData = new FormData();
      formData.append('email', email);
      formData.append('action', 'sendOTP');
      
      // Send the data to the PHP forgot password endpoint
      const response = await fetch('http://localhost/placemate/ForgotPassword.php', {
        method: 'POST',
        body: formData,
      });
      
      const data = await response.json();
      
      if (data.success) {
        setOtpSent(true);
        toast({
          title: "OTP Sent",
          description: `A verification code has been sent to ${email}. Please check your inbox.`,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: data.message || "Failed to send verification code. Please try again.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send verification code. Please try again.",
      });
      console.error('Send OTP error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (otpSent) {
    return <OTPVerification email={email} />;
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-placemate-blue">PLACE-MATE-HUB</h1>
          <p className="text-gray-600 mt-2">Your placement preparation partner</p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Forgot Password</CardTitle>
            <CardDescription>
              Enter your email address to receive a verification code
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSendOTP} className="space-y-4">
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
              <Button 
                type="submit" 
                className="w-full bg-placemate-blue hover:bg-placemate-darkblue"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Verification Code'}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-gray-600">
              Remember your password? <Link to="/login" className="text-placemate-blue hover:underline">Login</Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

const OTPVerification: React.FC<{ email: string }> = ({ email }) => {
  const [otp, setOtp] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verified, setVerified] = useState(false);
  const { toast } = useToast();

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    
    try {
      // Create form data to send to PHP backend
      const formData = new FormData();
      formData.append('email', email);
      formData.append('otp', otp);
      formData.append('action', 'verifyOTP');
      
      // Send the data to the PHP forgot password endpoint
      const response = await fetch('http://localhost/placemate/ForgotPassword.php', {
        method: 'POST',
        body: formData,
      });
      
      const data = await response.json();
      
      if (data.success) {
        setVerified(true);
      } else {
        toast({
          variant: "destructive",
          title: "Invalid Code",
          description: data.message || "The verification code is incorrect. Please try again.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to verify code. Please try again.",
      });
      console.error('Verify OTP error:', error);
    } finally {
      setIsVerifying(false);
    }
  };

  if (verified) {
    return <ResetPassword email={email} />;
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-placemate-blue">PLACE-MATE-HUB</h1>
          <p className="text-gray-600 mt-2">Your placement preparation partner</p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Verify Your Email</CardTitle>
            <CardDescription>
              Enter the verification code sent to {email}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleVerifyOTP} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="otp">Verification Code</Label>
                <Input
                  id="otp"
                  placeholder="Enter verification code"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  className="text-center tracking-widest text-lg"
                  maxLength={6}
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-placemate-blue hover:bg-placemate-darkblue"
                disabled={isVerifying}
              >
                {isVerifying ? 'Verifying...' : 'Verify Code'}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col items-center space-y-2">
            <p className="text-sm text-gray-600">
              Didn't receive a code? <button className="text-placemate-blue hover:underline">Resend Code</button>
            </p>
            <p className="text-sm text-gray-600">
              <Link to="/forgot-password" className="text-placemate-blue hover:underline">Use a different email</Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

const ResetPassword: React.FC<{ email: string }> = ({ email }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isResetting, setIsResetting] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (password) {
      setPasswordErrors(validatePassword(password));
    } else {
      setPasswordErrors([]);
    }
  }, [password]);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        variant: "destructive",
        title: "Password mismatch",
        description: "Passwords don't match. Please try again.",
      });
      return;
    }
    
    if (passwordErrors.length > 0) {
      toast({
        variant: "destructive",
        title: "Password requirements not met",
        description: "Please fix the password issues before continuing.",
      });
      return;
    }
    
    setIsResetting(true);
    
    try {
      // Create form data to send to PHP backend
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
      formData.append('action', 'resetPassword');
      
      // Send the data to the PHP forgot password endpoint
      const response = await fetch('http://localhost/placemate/ForgotPassword.php', {
        method: 'POST',
        body: formData,
      });
      
      const data = await response.json();
      
      if (data.success) {
        toast({
          title: "Password Reset Successful",
          description: "Your password has been reset successfully. You can now login with your new password.",
        });
        
        navigate('/login');
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: data.message || "Failed to reset password. Please try again.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to reset password. Please try again.",
      });
      console.error('Reset password error:', error);
    } finally {
      setIsResetting(false);
    }
  };

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-placemate-blue">PLACE-MATE-HUB</h1>
          <p className="text-gray-600 mt-2">Your placement preparation partner</p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Reset Password</CardTitle>
            <CardDescription>
              Create a new password for {email}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleResetPassword} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">New Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a new password"
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
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your new password"
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
                disabled={isResetting}
              >
                {isResetting ? 'Resetting Password...' : 'Reset Password'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;
