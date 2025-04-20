
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const IndexContactUs: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you soon!",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-gray-600">Get in touch with the PLACE-MATE-HUB team</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
            <CardDescription>
              Have questions or feedback? We'd love to hear from you!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="What is your message about?"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                  rows={6}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-placemate-blue hover:bg-placemate-darkblue"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Reach out to us through any of these channels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="text-placemate-blue mt-1" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-sm text-gray-600">info@placematehub.com</p>
                  <p className="text-sm text-gray-600">support@placematehub.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-placemate-blue mt-1" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-sm text-gray-600">+1 (123) 456-7890</p>
                  <p className="text-sm text-gray-600">Mon-Fri, 9:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-placemate-blue mt-1" />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-sm text-gray-600">
                    123 Education Lane<br />
                    Tech City, TC 12345<br />
                    United States
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium">How do I reset my password?</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Click on the "Forgot Password" link on the login page and follow the instructions sent to your email.
                </p>
              </div>
              <div>
                <h3 className="font-medium">Are the mock tests free?</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Yes, all mock tests are completely free for registered users.
                </p>
              </div>
              <div>
                <h3 className="font-medium">How often is content updated?</h3>
                <p className="text-sm text-gray-600 mt-1">
                  We update our question banks and resources monthly to keep them relevant.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-gray-600">
                Can't find what you're looking for? Contact our support team for assistance.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default IndexContactUs;
