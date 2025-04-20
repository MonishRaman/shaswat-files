
import React, { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { FileCheck, Download, Save, UserCircle, GraduationCap, FileText, Image, Upload } from "lucide-react";
import { BlueTemplate } from "@/components/resume/BlueTemplate";
import { BrownTemplate } from "@/components/resume/BrownTemplate";
import { OrangeTemplate } from "@/components/resume/OrangeTemplate";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ResumeData } from "@/types";

// Form validation schema
const formSchema = z.object({
  personalInfo: z.object({
    fullName: z.string().min(2, { message: "Name is required" }),
    address: z.string().min(2, { message: "Address is required" }),
    phone: z.string().min(10, { message: "Valid phone number is required" }),
    email: z.string().email({ message: "Valid email is required" }),
    objective: z.string().min(10, { message: "Career objective is required" }),
    profileImage: z.string().optional(),
  }),
  education: z.object({
    degree: z.string().min(2, { message: "Degree is required" }),
    institution: z.string().min(2, { message: "Institution name is required" }),
    graduationDate: z.string().min(2, { message: "Graduation date is required" }),
    gpa: z.string().optional(),
    achievements: z.string().optional(),
  }),
  experience: z.object({
    internship: z.string().min(2, { message: "Internship details are required" }),
    company: z.string().min(2, { message: "Company name is required" }),
    duration: z.string().min(2, { message: "Duration is required" }),
    role: z.string().min(2, { message: "Role is required" }),
    responsibilities: z.string().min(10, { message: "Responsibilities are required" }),
  }),
  skills: z.array(z.string()).min(1, { message: "At least one skill is required" }),
  projects: z.array(
    z.object({
      name: z.string().min(2, { message: "Project name is required" }),
      description: z.string().min(10, { message: "Project description is required" }),
    })
  ).min(1, { message: "At least one project is required" }),
  achievements: z.array(z.string()).optional(),
});

type FormValues = z.infer<typeof formSchema>;

// Default values for the form - lets add some sample data to make it easier to test
const defaultValues: FormValues = {
  personalInfo: {
    fullName: "John Doe",
    address: "123 Main Street, City, State",
    phone: "9876543210",
    email: "john.doe@example.com",
    objective: "Recent graduate seeking opportunities in software development to apply my skills and grow professionally.",
    profileImage: "",
  },
  education: {
    degree: "B.E. in Computer Science",
    institution: "University of Technology",
    graduationDate: "2020-2024",
    gpa: "8.5",
    achievements: "Dean's List, Technical Club Lead",
  },
  experience: {
    internship: "Artificial Intelligence",
    company: "TechCorp Solutions",
    duration: "3.5 months",
    role: "AI Research Intern",
    responsibilities: "Developed machine learning models, conducted data analysis, and assisted in creating AI-powered solutions for client projects.",
  },
  skills: ["Python", "Java", "Machine Learning", "SQL", "React"],
  projects: [
    { 
      name: "Smart Chatbot", 
      description: "Developed an AI-powered chatbot using natural language processing techniques to provide automated customer support."
    },
    {
      name: "Data Analysis Dashboard",
      description: "Created a responsive web dashboard to visualize complex datasets using React and D3.js."
    }
  ],
  achievements: ["Hackathon Winner 2023", "Published research paper on ML algorithms"],
};

