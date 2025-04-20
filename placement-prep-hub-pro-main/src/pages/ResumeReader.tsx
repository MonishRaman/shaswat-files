
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Upload, FileText, CheckCircle, AlertTriangle, Star, Award, Zap, BarChart } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';

const ResumeReader: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!file) {
      toast({
        variant: "destructive",
        title: "No file selected",
        description: "Please select a resume file to upload",
      });
      return;
    }

    setIsUploading(true);
    
    // Simulate file upload
    setTimeout(() => {
      setIsUploading(false);
      setUploadComplete(true);
      
      // Start analysis after upload
      setIsAnalyzing(true);
      
      // Simulate resume analysis with random score between 80 and 98
      setTimeout(() => {
        const randomScore = Math.floor(Math.random() * (98 - 80 + 1) + 80);
        setScore(randomScore);
        
        // Generate feedback based on score
        if (randomScore >= 93) {
          setFeedback("Excellent resume! Strong content and structure with clear demonstration of skills and achievements. Your resume is likely to make a great impression on recruiters.");
        } else if (randomScore >= 87) {
          setFeedback("Very good resume with well-organized sections. Consider adding more quantifiable achievements and highlighting specific technologies or skills that match your target roles.");
        } else {
          setFeedback("Good resume structure, but could benefit from more detailed descriptions of projects and clearer demonstration of skills. Try to include specific metrics and outcomes from your work experience.");
        }
        
        setIsAnalyzing(false);
      }, 2000);
    }, 1500);
  };

  const resetUpload = () => {
    setFile(null);
    setUploadComplete(false);
    setIsAnalyzing(false);
    setScore(null);
    setFeedback(null);
  };

  const getFeedbackColor = (score: number | null) => {
    if (!score) return "text-gray-700";
    if (score >= 93) return "text-green-600";
    if (score >= 87) return "text-blue-600";
    return "text-amber-600";
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Resume Reader</h1>
        <p className="text-gray-600 mt-2">Upload your resume for instant evaluation</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-t-4 border-t-placemate-blue shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="text-placemate-blue" />
              Upload Resume
            </CardTitle>
            <CardDescription>Support PDF, DOC, DOCX formats</CardDescription>
          </CardHeader>
          <CardContent>
            {!uploadComplete ? (
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-placemate-blue transition-colors bg-gray-50">
                  <input
                    type="file"
                    id="resume-upload"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <label htmlFor="resume-upload" className="cursor-pointer">
                    <Upload className="mx-auto h-12 w-12 text-placemate-blue opacity-70" />
                    <p className="mt-2 text-sm text-gray-500">
                      {file ? file.name : "Click to upload or drag and drop"}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Max file size: 5MB
                    </p>
                  </label>
                </div>
                <div className="flex justify-center">
                  <Button 
                    onClick={handleUpload} 
                    disabled={!file || isUploading}
                    className="bg-placemate-blue hover:bg-placemate-darkblue w-full"
                  >
                    {isUploading ? 'Uploading...' : 'Upload Resume'}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4 text-center">
                <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
                <p className="text-green-600 font-medium">
                  Upload successful!
                </p>
                <p className="text-sm text-gray-500">
                  {file?.name}
                </p>
                <Button variant="outline" onClick={resetUpload} className="w-full">
                  Upload Different Resume
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="border-t-4 border-t-placemate-orange shadow-md hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="text-placemate-orange" />
              Resume Analysis
            </CardTitle>
            <CardDescription>Evaluation and feedback on your resume</CardDescription>
          </CardHeader>
          <CardContent>
            {!uploadComplete ? (
              <div className="h-40 flex flex-col items-center justify-center text-gray-400 bg-gray-50 rounded-lg">
                <FileText className="h-12 w-12 mb-2 opacity-50" />
                <p>Upload your resume to see analysis</p>
              </div>
            ) : isAnalyzing ? (
              <div className="space-y-4 text-center py-8">
                <p className="text-placemate-blue font-medium mb-2">Analyzing your resume...</p>
                <Progress value={45} className="h-2 w-full" />
                <p className="text-sm text-gray-500">
                  This usually takes 10-15 seconds
                </p>
              </div>
            ) : score ? (
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <svg className="w-36 h-36">
                      <circle 
                        className="text-gray-200" 
                        strokeWidth="8" 
                        stroke="currentColor" 
                        fill="transparent" 
                        r="62" 
                        cx="70" 
                        cy="70" 
                      />
                      <circle 
                        className={score >= 93 ? "text-green-500" : score >= 87 ? "text-blue-500" : "text-amber-500"} 
                        strokeWidth="8" 
                        strokeLinecap="round"
                        stroke="currentColor" 
                        fill="transparent" 
                        r="62" 
                        cx="70" 
                        cy="70" 
                        strokeDasharray="389.6"
                        strokeDashoffset={389.6 - (389.6 * score) / 100} 
                      />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                      <p className="text-4xl font-bold">{score}</p>
                      <p className="text-sm text-gray-500">out of 100</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Award size={20} className={score >= 93 ? "text-green-500" : score >= 87 ? "text-blue-500" : "text-amber-500"} />
                    <p className="font-medium text-lg">Resume Rating:</p>
                  </div>
                  
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={20}
                        className={star <= Math.round(score / 20) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    <p className="font-medium text-lg flex items-center gap-2">
                      <Zap size={20} className={score >= 93 ? "text-green-500" : score >= 87 ? "text-blue-500" : "text-amber-500"} />
                      Feedback:
                    </p>
                    <p className={`${getFeedbackColor(score)}`}>{feedback}</p>
                  </div>
                </div>
                
                <div className={`${score >= 93 ? "bg-green-50" : score >= 87 ? "bg-blue-50" : "bg-amber-50"} p-4 rounded-lg`}>
                  <p className={`text-sm ${score >= 93 ? "text-green-700" : score >= 87 ? "text-blue-700" : "text-amber-700"}`}>
                    Want to improve your resume? Try our Resume Builder feature to create a professional resume.
                  </p>
                </div>
              </motion.div>
            ) : null}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResumeReader;
