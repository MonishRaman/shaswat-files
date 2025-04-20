// import React, { useState } from 'react';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Textarea } from '@/components/ui/textarea';
// import { Mail, MapPin, Phone, ArrowLeft } from 'lucide-react';
// import { useToast } from '@/components/ui/use-toast';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const ContactUs: React.FC = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [subject, setSubject] = useState('');
//   const [message, setMessage] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { toast } = useToast();
//   const { isAuthenticated } = useAuth();
//   const navigate = useNavigate();

//   const handleBack = () => {
//     if (isAuthenticated) {
//       navigate('/dashboard');
//     } else {
//       navigate('/');
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate API call
//     setTimeout(() => {
//       toast({
//         title: "Message sent successfully",
//         description: "We'll get back to you soon!",
//       });
      
//       // Reset form
//       setName('');
//       setEmail('');
//       setSubject('');
//       setMessage('');
//       setIsSubmitting(false);
//     }, 1500);
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <h1 className="text-3xl font-bold">Contact Us</h1>
//         <Button 
//           onClick={handleBack} 
//           variant="outline" 
//           className="flex items-center gap-2 bg-orange-500 text-white hover:bg-orange-600"
//         >
//           <ArrowLeft size={16} />
//           {isAuthenticated ? 'Back to Dashboard' : 'Back to Home'}
//         </Button>
//       </div>
//       <p className="text-gray-600">Get in touch with the PLACE-MATE-HUB team</p>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <Card className="md:col-span-2">
//           <CardHeader>
//             <CardTitle>Send Us a Message</CardTitle>
//             <CardDescription>
//               Have questions or feedback? We'd love to hear from you!
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <Label htmlFor="name">Your Name</Label>
//                   <Input
//                     id="name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     placeholder="Enter your name"
//                     required
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="email">Email Address</Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Enter your email"
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="subject">Subject</Label>
//                 <Input
//                   id="subject"
//                   value={subject}
//                   onChange={(e) => setSubject(e.target.value)}
//                   placeholder="What is your message about?"
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="message">Message</Label>
//                 <Textarea
//                   id="message"
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   placeholder="Type your message here..."
//                   rows={6}
//                   required
//                 />
//               </div>
//               <Button 
//                 type="submit" 
//                 className="w-full bg-placemate-blue hover:bg-placemate-darkblue"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? 'Sending...' : 'Send Message'}
//               </Button>
//             </form>
//           </CardContent>
//         </Card>

//         <div className="space-y-6">
//           <Card>
//             <CardHeader>
//               <CardTitle>Contact Information</CardTitle>
//               <CardDescription>
//                 Reach out to us through any of these channels
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="flex items-start gap-3">
//                 <Mail className="text-placemate-blue mt-1" />
//                 <div>
//                   <h3 className="font-medium">Email</h3>
//                   <p className="text-sm text-gray-600">info@placematehub.com</p>
//                   <p className="text-sm text-gray-600">support@placematehub.com</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-3">
//                 <Phone className="text-placemate-blue mt-1" />
//                 <div>
//                   <h3 className="font-medium">Phone</h3>
//                   <p className="text-sm text-gray-600">+1 (123) 456-7890</p>
//                   <p className="text-sm text-gray-600">Mon-Fri, 9:00 AM - 6:00 PM</p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-3">
//                 <MapPin className="text-placemate-blue mt-1" />
//                 <div>
//                   <h3 className="font-medium">Location</h3>
//                   <p className="text-sm text-gray-600">
//                     123 Education Lane<br />
//                     Tech City, TC 12345<br />
//                     United States
//                   </p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader>
//               <CardTitle>Frequently Asked Questions</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div>
//                 <h3 className="font-medium">How do I reset my password?</h3>
//                 <p className="text-sm text-gray-600 mt-1">
//                   Click on the "Forgot Password" link on the login page and follow the instructions sent to your email.
//                 </p>
//               </div>
//               <div>
//                 <h3 className="font-medium">Are the mock tests free?</h3>
//                 <p className="text-sm text-gray-600 mt-1">
//                   Yes, all mock tests are completely free for registered users.
//                 </p>
//               </div>
//               <div>
//                 <h3 className="font-medium">How often is content updated?</h3>
//                 <p className="text-sm text-gray-600 mt-1">
//                   We update our question banks and resources monthly to keep them relevant.
//                 </p>
//               </div>
//             </CardContent>
//             <CardFooter>
//               <p className="text-sm text-gray-600">
//                 Can't find what you're looking for? Contact our support team for assistance.
//               </p>
//             </CardFooter>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;


import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { toast } from "sonner";
import axios from "axios";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Contact: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // First try sending through your local server
      try {
        await axios.post("http://localhost:5000/send-email", formData);
        console.log("Email sent through local server");
      } catch (serverError) {
        console.log("Could not send through local server, falling back to Formspree");
      }

      // Always send through Formspree as a backup
      const formspreeResponse = await axios.post("https://formspree.io/f/mbljryjl", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (formspreeResponse.status === 200) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("An error occurred. Please try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#1a237e] text-white py-4 px-0">
        <div className="w-full flex justify-between items-center px-4">
          <div className="flex items-center gap-2">
            <img
              src="/lovable-uploads/ba8745c2-6f05-457c-b058-58753e351fae.png"
              alt="CodeCrafters Logo"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="text-xl font-bold">Acromine Tech</span>
          </div>
          <Button
            variant="outline"
            onClick={() => navigate("/")}
            className="bg-orange-500 hover:bg-orange-600 text-white border-orange-500"
          >
            ← Back to Home
          </Button>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-1 py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions? Fill out the form below and we'll get back to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card p-8 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md">
              <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                />
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Your Phone Number"
                />
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  rows={5}
                />
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="glass-card p-8 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-6 text-left">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-blue-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">
                        shaswatmishra5533@gmail.com <br />
                        hariradhi2006@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-red-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">
                        +91 80 1234 5678 <br /> +91 9692677806
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-teal-500 mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-muted-foreground">
                        The Art Of Living, Bangalore, Karnataka 560038
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;