const ResumeBuilder = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [selectedTemplate, setSelectedTemplate] = useState("blue");
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const { toast } = useToast();
  const resumeRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode: "onChange",
  });

  // Helper functions for form arrays
  const addSkill = () => {
    const currentSkills = form.getValues().skills || [];
    form.setValue("skills", [...currentSkills, ""]);
  };

  const removeSkill = (index: number) => {
    const currentSkills = form.getValues().skills;
    if (currentSkills.length > 1) {
      form.setValue(
        "skills",
        currentSkills.filter((_, i) => i !== index)
      );
    }
  };

  const addProject = () => {
    const currentProjects = form.getValues().projects || [];
    form.setValue("projects", [...currentProjects, { name: "", description: "" }]);
  };

  const removeProject = (index: number) => {
    const currentProjects = form.getValues().projects;
    if (currentProjects.length > 1) {
      form.setValue(
        "projects",
        currentProjects.filter((_, i) => i !== index)
      );
    }
  };

  const addAchievement = () => {
    const currentAchievements = form.getValues().achievements || [];
    form.setValue("achievements", [...currentAchievements, ""]);
  };

  const removeAchievement = (index: number) => {
    const currentAchievements = form.getValues().achievements || [];
    if (currentAchievements.length > 1) {
      form.setValue(
        "achievements",
        currentAchievements.filter((_, i) => i !== index)
      );
    }
  };

  // Handle profile image upload
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please select an image smaller than 5MB",
        variant: "destructive",
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setPreviewImage(result);
      form.setValue("personalInfo.profileImage", result);
    };
    reader.readAsDataURL(file);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  // PDF download handler
  const downloadPDF = async () => {
    if (!resumeRef.current) return;
    
    // Show loading toast
    toast({
      title: "Generating PDF",
      description: "Please wait while we prepare your resume...",
    });

    try {
      const canvas = await html2canvas(resumeRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });
      
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`${resumeData?.personalInfo.fullName.replace(/\s+/g, '_')}_Resume.pdf`);
      
      toast({
        title: "Resume downloaded",
        description: "Your resume has been downloaded successfully.",
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast({
        title: "Download failed",
        description: "There was an error generating your PDF. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Form submission handler - simplifying and fixing
  const onSubmit = (data: FormValues) => {
    console.log("Form submitted with data:", data);
    
    try {
      // Filter out empty skills and achievements
      const filteredSkills = data.skills.filter(skill => skill.trim() !== "");
      const filteredAchievements = data.achievements?.filter(achievement => achievement.trim() !== "") || [];
      
      // Fix for the type error: Ensure all projects have required name and description properties
      const filteredProjects = data.projects
        .filter(project => project.name?.trim() !== "" && project.description?.trim() !== "")
        .map(project => ({
          name: project.name || "Untitled Project",
          description: project.description || "No description provided"
        }));
      
      // Create the complete data object
      const completeData: ResumeData = {
        personalInfo: {
          fullName: data.personalInfo.fullName,
          address: data.personalInfo.address,
          phone: data.personalInfo.phone,
          email: data.personalInfo.email,
          objective: data.personalInfo.objective,
          profileImage: data.personalInfo.profileImage
        },
        education: {
          degree: data.education.degree,
          institution: data.education.institution,
          graduationDate: data.education.graduationDate,
          gpa: data.education.gpa,
          achievements: data.education.achievements
        },
        experience: {
          internship: data.experience.internship,
          company: data.experience.company,
          duration: data.experience.duration,
          role: data.experience.role,
          responsibilities: data.experience.responsibilities
        },
        skills: filteredSkills.length > 0 ? filteredSkills : ["No skills provided"],
        projects: filteredProjects.length > 0 
          ? filteredProjects
          : [{ name: "Sample Project", description: "No project details provided" }],
        achievements: filteredAchievements,
      };

      console.log("Processed resume data:", completeData);
      setResumeData(completeData);
      setIsPreviewMode(true);
      
      toast({
        title: "Resume created!",
        description: "Your resume has been generated successfully.",
      });
    } catch (error) {
      console.error("Error generating resume:", error);
      toast({
        title: "Error",
        description: "There was a problem generating your resume. Please check your inputs.",
        variant: "destructive",
      });
    }
  };

  // Direct submission function for the Generate Resume button
  const handleGenerateResume = () => {
    form.handleSubmit(onSubmit)();
  };

  return (
    <div className="container mx-auto py-6 max-w-7xl">
      {!isPreviewMode ? (
        <>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold">Resume Builder</h1>
              <p className="text-muted-foreground">
                Create a professional resume in minutes
              </p>
            </div>
            <Button 
              onClick={handleGenerateResume}
              className="bg-blue-800 hover:bg-blue-900"
              type="button"
            >
              <FileCheck className="mr-2 h-4 w-4" /> 
              Preview Resume
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8">
              <Card>
                <CardHeader>
                  <CardTitle>Enter Your Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <Tabs defaultValue="personal" onValueChange={setActiveTab} value={activeTab}>
                        <TabsList className="grid grid-cols-3 mb-6">
                          <TabsTrigger value="personal" className="flex items-center">
                            <UserCircle className="mr-2 h-4 w-4" />
                            Personal
                          </TabsTrigger>
                          <TabsTrigger value="academic" className="flex items-center">
                            <GraduationCap className="mr-2 h-4 w-4" />
                            Academic
                          </TabsTrigger>
                          <TabsTrigger value="template" className="flex items-center">
                            <FileText className="mr-2 h-4 w-4" />
                            Template
                          </TabsTrigger>
                        </TabsList>

                        <TabsContent value="personal" className="space-y-4">
                          {/* Profile Image Upload - Moved to top of personal section */}
                          <div className="space-y-2 mb-4">
                            <FormLabel htmlFor="profile-image">Profile Photo</FormLabel>
                            <div className="flex items-start gap-4">
                              <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                                {previewImage ? (
                                  <Avatar className="w-full h-full">
                                    <AvatarImage src={previewImage} alt="Profile preview" className="object-cover" />
                                    <AvatarFallback>
                                      <UserCircle className="h-12 w-12 text-gray-400" />
                                    </AvatarFallback>
                                  </Avatar>
                                ) : (
                                  <UserCircle className="h-12 w-12 text-gray-400" />
                                )}
                              </div>
                              <div className="flex-1">
                                <input 
                                  type="file" 
                                  ref={fileInputRef}
                                  id="profile-image" 
                                  accept="image/*"
                                  className="hidden"
                                  onChange={handleImageUpload}
                                />
                                <Button 
                                  type="button" 
                                  variant="outline" 
                                  onClick={triggerFileInput}
                                  className="flex items-center mb-2"
                                >
                                  <Upload className="mr-2 h-4 w-4" />
                                  Upload Photo
                                </Button>
                                <p className="text-sm text-gray-500">
                                  Upload your profile picture for the resume
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="personalInfo.fullName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Full Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="John Doe" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="personalInfo.email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email</FormLabel>
                                  <FormControl>
                                    <Input placeholder="johndoe@example.com" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="personalInfo.phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Phone</FormLabel>
                                  <FormControl>
                                    <Input placeholder="9876543210" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="personalInfo.address"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Address</FormLabel>
                                  <FormControl>
                                    <Input placeholder="City, State" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="personalInfo.objective"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Career Objective</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Seeking opportunities to further develop my skills..." 
                                    {...field} 
                                    rows={3}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <div className="mt-4">
                            <h3 className="font-medium mb-2">Skills</h3>
                            {form.getValues().skills.map((_, index) => (
                              <div key={index} className="flex items-center gap-2 mb-2">
                                <FormField
                                  control={form.control}
                                  name={`skills.${index}`}
                                  render={({ field }) => (
                                    <FormItem className="flex-1">
                                      <FormControl>
                                        <Input placeholder="e.g. Python, Java, AI" {...field} />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                <Button 
                                  type="button" 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => removeSkill(index)}
                                  disabled={form.getValues().skills.length <= 1}
                                >
                                  Remove
                                </Button>
                              </div>
                            ))}
                            <Button 
                              type="button" 
                              variant="outline" 
                              className="mt-2"
                              onClick={addSkill}
                            >
                              Add Skill
                            </Button>
                          </div>

                          <Button type="button" onClick={() => setActiveTab("academic")} className="mt-4">
                            Next: Academic
                          </Button>
                        </TabsContent>

                        <TabsContent value="academic" className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="education.degree"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Degree</FormLabel>
                                  <FormControl>
                                    <Input placeholder="B.E., B.Tech, etc." {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="education.institution"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Institution</FormLabel>
                                  <FormControl>
                                    <Input placeholder="University/College name" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="education.graduationDate"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Graduation Year/Period</FormLabel>
                                  <FormControl>
                                    <Input placeholder="e.g. 2020-2024" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="education.gpa"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>CGPA (Optional)</FormLabel>
                                  <FormControl>
                                    <Input placeholder="e.g. 8.5" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <div className="space-y-4">
                            <h3 className="font-medium">Internship Experience</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <FormField
                                control={form.control}
                                name="experience.internship"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Internship Field</FormLabel>
                                    <FormControl>
                                      <Input placeholder="e.g. Artificial Intelligence" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="experience.company"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Company</FormLabel>
                                    <FormControl>
                                      <Input placeholder="Company name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <FormField
                                control={form.control}
                                name="experience.duration"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Duration</FormLabel>
                                    <FormControl>
                                      <Input placeholder="e.g. 3.5 months" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="experience.role"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Role</FormLabel>
                                    <FormControl>
                                      <Input placeholder="e.g. AI Intern" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>

                            <FormField
                              control={form.control}
                              name="experience.responsibilities"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Responsibilities</FormLabel>
                                  <FormControl>
                                    <Textarea 
                                      placeholder="Describe your responsibilities and achievements" 
                                      {...field} 
                                      rows={3}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <div className="mt-4">
                            <h3 className="font-medium mb-2">Projects</h3>
                            {form.watch("projects").map((_, index) => (
                              <div key={index} className="border p-4 rounded-md mb-4">
                                <div className="flex justify-between items-center mb-2">
                                  <h4 className="font-medium">Project {index + 1}</h4>
                                  <Button 
                                    type="button" 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => removeProject(index)}
                                    disabled={form.watch("projects").length <= 1}
                                  >
                                    Remove
                                  </Button>
                                </div>
                                <div className="space-y-4">
                                  <FormField
                                    control={form.control}
                                    name={`projects.${index}.name`}
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel>Project Name</FormLabel>
                                        <FormControl>
                                          <Input placeholder="e.g. AI Chatbot" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                  <FormField
                                    control={form.control}
                                    name={`projects.${index}.description`}
                                    render={({ field }) => (
                                      <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                          <Textarea 
                                            placeholder="Describe your project" 
                                            {...field} 
                                            rows={2}
                                          />
                                        </FormControl>
                                        <FormMessage />
                                      </FormItem>
                                    )}
                                  />
                                </div>
                              </div>
                            ))}
                            <Button 
                              type="button" 
                              variant="outline" 
                              onClick={addProject}
                            >
                              Add Project
                            </Button>
                          </div>

                          <div className="mt-4">
                            <h3 className="font-medium mb-2">Achievements</h3>
                            {(form.getValues().achievements || []).map((_, index) => (
                              <div key={index} className="flex items-center gap-2 mb-2">
                                <FormField
                                  control={form.control}
                                  name={`achievements.${index}`}
                                  render={({ field }) => (
                                    <FormItem className="flex-1">
                                      <FormControl>
                                        <Input 
                                          placeholder="e.g. Won certificate from Generative AI" 
                                          {...field} 
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                <Button 
                                  type="button" 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => removeAchievement(index)}
                                  disabled={(form.getValues().achievements || []).length <= 1}
                                >
                                  Remove
                                </Button>
                              </div>
                            ))}
                            <Button 
                              type="button" 
                              variant="outline" 
                              className="mt-2"
                              onClick={addAchievement}
                            >
                              Add Achievement
                            </Button>
                          </div>

                          <div className="flex justify-between mt-4">
                            <Button type="button" variant="outline" onClick={() => setActiveTab("personal")}>
                              Back: Personal
                            </Button>
                            <Button type="button" onClick={() => setActiveTab("template")}>
                              Next: Choose Template
                            </Button>
                          </div>
                        </TabsContent>

                        <TabsContent value="template">
                          <h3 className="font-medium mb-4">Choose a Template</h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div 
                              className={`border rounded-md overflow-hidden cursor-pointer transition-all ${
                                selectedTemplate === "blue" ? "ring-2 ring-blue-500" : ""
                              }`}
                              onClick={() => setSelectedTemplate("blue")}
                            >
                              <div className="bg-blue-800 text-white p-3 text-center">Blue Template</div>
                              <div className="p-2">
                                <div className="aspect-[2/3] bg-[#004167] relative">
                                  <div className="absolute inset-0 flex items-center justify-center text-white">
                                    Preview
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div 
                              className={`border rounded-md overflow-hidden cursor-pointer transition-all ${
                                selectedTemplate === "brown" ? "ring-2 ring-amber-800" : ""
                              }`}
                              onClick={() => setSelectedTemplate("brown")}
                            >
                              <div className="bg-amber-800 text-white p-3 text-center">Brown Template</div>
                              <div className="p-2">
                                <div className="aspect-[2/3] bg-[#5e4534] relative">
                                  <div className="absolute inset-0 flex items-center justify-center text-white">
                                    Preview
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div 
                              className={`border rounded-md overflow-hidden cursor-pointer transition-all ${
                                selectedTemplate === "orange" ? "ring-2 ring-orange-500" : ""
                              }`}
                              onClick={() => setSelectedTemplate("orange")}
                            >
                              <div className="bg-orange-500 text-white p-3 text-center">Orange Template</div>
                              <div className="p-2">
                                <div className="aspect-[2/3] bg-[#ff6b35] relative">
                                  <div className="absolute inset-0 flex items-center justify-center text-white">
                                    Preview
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex justify-between mt-6">
                            <Button type="button" variant="outline" onClick={() => setActiveTab("academic")}>
                              Back: Academic
                            </Button>
                            <Button 
                              type="button" 
                              onClick={handleGenerateResume}
                              className="bg-blue-800 hover:bg-blue-900"
                            >
                              <FileCheck className="mr-2 h-4 w-4" /> 
                              Generate Resume
                            </Button>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-4">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Resume Building Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 text-green-600 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span>Keep your resume concise and focused on relevant experiences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 text-green-600 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span>Use action verbs to describe your achievements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 text-green-600 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span>Quantify your accomplishments with numbers when possible</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 text-green-600 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span>Tailor your resume for each job application</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-green-100 p-1 text-green-600 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span>Include a professional photo to make your resume stand out</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </>
      ) : (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Your Resume</h1>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                onClick={() => setIsPreviewMode(false)}
              >
                Edit Resume
              </Button>
              <Button 
                variant="default"
                className="bg-blue-800 hover:bg-blue-900"
                onClick={downloadPDF}
              >
                <Download className="mr-2 h-4 w-4" /> 
                Download PDF
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg border overflow-hidden" ref={resumeRef}>
            {selectedTemplate === "blue" && resumeData && (
              <BlueTemplate data={resumeData} />
            )}
            {selectedTemplate === "brown" && resumeData && (
              <BrownTemplate data={resumeData} />
            )}
            {selectedTemplate === "orange" && resumeData && (
              <OrangeTemplate data={resumeData} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeBuilder;
